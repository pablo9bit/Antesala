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
} from "../../types";

const FirebaseReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_EXITO:
      sessionStorage.setItem("token", action.payload);
      return {
        //...state,
        autenticado: true,
        token: action.payload,
      };
    case LOGIN_ERROR:
      sessionStorage.removeItem("token");
      return {
        ...state,
        autenticado: null,
        token: null,
      };
    case USUARIO_AUTENTICADO:
      return {
        ...state,
        usuario: action.payload,
        autenticado: true,
      };
    case CERRAR_SESION:
      sessionStorage.removeItem("token");
      return {
        usuario: null,
        token: null,
        autenticado: null,
      };
    case OBTENER_USUARIOS:
      return {
        ...state,
        usuarios: action.payload,
        resultado: action.payload,
      };
    case ORDENAR_FILTRAR_USUARIOS:
      return {
        ...state,
        resultado: action.payload,
      };
    case ELIMINAR_USUARIO:
      return {
        ...state,
        usuarios: state.usuarios.filter(
          (usuario) => usuario.id !== action.payload
        ),
        resultado: state.resultado.filter(
          (result) => result.id !== action.payload
        ),
      };
    case SELECCIONAR_USUARIO:
      return {
        ...state,
        usuarioSeleccionado: action.payload,
      };
    case ACTUALIZAR_USUARIO:
      return {
        ...state,
        usuarios: state.usuarios.map((usuario) =>
          usuario.id === action.payload.id ? action.payload : usuario
        ),
        resultado: state.usuarios.map((usuario) =>
          usuario.id === action.payload.id ? action.payload : usuario
        ),
        usuarioSeleccionado: action.payload,
      };
/*     case IS_OPENED_MODAL:
      return {
        ...state,
        isOpenedModal: action.payload,
      };
 */
    default:
      return state;
  }
};

export default FirebaseReducer;
