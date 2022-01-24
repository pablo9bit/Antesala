import React from 'react';

const Navbar = () => {
    return (
        <nav className="custom-navbar">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <a href="#">
              <img src="assets/img/antesala-logo.svg" width="200px" alt="" />
            </a>
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
                <a className="nav-link" aria-current="page" href="#">
                  Comprar Entradas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Somos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Cartelera
                </a>
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
              <img src="assets/img/icon-user.svg" width="22px" />
              <a href="#" className="nav-link">
                MI CUENTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;