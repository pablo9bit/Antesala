import { useContext } from "react";
import { FirebaseContext, Link, useHistory } from "../Imports";

const Footer = () => {
  const history = useHistory();

  const authContext = useContext(FirebaseContext);
  const { usuario, cerrarSesion } = authContext;

  return (
    <footer className="bg-black pt-100">
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-flex align-self-center">
            <img src="assets/img/antesala-logo-white.svg" width="80%" alt="" />
          </div>
          <div className="col-md-3">
            <h1 className="GothamLight fc-blanco">Enlaces</h1>
            <ul className="mb-0 p-0">
              <li className="pb-2">
                <a href="#" className="GothamLight fc-blanco">
                  Quienes Somos
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="GothamLight fc-blanco">
                  Cómo Comprar?
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="GothamLight fc-blanco">
                  Medios de Pago
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="GothamLight fc-blanco">
                  Publicá tu evento
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="GothamLight fc-blanco">
                  Pautá con nosotrxs
                </a>
              </li>
              <li>
                <a href="#" className="GothamLight fc-blanco">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h1 className="GothamLight fc-blanco">Mi Cuenta</h1>
            <ul className="p-0">
              <li className="pb-2">
                <a href="#" className="GothamLight fc-blanco">
                  Mis Entradas
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="GothamLight fc-blanco">
                  Recuperar Cuenta
                </a>
              </li>
            </ul>
            <h1 className="GothamLight fc-blanco">Salas y Productores</h1>
            <ul className="mb-0 p-0">
              <li className="pb-2">
                <a href="#" className="GothamLight fc-blanco">
                  Iniciar Sesión
                </a>
              </li>
              <li>
                <a href="#" className="GothamLight fc-blanco">
                  Registrate
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="mb-0 p-0">
              <li className="pb-2">
                <a href="#" className="GothamLight fc-blanco">
                  TERMINOS Y CONDICIONES
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="GothamLight fc-blanco">
                  POLÍTICAS DE PRIVACIDAD
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="GothamLight fc-blanco">
                  PREGUNTAS FRECUENTES
                </a>
              </li>
              <li>
                <a href="#" className="GothamLight fc-blanco">
                  INFO@ANTESALA.COM.AR
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white mt-100 p-4">
        <p className="Grifter m-0">© Copyright - 2022 | Antesala.</p>
      </div>
    </footer>
  );
};

export default Footer;
