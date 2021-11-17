import { useReducer } from "react";
import authReducer from "./FirebaseReducer";
import authContext from "./FirebaseContext";
import {
  auth,
  provider,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "../../config/firebase";
import { clienteAxios, Swal } from "../../components/layout/Imports";

import {
  FB_CERRAR_SESION,
  FB_USUARIO_AUTENTICADO,
  FB_USUARIO_AUTENTICADO_LOCAL,
  FB_USUARIO_LOCAL,
} from "../../types";
import { isAdmin } from "@firebase/util";

const FirebaseState = (props) => {
  const initialState = {
    token: null,
    usuario: null,
    usuarioLocal: null,
    autenticado: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const iniciarSesionRedirect = async () => {
    sessionStorage.setItem("action", "iniciarSesionRedirect");
    signInWithRedirect(auth, provider).then(() => {
      //console.log("sing");
    });
  };

  const iniciarSesionEmailAndPass = async (
    DatosForm,
    setLoadingLocal,
    setAlerta,
    history
  ) => {
    try {
      setLoadingLocal(true);
      signInWithEmailAndPassword(auth, DatosForm.email, DatosForm.password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            dispatch({
              type: FB_USUARIO_AUTENTICADO,
              payload: user,
            });
            userInfoLocal(user.uid, history);
          }
          setLoadingLocal(null);
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage === "Firebase: Error (auth/user-not-found).") {
            setAlerta({ msg: "No se Encuentra Registrado.", type: "danger" });
          }
          console.log(errorMessage);
          setLoadingLocal(null);
        });
    } catch (error) {}
  };

  const obtenerInfoLogin = async (setLoadingLocal, history) => {
    try {
      setLoadingLocal(true);
      getRedirectResult(auth)
        .then((result) => {
          const user = result.user;
          if (user) {
            dispatch({
              type: FB_USUARIO_AUTENTICADO,
              payload: user,
            });
            userInfoLocal(user.uid, history);
          }
          setLoadingLocal(false);
        })
        .catch((error) => {
          setLoadingLocal(false);
        });
    } catch (e) {
      setLoadingLocal(false);
    }
  };

  const userInfoLocal = async (uid, history) => {
    let token = null;
    try {
      const result = await clienteAxios.get("/Auth/authUID", {
        params: { uid },
      });

      token = result.data.token;

      if (!token) {
        history.push("/completarRegistro");
      } else {
        console.log(result);
        dispatch({
          type: FB_USUARIO_LOCAL,
          payload: token,
        });

        if (sessionStorage.getItem("url")) {
          const url = sessionStorage.getItem("url");
          sessionStorage.removeItem("url");
          history.push(url);
        } else {
          switch (result.data.usuario.tipousuario) {
            case "9":
              history.push("/admin");
              break;

            case "1":
              history.push("/org");
              break;

            default:
              break;
          }
        }
      }
    } catch (e) {}
    return token;
  };

  const usuarioAutenticado = (setLoadingLocal, setData, setError) => {
    try {
      setLoadingLocal(true);
      auth.onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          dispatch({
            type: FB_USUARIO_AUTENTICADO,
            payload: user,
          });
          usuarioAutenticadoLocal();
          setData(true);
        } else {
          setError(true);
        }
      });
      setLoadingLocal(false);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const usuarioAutenticadoLocal = async () => {
    try {
      const result = await clienteAxios.get("/Auth/getInfo");
      dispatch({
        type: FB_USUARIO_AUTENTICADO_LOCAL,
        payload: result.data.usuario,
      });
    } catch (e) {}
  };

  const completarRegistro = async (
    DatosForm,
    setLoadingLocal,
    setAlerta,
    LeerForm
  ) => {
    try {
      setLoadingLocal(true);
      const result = await clienteAxios.post(
        "User/completarregistro",
        DatosForm
      );
      dispatch({
        type: FB_USUARIO_LOCAL,
        payload: result.data.token,
      });
      setLoadingLocal(null);
      setAlerta({ msg: result.data.msg, type: "success" });
      LeerForm({
        telefono: "",
        tipousuario: "",
        uid: "",
        nombre: "",
        apellido: "",
        email: "",
      });
    } catch (e) {
      setLoadingLocal(null);
      setAlerta({ msg: e.response.data.messages.msg, type: "error" });
    }
  };

  const cerrarSesion = () => {
    sessionStorage.removeItem("action");
    auth.signOut();
    dispatch({
      type: FB_CERRAR_SESION,
    });
    // history.push("/ingresar");
  };

  const registrarUsuario = async (
    DatosForm,
    setLoadingLocal,
    setAlerta,
    LeerForm
  ) => {
    try {
      setAlerta(null);
      setLoadingLocal(true);
      createUserWithEmailAndPassword(auth, DatosForm.email, DatosForm.password)
        .then((userCredential) => {
          const user = userCredential.user;
          DatosForm.uid = user.uid;
          registroUsuarioLocal(DatosForm, setLoadingLocal, setAlerta, LeerForm);
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
            setAlerta({ msg: "El usuario ya Existe", type: "danger" });
          }
          setLoadingLocal(null);
        });
    } catch (e) {
      setLoadingLocal(null);
    }
  };

  const resetPassword = async (
    DatosForm,
    setLoadingLocal,
    setAlerta,
    history
  ) => {
    try {
      setLoadingLocal(true);
      sendPasswordResetEmail(auth, DatosForm.email)
        .then(() => {
          // Password reset email sent!
          // ..
          setLoadingLocal(null);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setLoadingLocal(null);
        });
    } catch (error) {}
  };

  const registroUsuarioLocal = async (
    DatosForm,
    setLoadingLocal,
    setAlerta,
    LeerForm
  ) => {
    try {
      setLoadingLocal(true);
      clienteAxios.post("User/completarregistro", DatosForm);
      setAlerta({ msg: "Se Creo el Usuario con Exito", type: "success" });
      LeerForm({
        email: "",
        password: "",
        confirmar: "",
        nombre: "",
        apellido: "",
        telefono: "",
        tipousuario: "",
      });
      setLoadingLocal(null);
    } catch (error) {
      setLoadingLocal(null);
      setAlerta({ msg: "Hubo un Error", type: "danger" });
    }
  };

  const noPermitido = (tipo, setPermitido, history) => {
    /* 
    1 ORGANIZACION
    2 EXPECTADOR
    3 RRHH
    9 ADMIN 
    */

    if (state.usuarioLocal !== null) {
      console.log(tipo.indexOf(state.usuarioLocal.tipousuario));

        if (tipo.indexOf(state.usuarioLocal.tipousuario) < 0) {

          Swal.fire({
            allowOutsideClick: false,
            title: "No puede acceder a esta Sección",
            icon: "error",
            text: "Privilegios Insuficientes",
          }).then((result) => {
            if (result.isConfirmed) {
              switch (state.usuarioLocal.tipousuario) {
                case "9":
                  history.push("/admin");
                  break;
                case "1":
                  history.push("/org");
                  break;
                case "2":
                  history.push("/exp");
                  break;
                case "3":
                  history.push("/rrhh");
                  break;
                default:
                  history.push("/ingresar");
                  break;
              }
            }
          });
        } else {
          setPermitido("si");
        }

    }
  };

  return (
    <authContext.Provider
      value={{
        usuario: state.usuario,
        autenticado: state.autenticado,
        usuarioLocal: state.usuarioLocal,
        token: state.token,
        userInfoLocal,
        obtenerInfoLogin,
        iniciarSesionRedirect,
        usuarioAutenticado,
        cerrarSesion,
        completarRegistro,
        registrarUsuario,
        iniciarSesionEmailAndPass,
        resetPassword,
        noPermitido,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default FirebaseState;
