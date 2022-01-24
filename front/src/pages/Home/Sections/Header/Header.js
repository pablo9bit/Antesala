import React from "react";

const Header = () => {
  return (
    <section id="header">
      <div className="container wow bounceInUp">
        <div className="row">
          <div className="col-12">
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img
                    src="assets/img/img-carousel.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="Grifter fc-gris-claro">
                      PROGRAMACIÓN <br />
                      2022
                    </h5>
                    <p className="GothamBold">
                      Some representative placeholder content for the first
                      slide.
                    </p>
                    <div className="text-center mt-4">
                      <a href="#" className="btn btn-custom">
                        Ver más +
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                  <img
                    src="assets/img/img-carousel.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="Grifter fc-gris-claro">
                      PROGRAMACIÓN <br />
                      2022
                    </h5>
                    <p className="GothamBold">
                      Some representative placeholder content for the first
                      slide.
                    </p>
                    <div className="text-center mt-4">
                      <a href="#" className="btn btn-custom">
                        Ver más +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
