import { useContext, useState } from "react";
import { EventoContext, Tabla } from "../../../layout/Imports";
import AccionesListarEventos from "./AccionesListarEventos";
import ExcelExport from "./ExcelExport";

const ListarEventos = ({ columnas, registrosPorPagina }) => {
  const eventoContext = useContext(EventoContext);
  const { resultado, eventos, ordenarFiltrar } = eventoContext;

  const [filtros, setFiltros] = useState({
    nombre: "",
    apellido: "",
    cuil: "",
    matricula: "",
    email: "",
    estado: "",
    alias: "",
    telefono: "",
    tipo: "",
  });

  return (
    <>
      {resultado ? (
        <>
          <ExcelExport data={resultado} />
          <Tabla
            registrosPorPagina={registrosPorPagina}
            itemsOriginal={eventos}
            itemsResultado={resultado}
            columnas={columnas}
            filtros={filtros}
            setFiltros={setFiltros}
            fnordenarFiltrar={ordenarFiltrar}
            AccionesListar={AccionesListarEventos}
            TemplateFila={null}
          />
        </>
      ) : null}
    </>
  );
};

export default ListarEventos;
