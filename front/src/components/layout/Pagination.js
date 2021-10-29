
const Pagination = ({
  paginaactual,
  guardarPaginaActual,
  totalpaginas,
  setConsultar,
}) => {
  
  const paginar = (accion) => {
    let nuevaPaginaActual = 0;

    if (accion === "anterior") {
      nuevaPaginaActual = paginaactual - 1;
    } else {
      nuevaPaginaActual = paginaactual + 1;
    }

    if (nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
    setConsultar(true);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ textAlign: "right" }}>
      Pagina {paginaactual} de {totalpaginas}{" "}
      {paginaactual === 1 ? null : (
        <button
          type="button"
          className="btn btn-info mr-1"
          onClick={() => {
            paginar("anterior");
          }}
        >
          &laquo;
        </button>
      )}
      {paginaactual === totalpaginas ? null : (
        <button
          type="button"
          className="btn btn-info mr-1"
          onClick={() => {
            paginar("siguiente");
          }}
        >
          &raquo;
        </button>
      )}
    </div>
  );
};

export default Pagination;
