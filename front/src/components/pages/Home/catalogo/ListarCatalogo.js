import React, { useState, useEffect } from "react";
import ItemCatalogo from "./ItemCatalogo";
import { useHistory, uuidv4 } from "../../../layout/Imports";
import Pagination from "./Pagination";

const ListarCatalogo = ({ catalogo, limpiar }) => {
  const history = useHistory();
  const [inicio, setInicio] = useState(true);

  //paginacion
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(0);

  useEffect(() => {
    const iniciar = () => {
      if (inicio) {
        guardarTotalPaginas(Math.ceil(catalogo.length / 20));
      }
    };

    iniciar();

    if (!inicio) {
      guardarTotalPaginas(Math.ceil(catalogo.length / 20));
    }
  }, [catalogo, paginaactual]);

  //paginacion

  const mostrar = (id) => {
   // limpiar();
    history.push("/subasta/" + id);
  };

  return (
    <>
      <Pagination
        paginaactual={paginaactual}
        guardarPaginaActual={guardarPaginaActual}
        totalpaginas={totalpaginas}
        totalregistros={catalogo.length}
      />
      <div className="p-2 row justify-content-center ">
        {catalogo.slice(
                  (paginaactual - 1) * 20,
                  paginaactual * 20
                ).map((item) => (
          <ItemCatalogo key={uuidv4()} item={item} mostrar={mostrar} />
        ))}
      </div>
      <Pagination
        paginaactual={paginaactual}
        guardarPaginaActual={guardarPaginaActual}
        totalpaginas={totalpaginas}
        totalregistros={catalogo.length}
      />
    </>
  );
};

export default ListarCatalogo;
