import React from "react";

const Header = () => {
  return (
    <section id="header">
      <div className="container wow bounceInUp">
        <div className="row">
          <div className="col-12">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <img src="/assets/img/img-carousel.png" />
                <div className="body-carusel">
                  <h5 className="Grifter fc-gris-claro">
                    PROGRAMACIÓN <br />
                    2022
                  </h5>
                  <p className="GothamBold">
                    Some representative placeholder content for the first slide.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-custom">
                      Ver más +
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="/assets/img/img-carousel.png" />
                <div className="body-carusel">
                  <h5 className="Grifter fc-gris-claro">
                    PROGRAMACIÓN <br />
                    2022
                  </h5>
                  <p className="GothamBold">
                    Some representative placeholder content for the first slide.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-custom">
                      Ver más +
                    </a>
                  </div>
                </div>
              </div>
              <div className="owl-dots"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
