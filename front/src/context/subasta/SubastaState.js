import { useReducer } from "react";
import subastaReducer from "./SubastaReducer";
import subastaContext from "./SubastaContext";
import { clienteAxios, axios, uuidv4 } from "../../components/layout/Imports";

import {
  OBTENER_SUBASTAS,
  ORDENAR_FILTRAR_SUBASTAS,
  ACTUALIZAR_SUBASTA,
  ELIMINAR_SUBASTA,
  SELECCIONAR_SUBASTA,
  AGREGAR_IMAGEN,
  QUITAR_IMAGEN,
  CARGAR_COMBOS_SUBASTA,
  DESELECCIONAR_SUBASTA,
  SELECCIONAR_ITEM_CATALOGO,
  DESELECCIONAR_ITEM_CATALOGO,
  OBTENER_CATALOGO,
  SUBASTA_STATS,
} from "../../types";

const SubastaState = (props) => {
  const initialState = {
    subastaSeleccionada: null,
    subastas: [],
    resultado: [],
    imagenes: [],

    martilleros: [],
    eventos: [],
    rubros: [],
    estadosSubasta: [],
    estados: [],

    catalogo: [],
    subasta: null,
    subastaStats: null,
  };

  const [state, dispatch] = useReducer(subastaReducer, initialState);

  const registrarSubasta = async (
    DatosForm,
    setLoadingLocal,
    setAlerta,
    LeerForm
  ) => {
    try {
      setLoadingLocal(true);
      const result = await clienteAxios.post(
        "ProductosSubastar/add",
        DatosForm
      );
      for (let index = 0; index < state.imagenes.length; index++) {
        if (state.imagenes[index].accion === "agregar") {
          imagenesGuardar(
            state.imagenes[index].fileInput,
            DatosForm.identificador
          );
        }
      }
      setLoadingLocal(null);
      setAlerta({ msg: result.data.msg, type: "success" });
      LeerForm({
        titulo: "",
        descripcion: "",
        idusuario: "",
        idestado: "",
        identificador: uuidv4(),
        vendedor: "",
        vendedorcuil: "",
        vendedorurl: "",
        urlvideo: "",
        idrubro: "",
        fechainicio: "",
        fechafin: "",
        idestadoSubasta: "",
        idmartillero: "",
        base: "",
        mincuota: "",
        idevento: "",
        idtipooferta: "",
      });
      dispatch({
        type: DESELECCIONAR_SUBASTA,
      });
    } catch (e) {
      setLoadingLocal(null);
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
    }
  };

  const obtenerSubastas = async (DatosForm, setLoadingLocal, setAlerta) => {
    try {
      setLoadingLocal(true);
      const resultado = await clienteAxios.get(
        "/ProductosSubastar/getAllUser",
        {
          params: DatosForm,
        }
      );
      console.log(resultado);
      setLoadingLocal(null);
      setAlerta({ msg: resultado.data.msg, type: "success" });
      dispatch({
        type: OBTENER_SUBASTAS,
        payload: resultado.data.productos,
      });
    } catch (e) {
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
      setLoadingLocal(null);
    }
  };

  const ordenarFiltrar = (filtros, campoOrden, tipoOrden) => {
    let elementos = state.subastas;

    if (filtros !== null) {
      elementos = elementos
        .filter((item) =>
          String(item.titulo)
            .toLowerCase()
            .startsWith(`${filtros.titulo !== undefined ? filtros.titulo : ""}`)
        )
        .filter((item) =>
          String(item.fechainicio)
            .toLowerCase()
            .startsWith(
              `${filtros.fechainicio !== undefined ? filtros.fechainicio : ""}`
            )
        )
        .filter((item) =>
          String(item.estado)
            .toLowerCase()
            .startsWith(`${filtros.estado !== undefined ? filtros.estado : ""}`)
        )
        .filter((item) =>
          String(item.estadoSubasta)
            .toLowerCase()
            .startsWith(
              `${
                filtros.estadoSubasta !== undefined ? filtros.estadoSubasta : ""
              }`
            )
        )
        .filter((item) =>
          String(item.rubro)
            .toLowerCase()
            .startsWith(`${filtros.rubro !== undefined ? filtros.rubro : ""}`)
        )
        .filter((item) =>
          String(item.totalOferentes)
            .toLowerCase()
            .startsWith(
              `${
                filtros.totalOferentes !== undefined
                  ? filtros.totalOferentes
                  : ""
              }`
            )
        )
        .filter((item) =>
          String(item.ultimaOferta)
            .toLowerCase()
            .startsWith(
              `${
                filtros.ultimaOferta !== undefined ? filtros.ultimaOferta : ""
              }`
            )
        )
        .filter((item) =>
          String(item.UltimoOferente)
            .toLowerCase()
            .startsWith(
              `${
                filtros.UltimoOferente !== undefined
                  ? filtros.UltimoOferente
                  : ""
              }`
            )
        );
    } else {
      elementos = state.subastas;
    }

    // ordenar asc y desc
    if (campoOrden !== null && tipoOrden !== null) {
      if (tipoOrden !== null) {
        if (tipoOrden === "asc") {
          elementos = elementos.sort(function (a, b) {
            return String(a[campoOrden])
              .toLowerCase()
              .localeCompare(String(b[campoOrden]).toLowerCase());
          });
        } else {
          elementos = elementos.sort(function (a, b) {
            return String(b[campoOrden])
              .toLowerCase()
              .localeCompare(String(a[campoOrden]).toLowerCase());
          });
        }
      }
    } else {
      // elementos = state.personas;
    }

    dispatch({
      type: ORDENAR_FILTRAR_SUBASTAS,
      payload: elementos,
    });
  };

  const deseleccionarSubasta = () => {
    dispatch({
      type: DESELECCIONAR_SUBASTA,
    });
  };

  const actualizarSubasta = async (subasta, setLoadingLocal, setAlerta) => {
    try {
      setLoadingLocal(true);
      const resultado = await clienteAxios.put(
        "/ProductosSubastar/update",
        subasta
      );
      for (let index = 0; index < state.imagenes.length; index++) {
        if (state.imagenes[index].accion === "agregar") {
          imagenesGuardar(
            state.imagenes[index].fileInput,
            subasta.identificador
          );
        }
        if (state.imagenes[index].accion === "borrar") {
          imagenesBorrar(state.imagenes[index]);
        }
      }
      //console.log(usuario);
      setLoadingLocal(null);
      setAlerta({ msg: resultado.data.msg, type: "success" });
      dispatch({
        type: ACTUALIZAR_SUBASTA,
        payload: subasta,
      });
    } catch (e) {
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
      setLoadingLocal(null);
    }
  };

  const eliminarSubasta = async (id) => {
    try {
      await clienteAxios.delete("/ProductosSubastar/remove", {
        params: { id },
      });
      dispatch({
        type: ELIMINAR_SUBASTA,
        payload: id,
      });
    } catch (e) {}
  };

  const seleccionarSubasta = (subasta) => {
    dispatch({
      type: SELECCIONAR_SUBASTA,
      payload: subasta,
    });
  };

  const getDataCombos = () => {
    try {
      const martilleros = clienteAxios.get("/Combos/getMartilleros");
      const eventos = clienteAxios.get("/Combos/getEventos");
      const rubros = clienteAxios.get("/Combos/getProductosRubros");
      const estadosSubasta = clienteAxios.get("/Combos/getSubastasEstados");
      const estados = clienteAxios.get("/Combos/getEstados");

      axios
        .all([martilleros, eventos, rubros, estadosSubasta, estados])
        .then(
          axios.spread((...responses) => {
            const martilleros = responses[0];
            const eventos = responses[1];
            const rubros = responses[2];
            const estadosSubasta = responses[3];
            const estados = responses[4];

            console.log(
              martilleros.data.martilleros,
              eventos.data.eventos,
              rubros.data.productosrubros,
              estadosSubasta.data.subastasestados,
              estados.data.estados
            );

            dispatch({
              type: CARGAR_COMBOS_SUBASTA,
              payload: {
                martilleros: martilleros.data.martilleros.map((item) => ({
                  value: item.id,
                  label: item.nombre + " " + item.apellido,
                })),
                eventos: eventos.data.eventos.map((item) => ({
                  value: item.id,
                  label: item.titulo,
                })),
                rubros: rubros.data.productosrubros.map((item) => ({
                  value: item.id,
                  label: item.rubro,
                })),
                estadosSubasta: estadosSubasta.data.subastasestados.map(
                  (item) => ({
                    value: item.id,
                    label: item.estado,
                  })
                ),
                estados: estados.data.estados.map((item) => ({
                  value: item.id,
                  label: item.estado,
                })),
              },
            });
            // use/access the results
          })
        )
        .catch((errors) => {
          // react on errors.
        });
    } catch (e) {}

    
  };

  //imagenes

  const imagenesHandleChange = (e) => {
    if (e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      const name = e.target.files[0].name;
      const fileInput = e.target.files[0];
      console.log(e);
      dispatch({
        type: AGREGAR_IMAGEN,
        payload: {
          url,
          name,
          fileInput,
          id: "",
          idtemp: uuidv4(),
          accion: "agregar",
        },
      });
    }
  };

  const imagenesQuitar = (item) => {
    dispatch({
      type: QUITAR_IMAGEN,
      payload: item,
    });
  };

  const imagenesGuardar = async (archivo, identificador) => {
    const formData = new FormData();
    if (typeof archivo !== "string") {
      formData.append("archivo", archivo);
    }
    formData.append("identificador", identificador);
    //console.log(identificador, archivo);
    await clienteAxios.post("/Imagenes/subir", formData);
  };

  const imagenesBorrar = async (archivo) => {
    //console.log(archivo);
    await clienteAxios.get("/Imagenes/borrar", { params: { id: archivo.id } });
  };

  //imagenes

  // catalogo

  const obtenerSubastasCatalogo = async (
    DatosForm,
    setLoadingLocal,
    setAlerta
  ) => {
    try {
      setLoadingLocal(true);
      const resultado = await clienteAxios.get("/ProductosSubastar/getAll", {
        params: DatosForm,
      });
      console.log("catalogo", resultado);
      setLoadingLocal(null);
      setAlerta({ msg: resultado.data.msg, type: "success" });
      dispatch({
        type: OBTENER_CATALOGO,
        payload: resultado.data.productos,
      });
    } catch (e) {
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
      setLoadingLocal(null);
    }
  };

  const obtenerSubastaPorId = async (DatosForm, setLoadingLocal, setAlerta) => {
    try {
      setLoadingLocal(true);
      const resultado = await clienteAxios.get("/ProductosSubastar/getById", {
        params: DatosForm,
      });
      console.log("Subasta", resultado);

      if (
        resultado.data.producto.tengoPermisoOfertar === "0" &&
        resultado.data.producto.idusuario !== "0"
      ) {
        await clienteAxios.get(
          "/ProductosSubastar/enviarEmailOferenteAutorizar"
        );
      }

      setLoadingLocal(null);
      setAlerta({ msg: resultado.data.msg, type: "success" });
      dispatch({
        type: SELECCIONAR_ITEM_CATALOGO,
        payload: resultado.data.producto,
      });
    } catch (e) {
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
      setLoadingLocal(null);
    }
  };

  const deseleccionarSubastaById = () => {
    dispatch({
      type: DESELECCIONAR_ITEM_CATALOGO,
    });
  };

  // catalogo

  // subasta

  const consultarSubastaStats = async (
    DatosForm,
    setLoadingLocal,
    setAlerta
  ) => {
    try {
      setLoadingLocal(true);
      const resultado = await clienteAxios.get("/ProductosSubastar/getStats", {
        params: DatosForm,
      });
      console.log("stats", resultado);
      setLoadingLocal(null);
      setAlerta({ msg: resultado.data.msg, type: "success" });
      dispatch({
        type: SUBASTA_STATS,
        payload: resultado.data.data,
      });
    } catch (e) {
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
      setLoadingLocal(null);
    }
  };

  const registrarOferta = async (
    DatosForm,
    setLoadingLocal,
    setAlerta,
    LeerForm
  ) => {
    try {
      setLoadingLocal(true);
      const result = await clienteAxios.post(
        "subastasofertas/ofertar",
        DatosForm
      );
      setLoadingLocal(null);
      setAlerta({ msg: result.data.msg, type: "success" });
      LeerForm({
        valor: 0,
        idsubasta: state.subasta.id,
        idtipooferta: state.subasta.idtipooferta,
      });
    } catch (e) {
      setLoadingLocal(null);
      setAlerta({ msg: e.response.messages.msg, type: "error" });
    }
  };

  // subasta

  return (
    <subastaContext.Provider
      value={{
        subastas: state.subastas,
        resultado: state.resultado,
        subastaSeleccionada: state.subastaSeleccionada,
        imagenes: state.imagenes,
        martilleros: state.martilleros,
        eventos: state.eventos,
        rubros: state.rubros,
        estadosSubasta: state.estadosSubasta,
        estados: state.estados,
        catalogo: state.catalogo,
        subasta: state.subasta,
        subastaStats: state.subastaStats,
        registrarSubasta,
        obtenerSubastas,
        seleccionarSubasta,
        eliminarSubasta,
        ordenarFiltrar,
        actualizarSubasta,
        deseleccionarSubasta,
        imagenesHandleChange,
        imagenesQuitar,
        getDataCombos,
        obtenerSubastasCatalogo,
        obtenerSubastaPorId,
        deseleccionarSubastaById,
        consultarSubastaStats,
        registrarOferta,
      }}
    >
      {props.children}
    </subastaContext.Provider>
  );
};

export default SubastaState;
