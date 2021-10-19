import { useContext, useState } from "react";
import { SubastaContext, Tabla } from "../../layout/Imports";
import AccionesListar from "./AccionesListarSubastas";

const ListarSubastas = ({columnas, registrosPorPagina}) => {
  
  const subastaContext = useContext(SubastaContext);
  const { resultado, subastas, ordenarFiltrar } = subastaContext;

  const [filtros, setFiltros] = useState({
    titulo: "",
    fecInicio: "",
    estado: "",
    estadoSubasta: "",
  });

  return (
    <>
    {resultado ?
    <Tabla
      registrosPorPagina={registrosPorPagina}
      itemsOriginal={subastas}
      itemsResultado={resultado}
      columnas={columnas}
      filtros={filtros}
      setFiltros={setFiltros}
      fnordenarFiltrar={ordenarFiltrar}
      AccionesListar={AccionesListar}
      TemplateFila={null}
    /> : null}
    </>
  );
};

export default ListarSubastas;
