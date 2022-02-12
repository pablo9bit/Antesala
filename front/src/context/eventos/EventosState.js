import { useReducer } from "react";
import Reducer from "./EventosReducer";
import Context from "./EventosContext";
import { clienteAxios } from "../../components/layout/Imports";

import { OBTENER_EVENTOS, ORDENAR_FILTRAR_EVENTOS } from "../../types";

const EventosState = (props) => {
  const initialState = {
    eventoSeleccionado: null,
    eventos: [],
    resultado: [],

    eventoSeleccionado: null,
    imagenes: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const obtenerEventos = async (DatosForm, setLoadingLocal) => {
    if (DatosForm.idtipo !== "") {
      try {
        setLoadingLocal(true);
        const resultado = await clienteAxios.get("/Eventos/getAll", {
          params: DatosForm,
        });
        console.log("eventos", resultado);
        setLoadingLocal(null);
        dispatch({
          type: OBTENER_EVENTOS,
          payload: resultado.data.eventos,
        });
      } catch (e) {
        setLoadingLocal(null);
      }
    } else {
      dispatch({
        type: OBTENER_EVENTOS,
        payload: [],
      });
    }
  };

  const ordenarFiltrar = (filtros, campoOrden, tipoOrden) => {
    let elementos = state.eventos;

    if (filtros !== null && elementos.length !== 0) {
      elementos = elementos
        .filter((item) =>
          String(item.nombre)
            .toLowerCase()
            .startsWith(`${filtros.nombre !== undefined ? filtros.nombre : ""}`)
        )
        .filter((item) =>
          String(item.razon_social)
            .toLowerCase()
            .startsWith(
              `${
                filtros.razon_social !== undefined ? filtros.razon_social : ""
              }`
            )
        )
        .filter((item) =>
          String(item.telefono)
            .toLowerCase()
            .startsWith(
              `${filtros.telefono !== undefined ? filtros.telefono : ""}`
            )
        )
        .filter((item) =>
          String(item.ubicacion)
            .toLowerCase()
            .startsWith(
              `${filtros.ubicacion !== undefined ? filtros.ubicacion : ""}`
            )
        )
        .filter((item) =>
          String(item.estado)
            .toLowerCase()
            .startsWith(`${filtros.estado !== undefined ? filtros.estado : ""}`)
        );
    } else {
      elementos = state.eventos;
    }

    // ordenar asc y desc
    if (campoOrden !== null && tipoOrden !== null) {
      if (tipoOrden !== null) {
        if (tipoOrden === "asc") {
          elementos = elementos.sort(function (a, b) {
            return String(a[campoOrden])
              .toLowerCase()
              .localeCompare(String(b[campoOrden]).toLowerCase());
          });
        } else {
          elementos = elementos.sort(function (a, b) {
            return String(b[campoOrden])
              .toLowerCase()
              .localeCompare(String(a[campoOrden]).toLowerCase());
          });
        }
      }
    } else {
      // elementos = state.personas;
    }

    dispatch({
      type: ORDENAR_FILTRAR_EVENTOS,
      payload: elementos,
    });
  };

  return (
    <Context.Provider
      value={{
        eventos: state.eventos,
        resultado: state.resultado,
        eventoSeleccionado: state.eventoSeleccionado,
        imagenes: state.imagenes,
        obtenerEventos,
        ordenarFiltrar,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default EventosState;
