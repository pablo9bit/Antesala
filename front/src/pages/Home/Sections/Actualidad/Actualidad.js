const Actualidad = () => {
  return (
    <section id="actualidad" >
      <div className="container">
        <div className="row pb-100">
          <div className="col-md-6 box-cartelera bg-naranja text-center wow bounceInLeft">
            <h1 className="Grifter fc-blanco mb-0">CARTELERA</h1>
            <p className="Grifter fc-blanco mb-0">POR SALAS</p>
          </div>
          <div className="col-md-6 d-flex align-items-center box-cartelera bg-gris pe-4 ps-4  wow bounceInRight">
            <select
              className="form-select form-select-lg"
              aria-label=".form-select-lg example"
            >
              <option selected>Salas...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="Grifter fs-52 mb-4 wow bounceInLeft">Actualidad</h1>
          </div>
          <div className="col-md-4 mb-4 wow bounceInUp">
            <div className="card">
              <img src="assets/img/img-box-01.png" width="100%" />
              <div className="card-body">
                <h1 className="Grifter fc-blanco">
                  La cochera gana un premio konex
                </h1>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-inner">
                  <p className="GothamLight fc-blanco m-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore et
                    accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 wow bounceInUp">
            <div className="card">
              <img src="assets/img/img-box-01.png" width="100%" />
              <div className="card-body">
                <h1 className="Grifter fc-blanco">
                  La cochera gana un premio konex
                </h1>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-inner">
                  <p className="GothamLight fc-blanco m-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore et
                    accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 wow bounceInUp">
            <div className="card">
              <img src="assets/img/img-box-01.png" width="100%" />
              <div className="card-body">
                <h1 className="Grifter fc-blanco">
                  La cochera gana un premio konex
                </h1>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-inner">
                  <p className="GothamLight fc-blanco m-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore et
                    accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center pb-100 pt-100 wow bounceInUp">
            <h1 className="Grifter fs-52">
              ¿Querés saber más? <br />
              Toda la info en un solo lugar
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actualidad;
