import { useEffect } from "react";
import { BotonTituloTabla } from "../FormsElements";
import TablaBuscador from "./TablaBuscador";

const TablaHeader = ({
  campoOrden,
  tipoOrden,
  setcampoOrden,
  setTipoOrden,
  columnas,
  filtros,
  setFiltros,
  ordenarFiltrar,
  guardarPaginaActual,
}) => {
  
  const SetOrdenar = (campo) => {
    if (campo === campoOrden) {
      if (tipoOrden === "asc") {
        setTipoOrden("desc");
      } else {
        setTipoOrden("asc");
      }
    }

    if (campo !== campoOrden) {
      setTipoOrden("asc");
    }

    setcampoOrden(campo);
  };

  const onChangeFiltros = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    });
  };

  const quitarFiltro = (campo) => {
    setFiltros({
      ...filtros,
      [campo]: "",
    });
  };

  useEffect(() => {
    ordenarFiltrar(filtros, campoOrden, tipoOrden);
    guardarPaginaActual(1);
  }, [filtros, campoOrden, tipoOrden]);

  return (
    <thead className="TituloTabla">
      <tr >
        <th  className="text-center" style={{ fontSize: "16px" }}>
          Acciones
        </th>
        {columnas.map((columna) => (
          <th scope="col" key={columna.nombre}>
            <BotonTituloTabla
              label={columna.label}
              funcion={SetOrdenar}
              param={columna.nombre}
              campoOrden={campoOrden}
              tipoOrden={tipoOrden}
            />
          </th>
        ))}
      </tr>

      <tr>
        <th className="text-center">Filtrar por:</th>
        {columnas.map((columna) => (
          <th
            className="text-center"
            key={columna.nombre}
          >
            <TablaBuscador
              param={columna.nombre}
              onChangeFiltros={onChangeFiltros}
              ordenarFiltrar={ordenarFiltrar}
              quitarFiltro={quitarFiltro}
              filtros={filtros}
              value={columna.value}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TablaHeader;
