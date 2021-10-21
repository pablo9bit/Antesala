import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Pagination, TablaHeader, Fila } from "./";
import "./estilos.css";

const Tabla = ({
  registrosPorPagina,
  itemsOriginal,
  itemsResultado,
  columnas,
  filtros,
  setFiltros,
  fnordenarFiltrar,
  TemplateFila,
  AccionesListar,
}) => {
  const [inicio, setInicio] = useState(true);

  // ordenar
  const [tipoOrden, setTipoOrden] = useState(null);
  const [campoOrden, setcampoOrden] = useState(null);
  //ordenar

  //paginacion
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(0);
  //paginacion

  useEffect(() => {
    const iniciar = () => {
      if (inicio) {
        guardarTotalPaginas(
          Math.ceil(itemsOriginal.length / registrosPorPagina)
        );
        if (itemsResultado.length === 0) {
          fnordenarFiltrar(null, null, null);
        } else {
          setInicio(false);
        }
      }
    };

    iniciar();

    if (!inicio) {
      guardarTotalPaginas(
        Math.ceil(itemsResultado.length / registrosPorPagina)
      );
    }
  }, [itemsOriginal, paginaactual, itemsResultado]);

  const mystyle = {
    backgroundColor: "white",
    borderColor: "#828282",
  };

  return (
    <div className="row">
      <Pagination
        paginaactual={paginaactual}
        guardarPaginaActual={guardarPaginaActual}
        totalpaginas={totalpaginas}
        totalregistros={itemsResultado.length}
      />
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-sm" style={mystyle}>
          <TablaHeader
            campoOrden={campoOrden}
            tipoOrden={tipoOrden}
            setcampoOrden={setcampoOrden}
            setTipoOrden={setTipoOrden}
            columnas={columnas}
            ordenarFiltrar={fnordenarFiltrar}
            filtros={filtros}
            setFiltros={setFiltros}
            guardarPaginaActual={guardarPaginaActual}
          />
          {TemplateFila ? (
            <tbody>
              {itemsResultado
                .slice(
                  (paginaactual - 1) * registrosPorPagina,
                  paginaactual * registrosPorPagina
                )
                .map((item) => (
                  <TemplateFila
                    item={item}
                    columnas={columnas}
                    AccionesListar={AccionesListar}
                    key={uuidv4()}
                  />
                ))}
            </tbody>
          ) : (
            <tbody>
              {itemsResultado
                .slice(
                  (paginaactual - 1) * registrosPorPagina,
                  paginaactual * registrosPorPagina
                )
                .map((item) => (
                  <Fila
                    item={item}
                    columnas={columnas}
                    AccionesListar={AccionesListar}
                    key={uuidv4()}
                  />
                ))}
            </tbody>
          )}
        </table>
      </div>
      
      <Pagination
        paginaactual={paginaactual}
        guardarPaginaActual={guardarPaginaActual}
        totalpaginas={totalpaginas}
        totalregistros={itemsResultado.length}
      />
    </div>
  );
};

export default Tabla;
