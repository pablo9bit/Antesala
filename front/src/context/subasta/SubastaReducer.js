import {
  OBTENER_SUBASTAS,
  ORDENAR_FILTRAR_SUBASTAS,
  ACTUALIZAR_SUBASTA,
  ELIMINAR_SUBASTA,
  SELECCIONAR_SUBASTA,
  AGREGAR_IMAGEN,
  QUITAR_IMAGEN,
  CARGAR_COMBOS_SUBASTA,
  DESELECCIONAR_SUBASTA,
  OBTENER_CATALOGO,
  SELECCIONAR_ITEM_CATALOGO,
  DESELECCIONAR_ITEM_CATALOGO,
  SUBASTA_STATS,
} from "../../types";

const SubastaReducer = (state, action) => {
  switch (action.type) {
    case OBTENER_CATALOGO:
      return {
        ...state,
        catalogo: action.payload,
        subasta: null,
      };
    case OBTENER_SUBASTAS:
      return {
        ...state,
        subastas: action.payload,
        resultado: action.payload,
        subastaSeleccionada: null,
        imagenes: [],
      };
    case ORDENAR_FILTRAR_SUBASTAS:
      return {
        ...state,
        resultado: action.payload,
      };
    case ELIMINAR_SUBASTA:
      return {
        ...state,
        subastas: state.subastas.filter(
          (subasta) => subasta.id !== action.payload
        ),
        resultado: state.resultado.filter(
          (result) => result.id !== action.payload
        ),
      };
    case SELECCIONAR_SUBASTA:
      return {
        ...state,
        subastaSeleccionada: action.payload,
        imagenes: action.payload.imagenes.map((item) => ({
          url: `${process.env.REACT_APP_URL_BASE_API_IMAGENES}${item.archivo}`,
          name: item.archivo,
          id: item.id,
          accion: "",
          file: null,
          idtemp: item.id,
        })),
      };
    case DESELECCIONAR_SUBASTA:
      return {
        ...state,
        subastaSeleccionada: null,
        imagenes: [],
      };
    case ACTUALIZAR_SUBASTA:
      return {
        ...state,
        subastas: state.subastas.map((subasta) =>
          subasta.id === action.payload.id ? action.payload : subasta
        ),
        resultado: state.subastas.map((subasta) =>
          subasta.id === action.payload.id ? action.payload : subasta
        ),
        subastaSeleccionada: action.payload,
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
    case CARGAR_COMBOS_SUBASTA:
      console.log("payload", action.payload);
      return {
        ...state,
        martilleros: action.payload.martilleros,
        rubros: action.payload.rubros,
        eventos: action.payload.eventos,
        estadosSubasta: action.payload.estadosSubasta,
        estados: action.payload.estados,
      };
    case SELECCIONAR_ITEM_CATALOGO:
      return {
        ...state,
        subasta: action.payload,
      };
    case DESELECCIONAR_ITEM_CATALOGO:
      return {
        ...state,
        subasta: null,
      };
    case SUBASTA_STATS:
      console.log(action.payload);
      return {
        ...state,
        subastaStats: action.payload,
      };
    default:
      return state;
  }
};

export default SubastaReducer;
