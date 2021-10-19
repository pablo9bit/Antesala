import { useReducer } from "react";
import authReducer from "./AppReducer";
import authContext from "./AppContext";
import { clienteAxios } from "../../components/shared/Imports";

import {
  LOGIN_EXITO,
  LOGIN_ERROR,
  USUARIO_AUTENTICADO,
  CERRAR_SESION,
  OBTENER_USUARIOS,
  ORDENAR_FILTRAR_USUARIOS,
  ACTUALIZAR_USUARIO,
  ELIMINAR_USUARIO,
  SELECCIONAR_USUARIO,
  IS_OPENED_MODAL,
} from "../../types";

const AppState = (props) => {
  const initialState = {
    isOpenedModal: false,
    token: sessionStorage.getItem("token"),
    usuario: null,
    autenticado: null,
    usuarioSeleccionado: null,
    usuarios: [],
    resultado: [],
  };

  const [state, dispatch] = useReducer(authReducer, initialState);



  const iniciarSesion = async (DatosForm, setLoadingLocal, setAlerta) => {
    const setData = (val) => {};
    const setError = (val) => {};

    try {
      setLoadingLocal(true);
      const result = await clienteAxios.post("auth", DatosForm);
      usuarioAutenticado(setLoadingLocal, setData, setError);
      //console.log(result);
      setAlerta({
        msg: result.data.msg,
        type: result.data.type === "error" ? "error" : "success",
      });
      dispatch({
        type: LOGIN_EXITO,
        payload: result.data.token,
      });
    } catch (e) {
      setLoadingLocal(null);
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
      dispatch({
        type: LOGIN_ERROR,
        payload: null,
      });
    }
  };

  const registrarUsuario = async (
    DatosForm,
    setLoadingLocal,
    setAlerta,
    LeerForm
  ) => {
    try {
      setLoadingLocal(true);
      const result = await clienteAxios.post("users", DatosForm);
      setLoadingLocal(null);
      setAlerta({ msg: result.data.msg, type: "success" });
      LeerForm({
        nombre: "",
        apellido: "",
        cuil: "",
        ciudad: "",
        provincia: "",
        matricula: "",
        email: "",
        password: "",
        passconfirmar: "",
        telefono: "",
        direccion: "",
        tipousuario: "1",
        colegio: "",
        url: "",
        alias: "",
        cdadpublicaciones: "0",
      });
    } catch (e) {
      setLoadingLocal(null);
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
    }
  };

  const usuarioAutenticado = async (setLoadingLocal, setData, setError) => {
    try {
      setLoadingLocal(true);
      const result = await clienteAxios.get("/auth", "");
      //console.log(result);
      dispatch({
        type: USUARIO_AUTENTICADO,
        payload: result.data.usuario,
      });
      setData(true);
      setLoadingLocal(false);
    } catch (e) {
      setError(true);
      setLoadingLocal(false);

      /*   dispatch({
        type: LOGIN_ERROR,
        payload: mensaje,
      }); */
    }
  };

  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  const activarCuenta = async (code, setLoadingLocal, setAlerta) => {
    try {
      setLoadingLocal(true);
      //console.log(code);
      const result = await clienteAxios.get("/auth/activar", {
        params: { id: code },
      });
      console.log(result);
      setLoadingLocal(null);
      setAlerta({ msg: result.data.msg, type: "success" });
    } catch (e) {
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
      setLoadingLocal(null);
    }
  };

  const olvidePassword = async (DatosForm, setLoadingLocal, setAlerta) => {
    try {
      setLoadingLocal(true);
      const result = await clienteAxios.post("/auth/recuperar", DatosForm);
      setLoadingLocal(null);
      setAlerta({ msg: result.data.msg, type: "success" });
    } catch (e) {
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
      setLoadingLocal(null);
    }
  };

  const recuperarPassword = async (DatosForm, setLoadingLocal, setAlerta) => {
    try {
      setLoadingLocal(true);
      const result = await clienteAxios.post("/auth/cambiarRecuperarPassword", DatosForm);
      setLoadingLocal(null);
      setAlerta({ msg: result.data.msg, type: "success" });
    } catch (e) {
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
      setLoadingLocal(null);
    }
  };

  const cambiarPassword = async (usuario, setLoadingLocal, setAlerta) => {
    try {
      setLoadingLocal(true);
      const resultado = await clienteAxios.put("/users", usuario);
      //console.log(usuario);
      setLoadingLocal(null);
      setAlerta({ msg: resultado.data.msg+". Por razones de Seguridad, se cerro su Sesión. Vuelva a Ingresar", type: "success" });
      dispatch({
        type: CERRAR_SESION,
      });
    } catch (e) {
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
      setLoadingLocal(null);
    }
  };
  

  // MODAL

  const openModal = () => {
    dispatch({
      type: IS_OPENED_MODAL,
      payload: true,
    });
    console.log("open");
    window.scrollTo(0, 0);
  };
  
  const closeModal = (cierro) => {
    if (cierro) {
      dispatch({
        type: IS_OPENED_MODAL,
        payload: false,
      });
    }
  };


  
  return (
    <authContext.Provider
      value={{
        isOpenedModal: state.isOpenedModal,

        token: state.token,
        usuario: state.usuario,
        autenticado: state.autenticado,

        openModal,
        closeModal,
        iniciarSesion,
        registrarUsuario,
        usuarioAutenticado,
        cerrarSesion,
        activarCuenta,
        recuperarPassword,
        olvidePassword,
        cambiarPassword,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AppState;
