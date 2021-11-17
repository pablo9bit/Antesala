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
  CAMBIAR_ESTADO_USUARIO,
} from "../../types";

const OrganizacionReducer = (state, action) => {
  switch (action.type) {
    case OBTENER_ORGANIZACION:
      return {
        ...state,
        organizacionSeleccionada: action.payload,
        imagenes: action.payload.imagenes.map((item) => ({
          idusuario: item.idusuario,
          url: `${process.env.REACT_APP_URL_BASE_UPLOADS}${item.archivo}`,
          name: item.archivo,
          id: item.id,
          accion: "",
          file: null,
          idtemp: item.id,
        })),
      };
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
      console.log("payload", action.payload);
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
    case AGREGAR_IMAGEN:
      return {
        ...state,
        imagenes: [...state.imagenes, action.payload],
      };
    case QUITAR_IMAGEN:
      return {
        ...state,
        imagenes: state.imagenes.map((fileitem) =>
          fileitem.idtemp === action.payload.idtemp
            ? { ...fileitem, accion: "borrar" }
            : fileitem
        ),
      };
    case CAMBIAR_ESTADO_USUARIO:
      return {
        ...state,
        usuarios: state.usuarios.map((usuario) =>
          usuario.idusuario === action.payload.idusuario
            ? action.payload
            : usuario
        ),
      };
    default:
      return state;
  }
};

export default OrganizacionReducer;
