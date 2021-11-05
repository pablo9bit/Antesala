import { useReducer } from "react";
import authReducer from "./FirebaseReducer";
import authContext from "./FirebaseContext";
import { auth, provider, signInWithRedirect } from "../../config/firebase";
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
    sessionStorage.setItem('action', 'log' );
    signInWithRedirect(auth, provider).then(()=>{
      console.log('sing');
    }
      
    );
  };

  const userInfoLocal = async () => {
    let token = null;
    try {
      const result = await clienteAxios.get("/Auth/authUID", {
        params: { uid: state.usuario.uid },
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
        usuarioLocal: state.usuarioLocal,
        token: state.token,
        userInfoLocal,
        iniciarSesionRedirect,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default FirebaseState;
