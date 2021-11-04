import { useReducer } from "react";
import authReducer from "./FirebaseReducer";
import authContext from "./FirebaseContext";
import {
  auth,
  provider,
  signInWithPopup,
} from "../../config/firebase";
import { clienteAxios } from "../../components/layout/Imports";

import {
  FB_LOGIN_EXITO,
  FB_CERRAR_SESION,
  FB_USUARIO_AUTENTICADO,
  FB_USUARIO_LOCAL,
} from "../../types";

const FirebaseState = (props) => {
  const initialState = {
    token: null,
    usuario: null,
    usuarioLocal: null,
    autenticado: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const iniciarSesion = async () => {
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          // const user = result.user;
          dispatch({
            type: FB_LOGIN_EXITO,
            payload: result,
          });
        })
        .catch((error) => {
          // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.email;
          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          dispatch({
            type: FB_CERRAR_SESION,
          });
        });
    } catch (err) {
      dispatch({
        type: FB_CERRAR_SESION,
      });
    }
  };

  const userInfoLocal = async (setLoadingLocal, setData, setError) => {
    try {
      setLoadingLocal(true);
      const result = await clienteAxios.get("/Auth/authUID", "");

      console.log(result);
      dispatch({
        type: FB_USUARIO_LOCAL,
        payload: result.data.token,
      });
      setData(true);
      setLoadingLocal(false);
    } catch (e) {
      setError(true);
      setLoadingLocal(false);
    }
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

  const cerrarSesion = () => {
    auth.signOut();
    dispatch({
      type: FB_CERRAR_SESION,
    });
  };

  /*   const registrarUsuario = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
        await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      }); 
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
 */
  return (
    <authContext.Provider
      value={{
        usuario: state.usuario,
        autenticado: state.autenticado,
        usuarioLocal: state.userInfoLocal,
        token: state.token,
        userInfoLocal,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default FirebaseState;
