
const TablaBuscador = ({ param, onChangeFiltros, quitarFiltro, filtros }) => {
  return (
    <>
      <div className="input-group" >
        <input
          type="text"
          name={param}
          className="form-control form-control-sm"
          id={param}
          placeholder=""
          onChange={onChangeFiltros}
          value={filtros[param]}
          style={{ borderRadius: "15px" }}
        />

      {/*   <div className="input-group-append">
          <button
            className="btn btn-outline-secondary btn-sm"
            type="button"
            onClick={() => {
              quitarFiltro(param);
            }}
          >
            X
          </button> 
        </div>*/}
      </div>
    </>
  );
};

export default TablaBuscador;
