import React from 'react';

const Eventos = () => {
    return (
        <section id="eventos" className="pb-100">
        <div className="container">
            <div className="row">
{/*                 <!-- filtros --> */}  
              <div className="col-md-3">
                    <h4 className="GothamBold wow bounceInUp">Filtrar</h4>
                    <hr className="wow bounceInUp" />
                    <div className="d-flex align-items-center mb-4">
                        <p className="GothamBold mb-0 me-4 wow bounceInUp">Mes</p>
                        <select className="form-select form-select wow bounceInUp">
                            <option selected>Enero 2022</option>
                            <option value="1">Febrero 2022</option>
                            <option value="2">Marzo 2022</option>
                            <option value="3">Abril 2022</option>
                            <option value="4">Mayo 2022</option>
                            <option value="5">Junio 2022</option>
                            <option value="6">Julio 2022</option>
                            <option value="7">Agosto 2022</option>
                            <option value="8">Septiembre 2022</option>
                            <option value="9">Octubre 2022</option>
                            <option value="10">Noviembre 2022</option>
                            <option value="11">Diciembre 2022</option>
                        </select>
                    </div>
                    <div className="calendar calendar-first wow bounceInUp mb-4" id="calendar_first">
                        <div className="calendar_weekdays"></div>
                        <div className="calendar_content"></div>
                    </div>
                    <div className="d-flex mb-4">
                        <p className="GothamBold mb-0 me-4 mt-2 wow bounceInUp">Días</p>
                        <div className="me-1 text-center">
                            <input type="text" className="form-control wow bounceInUp" />
                            <div className="form-text wow bounceInUp">desde</div>
                        </div>
                        <div className="ms-1 text-center">
                            <input type="text" className="form-control wow bounceInUp" />
                            <div className="form-text wow bounceInUp">hasta</div>
                        </div>
                    </div>
                    <hr className="wow bounceInUp"/>
                    <div className="mb-4">
                        <p className="GothamBold mb-0 mb-2 wow bounceInUp">Ubicación</p>
                        <select className="form-select form-select wow bounceInUp">
                            <option selected>Córdoba</option>
                            <option value="1">Rosario</option>
                            <option value="2">Buenos Aires</option>
                            <option value="3">Santa Fé</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <p className="GothamBold mb-0 mb-2 wow bounceInUp">Sala</p>
                        <select className="form-select form-select wow bounceInUp">
                            <option selected>Uno</option>
                            <option value="1">Dos</option>
                            <option value="2">Tres</option>
                            <option value="3">Cuatro</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <p className="GothamBold mb-0 mb-2 wow bounceInUp">Público</p>
                        <div className="form-check mb-2 wow bounceInUp">
                            <label className="form-check-label">
                                Adulto
                            </label>
                            <input className="form-check-input" type="checkbox" value="" />
                        </div>
                        <div className="form-check mb-2 wow bounceInUp">
                            <label className="form-check-label">
                                ATP
                            </label>
                            <input className="form-check-input" type="checkbox" value="" />
                        </div>
                        <div className="form-check mb-2 wow bounceInUp">
                            <label className="form-check-label">
                                Infancias
                            </label>
                            <input className="form-check-input" type="checkbox" value="" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="GothamBold mb-0 mb-2 wow bounceInUp">Tipo de Espectáculo</p>
                        <div className="form-check mb-2 wow bounceInUp">
                            <label className="form-check-label">
                                Teatro
                            </label>
                            <input className="form-check-input" type="checkbox" value="" />
                        </div>
                        <div className="form-check mb-2 wow bounceInUp">
                            <label className="form-check-label">
                                Música
                            </label>
                            <input className="form-check-input" type="checkbox" value="" />
                        </div>
                        <div className="form-check mb-2 wow bounceInUp">
                            <label className="form-check-label">
                                Circo
                            </label>
                            <input className="form-check-input" type="checkbox" value="" />
                        </div>
                        <div className="form-check mb-2 wow bounceInUp">
                            <label className="form-check-label">
                                Danza
                            </label>
                            <input className="form-check-input" type="checkbox" value="" />
                        </div>
                        <div className="form-check mb-2 wow bounceInUp">
                            <label className="form-check-label">
                                Stand Up
                            </label>
                            <input className="form-check-input" type="checkbox" value="" />
                        </div>
                        <div className="form-check mb-2 wow bounceInUp">
                            <label className="form-check-label">
                                Impro
                            </label>
                            <input className="form-check-input" type="checkbox" value="" />
                        </div>
                        <div className="form-check mb-2 wow bounceInUp">
                            <label className="form-check-label">
                                Títeres
                            </label>
                            <input className="form-check-input" type="checkbox" value="" />
                        </div>
                        <div className="form-check mb-2 wow bounceInUp">
                            <label className="form-check-label">
                                Otro
                            </label>
                            <input className="form-check-input" type="checkbox" value="" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="GothamBold mb-0 mb-2 wow bounceInUp">Modo de Espectáculo</p>
                        <div className="form-check mb-2 wow bounceInUp">
                            <label className="form-check-label">
                                Presencil
                            </label>
                            <input className="form-check-input" type="checkbox" value="" />
                        </div>
                        <div className="form-check mb-2 wow bounceInUp">
                            <label className="form-check-label">
                                Online
                            </label>
                            <input className="form-check-input" type="checkbox" value="" />
                        </div>
                    </div>
                    
                </div>
                {/* <!-- === --> */}

                <div className="col-md-9">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <div className="dropdown wow bounceInUp">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                   Ordenar Por
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">uno</a></li>
                                    <li><a className="dropdown-item" href="#">dos</a></li>
                                    <li><a className="dropdown-item" href="#">tres</a></li>
                                </ul>
                            </div>
                            <div className="dropdown wow bounceInUp">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                   Mostrar
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">uno</a></li>
                                    <li><a className="dropdown-item" href="#">dos</a></li>
                                    <li><a className="dropdown-item" href="#">tres</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <hr className="wow bounceInUp" />
                        </div>
                        <div className="col-md-6 wow bounceInUp mb-4 pe-3 ps-3">
                            <div className="box-eventos text-center">
                                <div className="img-evento">
                                    <span className="tag-evento">Teatro</span>
                                    <span className="tag-descuento">%20</span>
                                    <img src="assets/img/img-teatro-01.png" width="100%" alt="" />
                                </div>
                                <p className="teatro mt-4">El Cuenco Teatro</p>
                                <h1 className="obra mt-2">Mi nombre es Eva Duarte</h1>
                                <p className="mb-0 mt-3">Desde</p>
                                <p className="precio fc-violeta mt-2">$800<span>$900</span></p>
                                <a href="#" className="btn btn-custom-amarillo mb-4">comprar</a>
                            </div>
                        </div>
                        <div className="col-md-6 wow bounceInUp mb-4 pe-3 ps-3">
                            <div className="box-eventos text-center">
                                <div className="img-evento">
                                    <span className="tag-evento">Teatro</span>
                                    <img src="assets/img/img-teatro-02.png" width="100%" alt="" />
                                </div>
                                <p className="teatro mt-4">El Cuenco Teatro</p>
                                <h1 className="obra mt-2">Mi nombre es Eva Duarte</h1>
                                <p className="mb-0 mt-3">Desde</p>
                                <p className="precio mt-2">$700</p>
                                <a href="#" className="btn btn-custom-black disabled mb-4">agotado</a>
                            </div>
                        </div>
                        <div className="col-md-6 wow bounceInUp mb-4 pe-3 ps-3">
                            <div className="box-eventos text-center">
                                <div className="img-evento">
                                    <span className="tag-evento">Teatro</span>
                                    <img src="assets/img/img-teatro-03.png" width="100%" alt="" />
                                </div>
                                <p className="teatro mt-4">El Cuenco Teatro</p>
                                <h1 className="obra mt-2">Mi nombre es Eva Duarte</h1>
                                <p className="mb-0 mt-3">Desde</p>
                                <p className="precio mt-2">$800</p>
                                <a href="#" className="btn btn-custom-amarillo mb-4">comprar</a>
                            </div>
                        </div>
                        <div className="col-md-6 wow bounceInUp mb-4 pe-3 ps-3">
                            <div className="box-eventos text-center">
                                <div className="img-evento">
                                    <span className="tag-evento">Teatro</span>
                                    <img src="assets/img/img-teatro-03.png" width="100%" alt="" />
                                </div>
                                <p className="teatro mt-4">El Cuenco Teatro</p>
                                <h1 className="obra mt-2">Mi nombre es Eva Duarte</h1>
                                <p className="mb-0 mt-3">Desde</p>
                                <p className="precio mt-2">$800</p>
                                <a href="#" className="btn btn-custom-amarillo mb-4">comprar</a>
                            </div>
                        </div>
                        <div className="d-grid gap-2 wow bounceInUp">
                            <a href="#" className="btn btn-custom-amarillo">ver más +</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Eventos;