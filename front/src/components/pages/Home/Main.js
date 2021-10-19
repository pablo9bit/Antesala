import React, { useState, useContext, useEffect } from "react";
import { Spinner, useAlerta, SubastaContext, GoogleAnalytics } from "../../layout/Imports";

import Buscador from "./Buscador";
import { BuscadorDiv } from "../../layout/Estilos";
import ListarCatalogo from "./catalogo/ListarCatalogo";

const Main = () => {
  GoogleAnalytics();
  const subastaContext = useContext(SubastaContext);
  const { catalogo, obtenerSubastasCatalogo } = subastaContext;

  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);
  const [consultar, setConsultar] = useState(true);

  const [buscador, guardarBuscador] = useState({
    texto: "",
    idrubro: "",
  });


  useEffect(() => {
    if(consultar){
      obtenerSubastasCatalogo(buscador, setLoadingLocal, setAlerta);
      setConsultar(null);
    }
  }, [consultar]);

  return (
    <div className="justify-content-center">
      {loadingLocal ? (
        <Spinner />
      ) : (
        <div className="row">
          <BuscadorDiv>
            <br></br>
            <Buscador
              buscador={buscador}
              setConsultar={setConsultar}
              guardarBuscador={guardarBuscador}
            />
          </BuscadorDiv>
          <div className="col-sm">
              <ListarCatalogo catalogo={catalogo}  /> 
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
