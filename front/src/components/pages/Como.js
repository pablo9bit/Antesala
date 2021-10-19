import React from "react";
import { Link, GoogleAnalytics } from "../layout/Imports";
import { ImagenResponsive } from "../layout/Estilos";


const Como = () => {
  GoogleAnalytics();

  return (
    <>
      <br></br>

      <h2 className="text-center">Como Empezar</h2>
      <br></br>
      <div className="row">
        <div className="col-sm">
          <div className="row">
            <div className="col-2">
              <img
                src="./assets/images/logochico192.png"
                width="98px"
                alt="remate54"
              />
            </div>

            <div className="col-sm">
              <strong>Remate 54</strong> te brinda pasos muy sencillos y
              directos para que puedas participar decididamente en la subasta
              electrónica. Como primera medida debes realizar el recorrido usual
              por la página para conocer todos sus aspectos.<br></br>
            </div>
          </div>
          <br></br>
          Averigua{" "}
          <strong>
            <Link aria-label="quienes somos" to={"/quienes"}>
              quienes somos
            </Link>
          </strong>
          , cuál es nuestra finalidad, qué es lo que determina la ley nacional
          de subastas y por analogía, aplicable de igual modo a los remates
          organizados en web. <br></br>
          <br></br>
          Lee atentamente el{" "}
          <strong>
            <Link aria-label="tutoriales" to={"/tutoriales"}>
              tutorial
            </Link>
          </strong>{" "}
          propuesto, ya que en el mismo tendrás a disposición la información del
          “paso a paso” de este sistema de subasta en línea.
          <br></br>
          <br></br>
          Verás nuestro espacio{" "}
          <strong>
            <Link aria-label="eventos" to={"/eventos"}>
              eventos
            </Link>
          </strong>{" "}
          donde tú puedes acceder a la información de eventos pasados y eventos
          en curso, es decir la “Bitácora.Remate54” de referencias en gestiones
          de subasta y tras tiendas.
          <br></br>
          <br></br>
          Puedes{" "}
          <strong>
            <Link aria-label="contactarnos" to={"/contacto"}>
              contactarnos
            </Link>
          </strong>{" "}
          en cualquier momento para mayor información, pues estamos a tu
          disposición.
          <br></br>
          <br></br>
          <br></br>
          Verifica las condiciones generales de la subasta, y es por ello que te
          sugerimos leer las{" "}
          <strong>
            <Link aria-label="terminaciones" to={"/Terminos"}>
              Consideraciones legales y Términos
            </Link>
          </strong>{" "}
          , a los fines de conocerlas previamente, ya que si decides “loguearte”
          para realizar ofertas bajo sobre u ofrecer pujas ascendentes, deberás
          aceptar las consideraciones legales y respetar las condiciones que
          constituyen derechos y obligaciones para el usuario, el propietario
          del bien a subastar y del profesional martillero, quienes activan el
          programa de subastas en <strong>Remate 54</strong>.<br></br>
          <br></br>
          Una vez que ingresas, obtienes una cuenta que te identifica como
          usuario, ya que es fundamental conformar dicho perfil para poder
          participar como oferente y adquirir bienes en la plataforma de
          subastas on line de <strong>Remate 54</strong>.<br></br>
          <br></br>
          ¡Bienvenido y todos los éxitos!
          <br></br>
          <br></br>
          <center>
          <ImagenResponsive
              src="./assets/images/flayerCumpleLey.png"
              width="500px"
              alt="remate54"
            />
            <br></br>
            <br></br>
          </center>
        </div>
      </div>
    </>
  );
};

export default Como;
