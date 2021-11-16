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
  CAMBIAR_ESTADO_USUARIO
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

  const obtenerOrganizaciones = async (DatosForm, setLoadingLocal) => {
    if (DatosForm.idtipo !== "") {
      try {
        setLoadingLocal(true);
        const resultado = await clienteAxios.get("/User/getOrganizaciones", {
          params: DatosForm,
        });
        console.log("usuarios", resultado);
        setLoadingLocal(null);
        dispatch({
          type: OBTENER_USUARIOS,
          payload: resultado.data.organizaciones,
        });
      } catch (e) {
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
          String(item.nombre)
            .toLowerCase()
            .startsWith(`${filtros.nombre !== undefined ? filtros.nombre : ""}`)
        )
        .filter((item) =>
          String(item.razon_social)
            .toLowerCase()
            .startsWith(
              `${
                filtros.razon_social !== undefined ? filtros.razon_social : ""
              }`
            )
        )
        .filter((item) =>
          String(item.telefono)
            .toLowerCase()
            .startsWith(
              `${filtros.telefono !== undefined ? filtros.telefono : ""}`
            )
        )
        .filter((item) =>
          String(item.ubicacion)
            .toLowerCase()
            .startsWith(
              `${filtros.ubicacion !== undefined ? filtros.ubicacion : ""}`
            )
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

  const cambiarEstado = (usuario) => {
    dispatch({
      type: CAMBIAR_ESTADO_USUARIO,
      payload: usuario,
    });
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
        obtenerOrganizaciones,
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
        cambiarEstado,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default OrganizacionState;
