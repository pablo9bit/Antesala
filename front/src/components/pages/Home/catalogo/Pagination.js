import React from "react";

const Pagination = ({
  paginaactual,
  guardarPaginaActual,
  totalpaginas,
  totalregistros,
}) => {
  const paginar = (accion) => {
    let nuevaPaginaActual = 0;

    if (accion === "anterior") {
      nuevaPaginaActual = paginaactual - 1;
    } else {
      nuevaPaginaActual = paginaactual + 1;
    }

    if (nuevaPaginaActual === 0 || totalpaginas === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      {totalregistros} Registros {totalregistros > 0 ? `- Pagina ${paginaactual} de ${totalpaginas} ` : ""}
      {totalpaginas === 0 ? null : (
        <>
          {paginaactual === 1 ? null : (
            <button
              type="button"
              className="btn btn-info btn-sm"
              onClick={() => {
                paginar("anterior");
              }}
            >
              &laquo;
            </button>
          )}{" "}
          {paginaactual === totalpaginas ? null : (
            <button
              type="button"
              className="btn btn-info btn-sm"
              onClick={() => {
                paginar("siguiente");
              }}
            >
              &raquo;
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
