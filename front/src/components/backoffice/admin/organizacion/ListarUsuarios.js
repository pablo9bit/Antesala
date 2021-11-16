import { useContext, useState } from "react";
import { OrganizacionContext, Tabla } from "../../../layout/Imports";
import AccionesListarUsuarios from "./AccionesListarUsuarios";
import ExcelExport from "./ExcelExport";

const ListarUsuarios = ({ columnas, registrosPorPagina }) => {
  const usuarioContext = useContext(OrganizacionContext);
  const { resultado, usuarios, ordenarFiltrar } = usuarioContext;

  const [filtros, setFiltros] = useState({
    nombre: "",
    razon_social: "",
    telefono: "",
    ubicacion: ""
  });

  return (
    <>
      {resultado ? (
        <>
          <ExcelExport data={resultado} />
          <Tabla
            registrosPorPagina={registrosPorPagina}
            itemsOriginal={usuarios}
            itemsResultado={resultado}
            columnas={columnas}
            filtros={filtros}
            setFiltros={setFiltros}
            fnordenarFiltrar={ordenarFiltrar}
            AccionesListar={AccionesListarUsuarios}
            TemplateFila={null}
          />
        </>
      ) : null}
    </>
  );
};

export default ListarUsuarios;
