import {
  FB_LOGIN_EXITO,
  FB_USUARIO_AUTENTICADO,
  FB_CERRAR_SESION,
  FB_USUARIO_LOCAL
} from "../../types";

const FirebaseReducer = (state, action) => {
  switch (action.type) {
    case FB_USUARIO_LOCAL:
      localStorage.set('token', action.payload);
      return {
        token: action.payload,
      };
    case FB_USUARIO_AUTENTICADO:
      return {
        autenticado: true,
        usuario: action.payload,
      };
    case FB_LOGIN_EXITO:
      return {
        autenticado: true,
        usuario: action.payload,
      };
    case FB_CERRAR_SESION:
      sessionStorage.removeItem('token');
      return {
        token: null,
        usuario: null,
        autenticado: null,
        usuarioLocal: null,
      };

    default:
      return state;
  }
};

export default FirebaseReducer;
