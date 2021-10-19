import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/autenticacion/authContext";

const Header = () => {
  const history = useHistory();

  const authContext = useContext(AuthContext);
  const { usuario, cerrarSesion } = authContext;

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link aria-label="Home" className="navbar-brand" to="/">
          <img
            src="https://remate54.com/assets/images/Remate54200.png"
            alt="Logo"
            width="150px"
            height="66px"
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          onClick={() => {
            document.getElementById("navbarCollapse").classList.toggle("show");
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav">
            <Link
              aria-label="Quienes Somos"
              to="/quienes"
              className="nav-item nav-link"
            >
              Quienes Somos
            </Link>
            <Link
              aria-label="Tutoriales"
              to="/tutoriales"
              className="nav-item nav-link"
            >
              Tutoriales
            </Link>
            <Link aria-label="Como Empezar" to="/como" className="nav-item nav-link">
              Como Empezar
            </Link>
           {/*  <Link aria-label="Eventos" to="/events" className="nav-item nav-link">
              Eventos
            </Link> */}
            <Link aria-label="Contactanos" to="/contacto" className="nav-item nav-link">
              Contactanos
            </Link>
            <Link aria-label="Registrarse" to="/crearcuenta" className="nav-item nav-link">
              Registrarse
            </Link>
          </div>
          <div className="navbar-nav">
            {usuario ? (
              <>
                <Link aria-label="Mi Perfil" to="/admin" className="nav-item nav-link">
                  Mi Perfil
                </Link>
                <Link
                aria-label="Cerrar Sesion" 
                  to=""
                  onClick={() => {
                    cerrarSesion();
                    history.push("/");
                  }}
                  className="nav-item nav-link"
                >
                  Cerrar Sesion
                </Link>
              </>
            ) : (
              <Link aria-label="Ingresar" to="/login" className="nav-item nav-link">
                Ingresar
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
