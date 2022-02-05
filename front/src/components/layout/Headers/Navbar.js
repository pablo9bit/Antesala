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

  /*
   */

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top d-block d-md-none">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/assets/img/antesala-logo.svg" width="100px" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/comprar">
                  Entradas
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
                <Link className="nav-link" aria-current="page" to="/contenidos">
                  Contenidos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/teatros">
                  Teatros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/cursos">
                  Cursos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
            <hr />
            <select className="form-select form-select">
              <option selected>Córdoba</option>
              <option value="1">Rosario</option>
              <option value="2">Buenos Aires</option>
              <option value="3">Santa Fé</option>
            </select>
          </div>

          <div className="input-group flex-nowrap mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar..."
              aria-label=""
              aria-describedby="addon-wrapping"
            />
            <span className="input-group-text" id="addon-wrapping">
              <img src="/assets/img/search.png" width="20px" alt="" />
            </span>
          </div>
        </div>
      </nav>

      <nav className="custom-navbar d-none d-md-block fixed-top">
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
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/comprar"
                  >
                    Entradas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/somos">
                    Somos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/cartelera"
                  >
                    Cartelera
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/contenidos"
                  >
                    Contenidos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/teatros">
                    Teatros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/cursos">
                    Cursos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/contacto">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 d-flex flex-column justify-content-between align-items-end">
              <select className="form-select form-select">
                <option selected>Córdoba</option>
                <option value="1">Rosario</option>
                <option value="2">Buenos Aires</option>
                <option value="3">Santa Fé</option>
              </select>
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
                    className="nav-link"
                  >
                    MI CUENTA
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
