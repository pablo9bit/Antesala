import { useReducer } from "react";
import authReducer from "./FirebaseReducer";
import authContext from "./FirebaseContext";
import {
  auth,
  provider,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword
} from "../../config/firebase";
import { clienteAxios, useHistory } from "../../components/layout/Imports";

import {
  FB_CERRAR_SESION,
  FB_USUARIO_AUTENTICADO,
  FB_USUARIO_LOCAL,
} from "../../types";

const FirebaseState = (props) => {
  const history = useHistory();
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
      console.log("sing");
    });
  };

  const obtenerInfoLogin = async (setLoadingLocal) => {
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
            userInfoLocal(user.uid);
          }
          setLoadingLocal(false);
        })
        .catch((error) => {
          setLoadingLocal(false);
          // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.email;
          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } catch (e) {
      setLoadingLocal(false);
    }
  };

  const userInfoLocal = async (uid) => {
    let token = null;
    try {
      const result = await clienteAxios.get("/Auth/authUID", {
        params: { uid },
      });

      /*   const result = await clienteAxios.post("/Auth/add", {
        uid: state.usuario.uid,
        nombre: state.usuario,
      }); */

      console.log("hola");
      token = result.data.token;
      console.log(result);
      dispatch({
        type: FB_USUARIO_LOCAL,
        payload: result.data.token,
      });
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
      setLoadingLocal(true);
      const res = await auth.createUserWithEmailAndPassword(
        DatosForm.email,
        DatosForm.password
      );
      const user = res.user;
      console.log(user.uid);
      DatosForm.uid = user.uid;
      const result = await clienteAxios.post("users/add", DatosForm);
      setLoadingLocal(null);
      setAlerta({ msg: result.data.msg, type: "success" });
      LeerForm({
        email: "",
        password: "",
        confirmar: "",
        nombre: "",
        apellido: "",
        telefono: "",
        tipousuario: "",
      });
    } catch (e) {
      setLoadingLocal(null);
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
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default FirebaseState;
