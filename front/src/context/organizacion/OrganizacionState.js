import { useReducer } from "react";
import Reducer from "./OrganizacionReducer";
import Context from "./OrganizacionContext";
import { clienteAxios, axios, uuidv4 } from "../../components/layout/Imports";

import {
  OBTENER_USUARIOS,
  ORDENAR_FILTRAR_USUARIOS,
  SELECCIONAR_USUARIO,
  DESELECCIONAR_USUARIO,
  ACTUALIZAR_USUARIO,
  ELIMINAR_USUARIO,
  CARGAR_COMBOS_USUARIO,
  OBTENER_ORGANIZACION,
  AGREGAR_IMAGEN,
  QUITAR_IMAGEN,
} from "../../types";

const OrganizacionState = (props) => {
  const initialState = {
    usuarioSeleccionado: null,
    usuarios: [],
    resultado: [],

    tiposUsuarios: [],
    estadosUsuarios: [],

    organizacionSeleccionada: null,
    imagenes: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const obtenerUsuarios = async (DatosForm, setLoadingLocal, setAlerta) => {
    if (DatosForm.idtipo !== "") {
      try {
        setLoadingLocal(true);
        const resultado = await clienteAxios.get("/User/getAll", {
          params: DatosForm,
        });
        console.log("usuarios", resultado);
        setLoadingLocal(null);
        setAlerta({ msg: resultado.data.msg, type: "success" });
        dispatch({
          type: OBTENER_USUARIOS,
          payload: resultado.data.usuarios,
        });
      } catch (e) {
        setAlerta({ msg: e.response.data.messages.msg, type: "error" });
        setLoadingLocal(null);
      }
    } else {
      dispatch({
        type: OBTENER_USUARIOS,
        payload: [],
      });
    }
  };

  const ordenarFiltrar = (filtros, campoOrden, tipoOrden) => {
    let elementos = state.usuarios;

    if (filtros !== null && elementos.length !== 0) {
      elementos = elementos
        .filter((item) =>
          String(item.cuil)
            .toLowerCase()
            .startsWith(`${filtros.cuil !== undefined ? filtros.cuil : ""}`)
        )
        .filter((item) =>
          String(item.nombre)
            .toLowerCase()
            .startsWith(`${filtros.nombre !== undefined ? filtros.nombre : ""}`)
        )
        .filter((item) =>
          String(item.apellido)
            .toLowerCase()
            .startsWith(
              `${filtros.apellido !== undefined ? filtros.apellido : ""}`
            )
        )
        .filter((item) =>
          String(item.alias)
            .toLowerCase()
            .startsWith(`${filtros.alias !== undefined ? filtros.alias : ""}`)
        )
        .filter((item) =>
          String(item.email)
            .toLowerCase()
            .startsWith(`${filtros.email !== undefined ? filtros.email : ""}`)
        )
        .filter((item) =>
          String(item.matricula)
            .toLowerCase()
            .startsWith(
              `${filtros.matricula !== undefined ? filtros.matricula : ""}`
            )
        )
        .filter((item) =>
          String(item.estado)
            .toLowerCase()
            .startsWith(`${filtros.estado !== undefined ? filtros.estado : ""}`)
        );
    } else {
      elementos = state.usuarios;
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
      type: ORDENAR_FILTRAR_USUARIOS,
      payload: elementos,
    });
  };

  const deseleccionarUsuario = () => {
    dispatch({
      type: DESELECCIONAR_USUARIO,
    });
  };

  const actualizarUsuario = async (usuario, setLoadingLocal, setAlerta) => {
    try {
      setLoadingLocal(true);
      const resultado = await clienteAxios.put("/User/update", usuario);
      setLoadingLocal(null);
      setAlerta({ msg: resultado.data.msg, type: "success" });
      //console.log(usuario);
      dispatch({
        type: ACTUALIZAR_USUARIO,
        payload: usuario,
      });
    } catch (e) {
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
      setLoadingLocal(null);
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      await clienteAxios.delete("/User/remove", {
        params: { id },
      });
      dispatch({
        type: ELIMINAR_USUARIO,
        payload: id,
      });
    } catch (e) {}
  };

  const seleccionarUsuario = (usuario) => {
    dispatch({
      type: SELECCIONAR_USUARIO,
      payload: usuario,
    });
  };

  const getDataCombos = () => {
    if (
      state.tiposUsuarios.length === 0 ||
      state.estadosUsuarios.length === 0
    ) {
      try {
        const tiposUsuarios = clienteAxios.get("/Combos/getUsuariosTipos");
        const estadosUsuarios = clienteAxios.get("/Combos/getUsuariosEstados");

        axios
          .all([tiposUsuarios, estadosUsuarios])
          .then(
            axios.spread((...responses) => {
              const tiposUsuarios = responses[0];
              const estadosUsuarios = responses[1];

              console.log(
                tiposUsuarios.data.usuariostipos,
                estadosUsuarios.data.usuariosestados
              );

              dispatch({
                type: CARGAR_COMBOS_USUARIO,
                payload: {
                  tiposUsuarios: tiposUsuarios.data.usuariostipos.map(
                    (item) => ({
                      value: item.id,
                      label: item.tipo,
                    })
                  ),
                  estadosUsuarios: estadosUsuarios.data.usuariosestados.map(
                    (item) => ({
                      value: item.id,
                      label: item.estado,
                    })
                  ),
                },
              });
              // use/access the results
            })
          )
          .catch((errors) => {
            // react on errors.
          });
      } catch (e) {}
    }
  };

  const getOrganizacion = async (idusuario, setLoadingLocal, setAlerta) => {
    try {
      setLoadingLocal(true);
      const result = await clienteAxios.get("User/getOrganizacion", {
        params: { idusuario },
      });
      console.log("getOrg", result);

      dispatch({
        type: OBTENER_ORGANIZACION,
        payload: result.data.org,
      });
      setLoadingLocal(null);
    } catch (e) {
      setLoadingLocal(null);
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
    }
  };

  const saveOrganizacion = async (organizacion, setLoadingLocal, setAlerta) => {
    try {
      setLoadingLocal(true);
      const resultado = await clienteAxios.put(
        "/user/addOrUpdateOrganizacion",
        organizacion
      );

      /* for (let index = 0; index < state.imagenes.length; index++) {
        if (state.imagenes[index].accion === "agregar") {
          imagenesGuardar(state.imagenes[index].fileInput, subasta.identificador);
        }
        if (state.imagenes[index].accion === "borrar") {
          imagenesBorrar(state.imagenes[index]);
        }
      } */

      console.log(resultado);
      setLoadingLocal(null);
      setAlerta({ msg: resultado.data.msg, type: "success" });
    } catch (e) {
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
      setLoadingLocal(null);
    }
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

  return (
    <Context.Provider
      value={{
        usuarios: state.usuarios,
        resultado: state.resultado,
        usuarioSeleccionado: state.usuarioSeleccionado,
        tiposUsuarios: state.tiposUsuarios,
        estadosUsuarios: state.estadosUsuarios,
        organizacionSeleccionada: state.organizacionSeleccionada,
        imagenes: state.imagenes,
        obtenerUsuarios,
        ordenarFiltrar,
        deseleccionarUsuario,
        actualizarUsuario,
        eliminarUsuario,
        seleccionarUsuario,
        getDataCombos,
        getOrganizacion,
        saveOrganizacion,
        imagenesHandleChange,
        imagenesQuitar,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default OrganizacionState;