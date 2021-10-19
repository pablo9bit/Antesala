import React from "react";
import "lazysizes";
import {GoogleAnalytics} from "../layout/Imports";

const Eventos = () => {
  GoogleAnalytics();
  return (
    <div className="justify-content-center row">
      <div className="col-sm">
        <img
          data-src="https://remate54.com/assets/images/metalarte/logo-anclaje-vertical.png"
          width="250px"
          alt="camara"
          className="lazyload"
        />
        <img
          data-src="https://remate54.com/assets/images/metalarte/LogoMetalArte.png"
          width="150px"
          alt="metal arte"
          className="lazyload"
        />
      </div>
      <div className="col-sm">
          <br></br><br></br>
        <h4>
          1° Encuentro Virtual de Artistas Metalúrgicos de Córdoba <br></br>
          Curadora del encuentro: Verónica MOLAS
        </h4>
        <br></br>
        <h4>Desde el 14 al 28 diciembre del 2020</h4>
        <br></br>
      </div>
    </div>
  );
};

export default Eventos;
