import { useReducer } from "react";
import Reducer from "./EventosReducer";
import Context from "./EventosContext";
import { clienteAxios } from "../../components/layout/Imports";

import {
  FB_CERRAR_SESION,
  FB_USUARIO_AUTENTICADO,
  FB_USUARIO_AUTENTICADO_LOCAL,
  FB_USUARIO_LOCAL,
} from "../../types";

const OrganizacionState = (props) => {
  const initialState = {
    token: null,
    usuario: null,
    usuarioLocal: null,
    autenticado: null,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  
  return (
    <Context.Provider
      value={{
       
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default OrganizacionState;
