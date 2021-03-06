import {
  FB_USUARIO_AUTENTICADO,
  FB_USUARIO_AUTENTICADO_LOCAL,
  FB_CERRAR_SESION,
  FB_USUARIO_LOCAL
} from "../../types";

const FirebaseReducer = (state, action) => {
  switch (action.type) {
    case FB_USUARIO_AUTENTICADO_LOCAL:
      return {
        ...state,
        usuarioLocal: action.payload,
      };
    case FB_USUARIO_LOCAL:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
      };
    case FB_USUARIO_AUTENTICADO:
      return {
        ...state,
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
