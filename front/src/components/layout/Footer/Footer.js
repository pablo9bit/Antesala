import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Footer.css";
import AuthContext from "../../context/autenticacion/authContext";

const Footer = () => {
  const history = useHistory();

  const authContext = useContext(AuthContext);
  const { usuario, cerrarSesion } = authContext;

  return (
    <section id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="titulo">Accesos Rápidos</div>
            <ul className="list-unstyled quick-links">
              <li>
                <Link aria-label="Home" to="/">
                  <i className="fa fa-angle-double-right"></i>Home
                </Link>
              </li>
              <li>
                <Link aria-label="Quienes Somos" to="/quienes">
                  <i className="fa fa-angle-double-right"></i>Quienes Somos
                </Link>
              </li>
              <li>
                <Link aria-label="Tutoriales" to="/tutoriales">
                  <i className="fa fa-angle-double-right"></i>Tutoriales
                </Link>
              </li>
              <li>
                <Link aria-label="Como Empezar" to="/como">
                  <i className="fa fa-angle-double-right"></i>Como Empezar
                </Link>
              </li>
              <li>
                <Link aria-label="Contactanos" to="/contacto">
                  <i className="fa fa-angle-double-right"></i>Contactanos
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="titulo">Mi Perfil</div>
            {!usuario ? (
              <ul className="list-unstyled quick-links">
                <li>
                  <Link aria-label="Ingresar" to="/login">
                    <i className="fa fa-angle-double-right"></i>Ingresar
                  </Link>
                </li>
                <li>
                  <Link aria-label="Obtener Cuenta" to="/crearcuenta">
                    <i className="fa fa-angle-double-right"></i>Obtener Cuenta
                  </Link>
                </li>
                <li>
                  <Link aria-label="Olvide Contraseña" to="/olvide">
                    <i className="fa fa-angle-double-right"></i>Olvide mi
                    Contraseña
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="list-unstyled quick-links">
                <li>
                  <Link aria-label="Mi Perfil" to="/dashboard">
                    <i className="fa fa-angle-double-right"></i>Mi Perfil
                  </Link>
                </li>
                <li>
                  <Link aria-label="Mis Bienes" to="/bienes">
                    <i className="fa fa-angle-double-right"></i>Mis Bienes
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="Home"
                    to=""
                    onClick={() => {
                      cerrarSesion();
                      history.push("/");
                    }}
                  >
                    <i className="fa fa-angle-double-right"></i>Cerrar Sesión
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="titulo">Consideraciones Legales</div>
            <ul className="list-unstyled quick-links">
              <li>
                <Link aria-label="Terminos" to="/terminos">
                  <i className="fa fa-angle-double-right"></i>Terminos
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*         <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a
                  aria-label="Facebook"
                  href="https://www.fiverr.com/share/qb8D02"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  aria-label="Twitter"
                  href="https://www.fiverr.com/share/qb8D02"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  aria-label="Instagram"
                  href="https://www.fiverr.com/share/qb8D02"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  aria-label="Email"
                  href="https://www.fiverr.com/share/qb8D02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </div>
 */}
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u>
                <a
                  aria-label="9bit"
                  href="https://9bit.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Desarrollado por: 9 Bit
                </a>
              </u>
            </p>
            <p className="h6">
           {/*    © All right Reversed.
              <a
                aria-label="remate54"
                className="text-green ml-2"
                href="https://www.remate54.com"
              >
                Remate54
              </a> */}
            </p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Footer;
