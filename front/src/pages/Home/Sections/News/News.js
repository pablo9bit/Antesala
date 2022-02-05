import React from "react";

const News = () => {
  return (
    <section id="news" className="bg-black pb-50 pt-50">
      <div className="container">
        <div className="row mb-100">
          <div className="col-12 text-center mb-4">
            <h1 className="fc-blanco wow bounceInUp">
              últimas notas y entrevistas
            </h1>
          </div>
          <div className="col-md-4 mb-4 wow bounceInUp">
            <div className="card">
              <img src="assets/img/box-ultima-nota-01.png" width="100%" />
              <div className="card-body">
                <h2 className="fc-blanco">La venta de cerveza en el teatro</h2>
                <h4 className="Grifter fc-blanco">por coco albarracin</h4>
              </div>
              <a href="#" className="btn btn-custom-black">
                leer +
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4 wow bounceInUp">
            <div className="card">
              <img src="assets/img/box-ultima-nota-02.png" width="100%" />
              <div className="card-body">
                <h2 className="fc-blanco">La venta de cerveza en el teatro</h2>
                <h4 className="Grifter fc-blanco">por coco albarracin</h4>
              </div>
              <a href="#" className="btn btn-custom-black">
                leer +
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4 wow bounceInUp">
            <div className="card">
              <img src="/assets/img/box-ultima-nota-03.png" width="100%" />
              <div className="card-body">
                <h2 className="fc-blanco">La venta de cerveza en el teatro</h2>
                <h4 className="Grifter fc-blanco">por coco albarracin</h4>
              </div>
              <a href="#" className="btn btn-custom-black">
                leer +
              </a>
            </div>
          </div>
          <div className="d-grid gap-2 wow bounceInUp">
            <a href="#" className="btn btn-custom-amarillo">
              ver más +
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-12 text-center mb-4">
                <h2 className="fc-blanco wow bounceInUp">últimos podcast</h2>
              </div>
              <div className="col-md-6 wow bounceInUp mb-4">
                <div className="card position-relative d-flex align-items-center justify-content-center">
                  <img src="assets/img/box-podcast-01.png" width="100%" />
                  <a
                    className="lottie-player"
                    data-bs-toggle="modal"
                    data-bs-target="#spotify"
                  >
                    {/* <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_nwo471nu.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;" loop autoplay></lottie-player> */}
                  </a>
                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="spotify"
                    tabindex="-1"
                    aria-labelledby="spotifyLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <iframe
                            src="https://open.spotify.com/embed/episode/3Gfh07HRSjeBTY91Bdj24P?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow bounceInUp mb-4">
                <div className="card position-relative d-flex align-items-center justify-content-center">
                  <img src="assets/img/box-podcast-02.png" width="100%" />
                  <a
                    className="lottie-player"
                    data-bs-toggle="modal"
                    data-bs-target="#spotify"
                  >
                    {/* <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_nwo471nu.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;" loop autoplay></lottie-player> */}
                  </a>
                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="spotify"
                    tabindex="-1"
                    aria-labelledby="spotifyLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <iframe
                            src="https://open.spotify.com/embed/episode/3Gfh07HRSjeBTY91Bdj24P?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 wow bounceInUp">
                <a href="#" className="btn btn-custom-amarillo">
                  ver más +
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-12 text-center mb-4 mt-4 mt-md-0">
                <h2 className="fc-blanco wow bounceInUp">video del mes</h2>
              </div>
              <div className="col-12 wow bounceInUp">
                <div className="card position-relative d-flex align-items-center justify-content-center">
                  <img src="assets/img/box-video-01.png" width="110%" />
                  <a
                    className="lottie-player"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    {/* <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_avzk3oss.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;"  loop autoplay></lottie-player> */}
                  </a>
                  {/* <!-- Modal --> */}
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
