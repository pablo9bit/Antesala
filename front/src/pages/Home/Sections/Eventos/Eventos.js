import React from "react";

const Eventos = () => {
  return (
    <section id="eventos" className="pb-100 pt-100">
    <div className="container">
        <div className="row">
            <div id="recipeCarousel" className="carousel slide wow bounceInUp" data-bs-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="col-md-4 mb-4 pe-3 ps-3">
                            <div className="box-eventos text-center">
                                <div className="img-evento">
                                    <span className="tag-evento">Teatro</span>
                                    <span className="tag-descuento">%20</span>
                                    <img src="/assets/img/img-teatro-01.png" width="100%" alt="" />
                                </div>
                                <p className="teatro mt-4">El Cuenco Teatro</p>
                                <h1 className="obra mt-2">Mi nombre es Eva Duarte</h1>
                                <p className="mb-0 mt-3">Desde</p>
                                <p className="precio fc-violeta mt-2">$800<span>$900</span></p>
                                <a href="#" className="btn btn-custom-amarillo mb-4">comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-4 mb-4 pe-3 ps-3">
                            <div className="box-eventos text-center">
                                <div className="img-evento">
                                    <span className="tag-evento">Teatro</span>
                                    <img src="/assets/img/img-teatro-02.png" width="100%" alt="" />
                                </div>
                                <p className="teatro mt-4">El Cuenco Teatro</p>
                                <h1 className="obra mt-2">Mi nombre es Eva Duarte</h1>
                                <p className="mb-0 mt-3">Desde</p>
                                <p className="precio mt-2">$700</p>
                                <a href="#" className="btn btn-custom-black disabled mb-4">agotado</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-4 mb-4 pe-3 ps-3">
                            <div className="box-eventos text-center">
                                <div className="img-evento">
                                    <span className="tag-evento">Teatro</span>
                                    <img src="/assets/img/img-teatro-03.png" width="100%" alt="" />
                                </div>
                                <p className="teatro mt-4">El Cuenco Teatro</p>
                                <h1 className="obra mt-2">Mi nombre es Eva Duarte</h1>
                                <p className="mb-0 mt-3">Desde</p>
                                <p className="precio mt-2">$800</p>
                                <a href="#" className="btn btn-custom-amarillo mb-4">comprar</a>
                            </div>
                        </div>
                    </div>    
                </div>
                <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        </div>
    </div>
</section>
  );
};

export default Eventos;
