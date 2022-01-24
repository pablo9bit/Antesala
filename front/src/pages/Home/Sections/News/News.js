import React from "react";

const News = () => {
  return (
    <section id="news" className="bg-black pb-50 pt-50">
      <div className="container">
        <div className="row mb-100">
          <div className="col-12 text-center mb-4">
            <h1 className="Grifter fc-blanco fs-42 wow bounceInUp">
              últimas notas y entrevistas
            </h1>
          </div>
          <div className="col-md-4 mb-4 wow bounceInUp">
            <div className="card">
              <img src="assets/img/box-ultima-nota-01.png" width="100%" />
              <div className="card-body">
                <h1 className="Grifter fc-blanco">
                  La venta de cerveza en el teatro
                </h1>
                <h2 className="Grifter fc-blanco">por coco albarracin</h2>
              </div>
              <a href="#" className="btn btn-custom-black">
                leer
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4 wow bounceInUp">
            <div className="card">
              <img src="assets/img/box-ultima-nota-02.png" width="100%" />
              <div className="card-body">
                <h1 className="Grifter fc-blanco">
                  La venta de cerveza en el teatro
                </h1>
                <h2 className="Grifter fc-blanco">por coco albarracin</h2>
              </div>
              <a href="#" className="btn btn-custom-black">
                leer
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4 wow bounceInUp">
            <div className="card">
              <img src="assets/img/box-ultima-nota-03.png" width="100%" />
              <div className="card-body">
                <h1 className="Grifter fc-blanco">
                  La venta de cerveza en el teatro
                </h1>
                <h2 className="Grifter fc-blanco">por coco albarracin</h2>
              </div>
              <a href="#" className="btn btn-custom-black">
                leer
              </a>
            </div>
          </div>
          <div className="mt-4 d-grid gap-2 wow bounceInUp">
            <a href="#" className="btn btn-custom-amarillo">
              ver todo
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-12 text-center mb-4">
                <h1 className="Grifter fc-blanco fs-42 wow bounceInUp">
                  últimos podcast
                </h1>
              </div>
              <div className="col-md-6 wow bounceInUp">
                <div className="card position-relative d-flex align-items-center justify-content-center">
                  <img src="assets/img/box-podcast-01.png" width="100%" />
                  <a href="#" className="lottie-player">
                    {/* <lottie-player
                      src="https://assets9.lottiefiles.com/packages/lf20_nwo471nu.json"
                      background="transparent"
                      speed="1"
                      style="width: 200px; height: 200px;"
                      loop
                      autoplay
                    ></lottie-player> */}
                  </a>
                </div>
              </div>
              <div className="col-md-6 wow bounceInUp">
                <div className="card position-relative d-flex align-items-center justify-content-center">
                  <img src="assets/img/box-podcast-02.png" width="100%" />
                  <a href="#" className="lottie-player">
                   {/*  <lottie-player
                      src="https://assets9.lottiefiles.com/packages/lf20_nwo471nu.json"
                      background="transparent"
                      speed="1"
                      style="width: 200px; height: 200px;"
                      loop
                      autoplay
                    ></lottie-player> */}
                  </a>
                </div>
              </div>
              <div className="mt-4 d-grid gap-2 wow bounceInUp">
                <a href="#" className="btn btn-custom-amarillo">
                  ver todo
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12 text-center mb-4">
                <h1 className="Grifter fc-blanco fs-42 wow bounceInUp">
                  video del mes
                </h1>
              </div>
              <div className="col-12 wow bounceInUp">
                <div className="card position-relative d-flex align-items-center justify-content-center">
                  <img src="assets/img/box-video-01.png" width="110%" />
                  <a
                    className="lottie-player"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                   {/*  <lottie-player
                      src="https://assets7.lottiefiles.com/private_files/lf30_avzk3oss.json"
                      background="transparent"
                      speed="1"
                      style="width: 200px; height: 200px;"
                      loop
                      autoplay
                    ></lottie-player> */}
                  </a>
                  {/*                                     <!-- Modal -->
                   */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <iframe
                            width="100%"
                            height="500px"
                            src="https://www.youtube.com/embed/JWRlTezTF2k?controls=0"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
