import { useContext } from "react";
import { FirebaseContext, Link, useHistory } from "../Imports";
import HeaderAdmin from "../Headers/HeaderAdmin";
import HeaderExpectador from "./HeaderExpectador";
import HeaderOrganizacion from "./HeaderOrganizacion";

const Header = () => {
  const history = useHistory();

  const authContext = useContext(FirebaseContext);
  const { usuario, usuarioLocal, cerrarSesion } = authContext;

  const menuSegunTipoUsuario = () => {
    if (usuarioLocal) {
      switch (usuarioLocal.tipousuario) {
        case "9":
          return <HeaderAdmin />;
        case "2":
          return <HeaderExpectador />;
        case "1":
          return <HeaderOrganizacion />;
        default:
          break;
      }
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link aria-label="Home" className="navbar-brand" to="/">
          {/*  <img
            src="https://remate54.com/assets/images/Remate54200.png"
            alt="Logo"
            width="150px"
            height="66px"
          /> */}
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
              aria-label="Contactanos"
              to="/contacto"
              className="nav-item nav-link"
            >
              Contactanos
            </Link>
         
          </div>
          <div className="navbar-nav">
            {usuario ? (
              <>
                {menuSegunTipoUsuario()}

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
              <>
                <Link
                  aria-label="Registrarse"
                  to="/crearcuenta"
                  className="nav-item nav-link"
                >
                  Obtener Cuenta
                </Link>
                <Link
                  aria-label="Ingresar"
                  to="/ingresar"
                  className="nav-item nav-link"
                >
                  Ingresar
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
