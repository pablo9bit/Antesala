import React from "react";
import { Cursiva, DivBorder, ImagenResponsive } from "../layout/Estilos";
import {GoogleAnalytics} from "../layout/Imports";

const About = () => {
  GoogleAnalytics();

  return (
    <>
      <br></br>

      <h2 className="text-center">Quienes Somos</h2>
      <br></br>
      <div className="row">
        <div className="col-sm">
          <center>
            <img
              src="./assets/images/Remate54200.png"
              width="200px"
              alt="remate54"
            />
            <br></br>
            <br></br>
          </center>
          <ul>
            <li>
              <strong>Remate 54</strong> es un <Cursiva>work team</Cursiva>{" "}
              pro-activo argentino que estimula y dinamiza la facultad milenaria
              de subastar mediante el presente espacio en web.
            </li>
            <li>
              <strong>Remate 54</strong> es una herramienta{" "}
              <Cursiva>inclusive work</Cursiva> que tiende a brindar un espacio
              abierto y participativo a los martilleros conforme reglamenta la
              Ley Nacional.
            </li>
            <li>
              <strong>Remate 54</strong> cumple con las disposiciones legales
              establecidas en la Ley Nacional 20.266/73 art. 23.{" "}
              <Cursiva>Qualified professional</Cursiva>
            </li>
          </ul>
          <DivBorder className="text-center">
            <br></br>
            Identificación de <strong>Remate 54</strong>: El desarrollo y la
            gestión de subastas se realiza bajo el vocablo{" "}
            <strong>“Remate”</strong> conforme art. 8 inc. A{")"}. LN 20.266/73.
            Más la expresión numérica: <strong>“54”</strong> – Código que
            identifica a Argentina.
            <br></br> <br></br>
          </DivBorder>
          <div className="text-right">
            <br></br>
            Auction management: <Cursiva>Marcela Agustina Ibáñez</Cursiva>
            <br></br>
            MP 05-924/90 {"("}Ley 7191/84{")"} – Móvil 351-3727899<br></br>
            <a
              aria-label="Marcela Agustina Ibáñez "
              href="https://www.facebook.com/marcelaagustina.ibanez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Perfil en Facebook
            </a>
            <br></br>
            <br></br>
            <br></br>
            <center>
            <ImagenResponsive
              src="./assets/images/flayer.png"
              width="300px"
              alt="remate54"
            />
            <br></br>
            <br></br>
          </center>

          </div>
    
        </div>
      </div>
    </>
  );
};

export default About;
