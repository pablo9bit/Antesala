<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Antesala | Entradas</title>

        <!-- css -->
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/owlcarousel/css/owl.carousel.min.css">
        <link rel="stylesheet" href="assets/owlcarousel/css/owl.theme.default.min.css">
        <link rel="stylesheet" href="assets/wow-master/css/animate.css">
        <link rel="stylesheet" href="assets/css/style.css">

    </head>
    <body>

        <?php include 'includes/navbar.php';?> 

        <main>
            <section id="eventos" class="pb-100">
                <div class="container">
                    <div class="row">
                        <!-- filtros -->
                        <div class="col-md-3">
                            <h4 class="GothamBold wow bounceInUp">Filtrar</h4>
                            <hr class="wow bounceInUp">
                            <div class="d-flex align-items-center mb-4">
                                <p class="GothamBold mb-0 me-4 wow bounceInUp">Mes</p>
                                <select class="form-select form-select wow bounceInUp">
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
                            <div class="calendar calendar-first wow bounceInUp mb-4" id="calendar_first">
                                <div class="calendar_weekdays"></div>
                                <div class="calendar_content"></div>
                            </div>
                            <div class="d-flex mb-4">
                                <p class="GothamBold mb-0 me-4 mt-2 wow bounceInUp">Días</p>
                                <div class="me-1 text-center">
                                    <input type="text" class="form-control wow bounceInUp">
                                    <div class="form-text wow bounceInUp">desde</div>
                                </div>
                                <div class="ms-1 text-center">
                                    <input type="text" class="form-control wow bounceInUp">
                                    <div class="form-text wow bounceInUp">hasta</div>
                                </div>
                            </div>
                            <hr class="wow bounceInUp">
                            <div class="mb-4">
                                <p class="GothamBold mb-0 mb-2 wow bounceInUp">Ubicación</p>
                                <select class="form-select form-select wow bounceInUp">
                                    <option selected>Córdoba</option>
                                    <option value="1">Rosario</option>
                                    <option value="2">Buenos Aires</option>
                                    <option value="3">Santa Fé</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <p class="GothamBold mb-0 mb-2 wow bounceInUp">Sala</p>
                                <select class="form-select form-select wow bounceInUp">
                                    <option selected>Uno</option>
                                    <option value="1">Dos</option>
                                    <option value="2">Tres</option>
                                    <option value="3">Cuatro</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <p class="GothamBold mb-0 mb-2 wow bounceInUp">Público</p>
                                <div class="form-check mb-2 wow bounceInUp">
                                    <label class="form-check-label">
                                        Adulto
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                                <div class="form-check mb-2 wow bounceInUp">
                                    <label class="form-check-label">
                                        ATP
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                                <div class="form-check mb-2 wow bounceInUp">
                                    <label class="form-check-label">
                                        Infancias
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                            </div>
                            <div class="mb-4">
                                <p class="GothamBold mb-0 mb-2 wow bounceInUp">Tipo de Espectáculo</p>
                                <div class="form-check mb-2 wow bounceInUp">
                                    <label class="form-check-label">
                                        Teatro
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                                <div class="form-check mb-2 wow bounceInUp">
                                    <label class="form-check-label">
                                        Música
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                                <div class="form-check mb-2 wow bounceInUp">
                                    <label class="form-check-label">
                                        Circo
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                                <div class="form-check mb-2 wow bounceInUp">
                                    <label class="form-check-label">
                                        Danza
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                                <div class="form-check mb-2 wow bounceInUp">
                                    <label class="form-check-label">
                                        Stand Up
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                                <div class="form-check mb-2 wow bounceInUp">
                                    <label class="form-check-label">
                                        Impro
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                                <div class="form-check mb-2 wow bounceInUp">
                                    <label class="form-check-label">
                                        Títeres
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                                <div class="form-check mb-2 wow bounceInUp">
                                    <label class="form-check-label">
                                        Otro
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                            </div>
                            <div class="mb-4">
                                <p class="GothamBold mb-0 mb-2 wow bounceInUp">Modo de Espectáculo</p>
                                <div class="form-check mb-2 wow bounceInUp">
                                    <label class="form-check-label">
                                        Presencil
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                                <div class="form-check mb-2 wow bounceInUp">
                                    <label class="form-check-label">
                                        Online
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                            </div>
                            
                        </div>
                        <!-- === -->

                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-12 d-flex justify-content-end">
                                    <div class="dropdown wow bounceInUp">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                           Ordenar Por
                                        </a>

                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">uno</a></li>
                                            <li><a class="dropdown-item" href="#">dos</a></li>
                                            <li><a class="dropdown-item" href="#">tres</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown wow bounceInUp">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                           Mostrar
                                        </a>

                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">uno</a></li>
                                            <li><a class="dropdown-item" href="#">dos</a></li>
                                            <li><a class="dropdown-item" href="#">tres</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <hr class="wow bounceInUp">
                                </div>
                                <div class="col-md-6 wow bounceInUp mb-4 pe-3 ps-3">
                                    <div class="box-eventos text-center">
                                        <div class="img-evento">
                                            <span class="tag-evento">Teatro</span>
                                            <span class="tag-descuento">%20</span>
                                            <img src="assets/img/img-teatro-01.png" width="100%" alt="">
                                        </div>
                                        <p class="teatro mt-4">El Cuenco Teatro</p>
                                        <h1 class="obra mt-2">Mi nombre es Eva Duarte</h1>
                                        <p class="mb-0 mt-3">Desde</p>
                                        <p class="precio fc-violeta mt-2">$800<span>$900</span></p>
                                        <a href="#" class="btn btn-custom-amarillo mb-4">comprar</a>
                                    </div>
                                </div>
                                <div class="col-md-6 wow bounceInUp mb-4 pe-3 ps-3">
                                    <div class="box-eventos text-center">
                                        <div class="img-evento">
                                            <span class="tag-evento">Teatro</span>
                                            <img src="assets/img/img-teatro-02.png" width="100%" alt="">
                                        </div>
                                        <p class="teatro mt-4">El Cuenco Teatro</p>
                                        <h1 class="obra mt-2">Mi nombre es Eva Duarte</h1>
                                        <p class="mb-0 mt-3">Desde</p>
                                        <p class="precio mt-2">$700</p>
                                        <a href="#" class="btn btn-custom-black disabled mb-4">agotado</a>
                                    </div>
                                </div>
                                <div class="col-md-6 wow bounceInUp mb-4 pe-3 ps-3">
                                    <div class="box-eventos text-center">
                                        <div class="img-evento">
                                            <span class="tag-evento">Teatro</span>
                                            <img src="assets/img/img-teatro-03.png" width="100%" alt="">
                                        </div>
                                        <p class="teatro mt-4">El Cuenco Teatro</p>
                                        <h1 class="obra mt-2">Mi nombre es Eva Duarte</h1>
                                        <p class="mb-0 mt-3">Desde</p>
                                        <p class="precio mt-2">$800</p>
                                        <a href="#" class="btn btn-custom-amarillo mb-4">comprar</a>
                                    </div>
                                </div>
                                <div class="col-md-6 wow bounceInUp mb-4 pe-3 ps-3">
                                    <div class="box-eventos text-center">
                                        <div class="img-evento">
                                            <span class="tag-evento">Teatro</span>
                                            <img src="assets/img/img-teatro-03.png" width="100%" alt="">
                                        </div>
                                        <p class="teatro mt-4">El Cuenco Teatro</p>
                                        <h1 class="obra mt-2">Mi nombre es Eva Duarte</h1>
                                        <p class="mb-0 mt-3">Desde</p>
                                        <p class="precio mt-2">$800</p>
                                        <a href="#" class="btn btn-custom-amarillo mb-4">comprar</a>
                                    </div>
                                </div>
                                <div class="d-grid gap-2 wow bounceInUp">
                                    <a href="#" class="btn btn-custom-amarillo">ver más +</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="actualidad" class="pt-100 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="mb-4 wow bounceInLeft">Actualidad</h1>
                        </div>
                        <div class="col-md-4 mb-4 wow bounceInUp">
                            <div class="card">
                                <img src="assets/img/img-box-01.png" width="100%">
                                <div class="card-body">
                                    <h1 class="Grifter fc-blanco">La cochera gana un premio konex</h1>
                                </div>
                                <div class="card-overlay">
                                    <div class="card-overlay-inner">
                                        <p class="GothamLight fc-blanco m-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore  et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4 wow bounceInUp">
                            <div class="card">
                                <img src="assets/img/img-box-01.png" width="100%">
                                <div class="card-body">
                                    <h1 class="Grifter fc-blanco">La cochera gana un premio konex</h1>
                                </div>
                                <div class="card-overlay">
                                    <div class="card-overlay-inner">
                                        <p class="GothamLight fc-blanco m-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore  et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4 wow bounceInUp">
                            <div class="card">
                                <img src="assets/img/img-box-01.png" width="100%">
                                <div class="card-body">
                                    <h1 class="Grifter fc-blanco">La cochera gana un premio konex</h1>
                                </div>
                                <div class="card-overlay">
                                    <div class="card-overlay-inner">
                                        <p class="GothamLight fc-blanco m-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore  et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 text-center pb-100 pt-100 wow bounceInUp">
                            <h1>¿Querés saber más? <br>Toda la info en un solo lugar</h1>
                        </div>
                        <div class="col-md-2 d-flex justify-content-center wow bounceInUp d-none d-md-block">
                            <a href="#" class="circulo-enlace bg-black d-flex align-items-center justify-content-center">
                                <h4 class="Grifter fc-blanco text-center m-0">podcast</h4>
                            </a>
                        </div>
                        <div class="col-md-2 d-flex justify-content-center wow bounceInUp d-none d-md-block">
                            <a href="#" class="circulo-enlace bg-naranja d-flex align-items-center justify-content-center">
                                <h4 class="Grifter fc-blanco text-center m-0">videos</h4>
                            </a>
                        </div>
                        <div class="col-md-2 d-flex justify-content-center wow bounceInUp d-none d-md-block">
                            <a href="#" class="circulo-enlace bg-black d-flex align-items-center justify-content-center">
                                <h4 class="Grifter fc-blanco text-center m-0">entrevistas y notas</h4>
                            </a>
                        </div>
                        <div class="col-md-2 d-flex justify-content-center wow bounceInUp d-none d-md-block">
                            <a href="#" class="circulo-enlace bg-naranja d-flex align-items-center justify-content-center">
                                <h4 class="Grifter fc-blanco text-center m-0">cartelera</h4>
                            </a>
                        </div>
                        <div class="col-md-2 d-flex justify-content-center wow bounceInUp d-none d-md-block">
                            <a href="#" class="circulo-enlace bg-black d-flex align-items-center justify-content-center">
                                <h4 class="Grifter fc-blanco text-center m-0">salas</h4>
                            </a>
                        </div>
                        <div class="col-md-2 d-flex justify-content-center wow bounceInUp d-none d-md-block">
                            <a href="#" class="circulo-enlace bg-naranja d-flex align-items-center justify-content-center">
                                <h4 class="Grifter fc-blanco text-center m-0">cursos</h4>
                            </a>
                        </div>
                        <div class="col-12 d-flex justify-content-center mb-4 wow bounceInUp d-block d-md-none">
                            <a href="#" class="rectangulo-enlace bg-black d-flex align-items-center justify-content-center">
                                <h4 class="Grifter fc-blanco text-center m-0">podcast</h4>
                            </a>
                        </div>
                        <div class="col-12 d-flex justify-content-center mb-4 wow bounceInUp d-block d-md-none">
                            <a href="#" class="rectangulo-enlace bg-naranja d-flex align-items-center justify-content-center">
                                <h4 class="Grifter fc-blanco text-center m-0">videos</h4>
                            </a>
                        </div>
                        <div class="col-12 d-flex justify-content-center mb-4 wow bounceInUp d-block d-md-none">
                            <a href="#" class="rectangulo-enlace bg-black d-flex align-items-center justify-content-center">
                                <h4 class="Grifter fc-blanco text-center m-0">entrevistas y notas</h4>
                            </a>
                        </div>
                        <div class="col-12 d-flex justify-content-center mb-4 wow bounceInUp d-block d-md-none">
                            <a href="#" class="rectangulo-enlace bg-naranja d-flex align-items-center justify-content-center">
                                <h4 class="Grifter fc-blanco text-center m-0">cartelera</h4>
                            </a>
                        </div>
                        <div class="col-12 d-flex justify-content-center mb-4 wow bounceInUp d-block d-md-none">
                            <a href="#" class="rectangulo-enlace bg-black d-flex align-items-center justify-content-center">
                                <h4 class="Grifter fc-blanco text-center m-0">salas</h4>
                            </a>
                        </div>
                        <div class="col-12 d-flex justify-content-center mb-4 wow bounceInUp d-block d-md-none">
                            <a href="#" class="rectangulo-enlace bg-naranja d-flex align-items-center justify-content-center">
                                <h4 class="Grifter fc-blanco text-center m-0">cursos</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
        <?php include 'includes/footer.php';?>

        <!-- js -->
        <script src="assets/jquery/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/owlcarousel/js/owl.carousel.min.js"></script>
        <script src="assets/wow-master/js/wow.min.js"></script>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <script src="assets/js/custom.js"></script>
    </body>
</html>