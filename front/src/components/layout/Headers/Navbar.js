import { useContext } from "react";
import { FirebaseContext, Link, useHistory } from "../Imports";
import HeaderAdmin from "../Headers/HeaderAdmin";
import HeaderExpectador from "./HeaderExpectador";
import HeaderOrganizacion from "./HeaderOrganizacion";

const Navbar = () => {
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
    <nav className="custom-navbar">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img src="/assets/img/antesala-logo.svg" width="200px" alt="" />
            </Link>
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-between">
            <form className="d-flex position-relative me-auto ms-auto">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
              />
              <button className="btn btn-custom" type="submit">
                Filtrar
              </button>
            </form>
            <ul className="navbar-nav flex-row justify-content-center mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/comprar">
                  Comprar Entradas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/somos">
                  Somos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/cartelera">
                  Cartelera
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Contenidos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Teatros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Cursos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 d-flex justify-content-end align-items-end">
            <div className="d-flex align-items-center">
              <img src="/assets/img/icon-user.svg" width="22px" />

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
                <Link
                  aria-label="Ingresar"
                  to="/ingresar"
                  className="nav-item nav-link"
                >
                  MI CUENTA
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
