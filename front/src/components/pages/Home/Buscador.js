import React, { useContext, useEffect } from "react";
import { Boton } from "../../layout/Estilos";
import {SubastaContext} from "../../layout/Imports";

const Buscador = ({ setConsultar, buscador, guardarBuscador }) => {
  const subastaContext = useContext(SubastaContext);
  const { rubros, getDataCombos } = subastaContext;
  
  const { texto, idrubro } = buscador;

  useEffect(() => {
    getDataCombos();
  }, []);

  const onChange = (e) => {
    guardarBuscador({
      ...buscador,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setConsultar(true);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group text-center">
          <label htmlFor="texto">Aplicar Filtros</label>
          <input
            type="text"
            name="texto"
            className="form-control"
            id="texto"
            aria-describedby="texto"
            placeholder="Ingrese palabras clave"
            onChange={onChange}
            value={texto}
          />
        </div>
      
        <div className="form-group">
          <label htmlFor="idrubro">Rubro</label>
          <select
            className="custom-select"
            id="idrubro"
            name="idrubro"
            onChange={onChange}
            value={idrubro}
          >
            <option>Seleccione...</option>
            {rubros
              ? rubros.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label} 
                  </option>
                ))
              : null}
          </select>
        </div>
      
        <Boton className="btn-block">
          buscar
        </Boton>
      </form>
    </div>
  );
};

export default Buscador;
