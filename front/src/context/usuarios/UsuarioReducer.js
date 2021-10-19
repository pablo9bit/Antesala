import {
  OBTENER_USUARIOS,
  ORDENAR_FILTRAR_USUARIOS,
  SELECCIONAR_USUARIO,
  DESELECCIONAR_USUARIO,
  ACTUALIZAR_USUARIO,
  ELIMINAR_USUARIO,
  CARGAR_COMBOS_USUARIO,
} from "../../types";

const UsuarioReducer = (state, action) => {
  switch (action.type) {
    case OBTENER_USUARIOS:
      return {
        ...state,
        usuarios: action.payload,
        resultado: action.payload,
        usuarioSeleccionado: null,
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
    case DESELECCIONAR_USUARIO:
      return {
        ...state,
        usuarioSeleccionado: null,
      };
    case ACTUALIZAR_USUARIO:
      console.log('payload',action.payload);
      return {
        ...state,
        usuarios: state.usuarios.map((usuario) =>
          usuario.id === action.payload.id ? action.payload : usuario
        ),
        resultado: state.resultado.map((usuario) =>
          usuario.id === action.payload.id ? action.payload : usuario
        ),
       // usuarioSeleccionado: action.payload,
      };
    case CARGAR_COMBOS_USUARIO:
      console.log("payload", action.payload);
      return {
        ...state,
        tiposUsuarios: action.payload.tiposUsuarios,
        estadosUsuarios: action.payload.estadosUsuarios,
      };
    default:
      return state;
  }
};

export default UsuarioReducer;