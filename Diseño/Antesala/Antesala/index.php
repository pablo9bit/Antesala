<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Antesala | Inicio</title>

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
            <section id="header">
                <div class="container wow bounceInUp">
                    <div class="row">
                        <div class="col-12">
                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    <img src="assets/img/img-carousel.png">
                                    <div class="body-carusel">
                                        <h5 class="Grifter fc-gris-claro">PROGRAMACIÓN <br>2022</h5>
                                        <p class="GothamBold">Some representative placeholder content for the first slide.</p>
                                        <div class="mt-4">
                                            <a href="#" class="btn btn-custom">Ver más +</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="assets/img/img-carousel.png">
                                    <div class="body-carusel">
                                        <h5 class="Grifter fc-gris-claro">PROGRAMACIÓN <br>2022</h5>
                                        <p class="GothamBold">Some representative placeholder content for the first slide.</p>
                                        <div class="mt-4">
                                            <a href="#" class="btn btn-custom">Ver más +</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-dots">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="calendar" class="position-relative pb-100">
                <img src="assets/img/bg-02.svg" class="img" alt="">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 d-flex flex-column mb-4 align-items-center wow bounceInLeft">
                            <h1>Qué hacer?</h1>
                            <div class="calendar calendar-first" id="calendar_first">
                                <div class="calendar_header d-flex justify-content-center align-items-center mb-2">
                                    <button class="switch-month switch-left">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                                        </svg>
                                    </button>
                                    <h2 class="m-0"></h2>
                                    <button class="switch-month switch-right">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="calendar_weekdays"></div>
                                <div class="calendar_content"></div>
                            </div>
                        </div>
                        <div class="col-md-6 d-flex justify-content-center d-flex wow bounceInRight">
                            <a href="#" class="big-button today d-flex align-items-center justify-content-center">
                                <h1>hoy</h1>
                            </a>
                            <a href="#" class="big-button weekend d-flex align-items-center justify-content-center">
                                <h1>el finde</h1>
                            </a>
                            <a href="#" class="big-button month d-flex align-items-center justify-content-center">
                                <h1>este mes</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="eventos" class="pb-100 pt-100">
                <div class="container">
                    <div class="row">
                        <div id="recipeCarousel" class="carousel slide wow bounceInUp" data-bs-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <div class="col-md-4 mb-4 pe-3 ps-3">
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
                                </div>
                                <div class="carousel-item">
                                    <div class="col-md-4 mb-4 pe-3 ps-3">
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
                                </div>
                                <div class="carousel-item">
                                    <div class="col-md-4 mb-4 pe-3 ps-3">
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
                                </div>    
                            </div>
                            <a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            </a>
                            <a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="actualidad" class="pt-100 pb-100">
                <div class="container">
                    <div class="row pb-100">
                        <div class="col-md-6 box-cartelera bg-naranja text-center wow bounceInLeft">
                            <h1 class="fc-blanco mb-0">CARTELERA</h1>
                            <p class="Grifter fc-blanco mb-0">POR SALAS</p>
                        </div>
                        <div class="col-md-6 d-flex align-items-center box-cartelera bg-gris pe-4 ps-4  wow bounceInRight">
                            <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                                <option selected>Salas...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h1 class="mb-4 wow bounceInLeft">Actualidad</h1>
                        </div>
                        <div class="col-md-4 mb-4 wow bounceInUp">
                            <div class="card">
                                <img src="assets/img/img-box-01.png" width="100%">
                                <div class="card-body">
                                    <h1 class="fc-blanco">La cochera gana un premio konex</h1>
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
                                    <h1 class="fc-blanco">La cochera gana un premio konex</h1>
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
                                    <h1 class="fc-blanco">La cochera gana un premio konex</h1>
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

            <section id="publicidad" class="d-flex align-items-center mb-100 wow bounceInUp">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img src="assets/img/banner.jpg" width="100%" alt="">
                        </div>
                    </div>
                </div>
            </section>

            <section id="news" class="bg-black pb-50 pt-50">
                <div class="container">
                    <div class="row mb-100">
                        <div class="col-12 text-center mb-4">
                            <h1 class="fc-blanco wow bounceInUp">últimas notas y entrevistas</h1>
                        </div>
                        <div class="col-md-4 mb-4 wow bounceInUp">
                            <div class="card">
                                <img src="assets/img/box-ultima-nota-01.png" width="100%">
                                <div class="card-body">
                                    <h2 class="fc-blanco">La venta de cerveza en el teatro</h2>
                                    <h4 class="Grifter fc-blanco">por coco albarracin</h4>
                                </div>
                                <a href="#" class="btn btn-custom-black">leer +</a>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4 wow bounceInUp">
                            <div class="card">
                                <img src="assets/img/box-ultima-nota-02.png" width="100%">
                                <div class="card-body">
                                    <h2 class="fc-blanco">La venta de cerveza en el teatro</h2>
                                    <h4 class="Grifter fc-blanco">por coco albarracin</h4>
                                </div>
                                <a href="#" class="btn btn-custom-black">leer +</a>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4 wow bounceInUp">
                            <div class="card">
                                <img src="assets/img/box-ultima-nota-03.png" width="100%">
                                <div class="card-body">
                                    <h2 class="fc-blanco">La venta de cerveza en el teatro</h2>
                                    <h4 class="Grifter fc-blanco">por coco albarracin</h4>
                                </div>
                                <a href="#" class="btn btn-custom-black">leer +</a>
                            </div>
                        </div>
                        <div class="d-grid gap-2 wow bounceInUp">
                            <a href="#" class="btn btn-custom-amarillo">ver más +</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-12 text-center mb-4">
                                    <h2 class="fc-blanco wow bounceInUp">últimos podcast</h2>
                                </div>
                                <div class="col-md-6 wow bounceInUp mb-4">
                                    <div class="card position-relative d-flex align-items-center justify-content-center">
                                        <img src="assets/img/box-podcast-01.png" width="100%">
                                        <a class="lottie-player" data-bs-toggle="modal" data-bs-target="#spotify">
                                            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_nwo471nu.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;" loop autoplay></lottie-player>
                                        </a>
                                        <!-- Modal -->
                                        <div class="modal fade" id="spotify" tabindex="-1" aria-labelledby="spotifyLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-body">
                                                    <iframe src="https://open.spotify.com/embed/episode/3Gfh07HRSjeBTY91Bdj24P?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 wow bounceInUp mb-4">
                                    <div class="card position-relative d-flex align-items-center justify-content-center">
                                        <img src="assets/img/box-podcast-02.png" width="100%">
                                        <a class="lottie-player" data-bs-toggle="modal" data-bs-target="#spotify">
                                            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_nwo471nu.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;" loop autoplay></lottie-player>
                                        </a>
                                        <!-- Modal -->
                                        <div class="modal fade" id="spotify" tabindex="-1" aria-labelledby="spotifyLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-body">
                                                    <iframe src="https://open.spotify.com/embed/episode/3Gfh07HRSjeBTY91Bdj24P?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-grid gap-2 wow bounceInUp">
                                    <a href="#" class="btn btn-custom-amarillo">ver más +</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                                <div class="col-12 text-center mb-4 mt-4 mt-md-0">
                                    <h2 class="fc-blanco wow bounceInUp">video del mes</h2>
                                </div>
                                <div class="col-12 wow bounceInUp">
                                    <div class="card position-relative d-flex align-items-center justify-content-center">
                                        <img src="assets/img/box-video-01.png" width="110%">
                                        <a class="lottie-player" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_avzk3oss.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;"  loop autoplay></lottie-player>
                                        </a>
                                        <!-- Modal -->
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-body">
                                                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/JWRlTezTF2k?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            
            <section id="apoyo" class="wow bounceInUp">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mb-200">
                            <div class="text-center bg-gris-oscuro br-10 pt-50 pb-50 pe-4 ps-4">
                                <h1 class="fc-blanco m-0">contamos con el apoyo de</h1>
                            </div>
                        </div>
                        <div class="col-md-4 d-flex align-items-center justify-content-center">
                            <div class='wrapper'>
                                <div class='carousel'>
                                    <div class='carousel__item'>
                                        <div class='carousel__item-body'>
                                            <img src="assets/img/logo-nmg.svg" width="20%" alt="">
                                        </div>
                                    </div>
                                    <div class='carousel__item'>
                                        <div class='carousel__item-body'>
                                            <img src="assets/img/logo-cuenco.svg" width="20%" alt="">
                                        </div>
                                    </div>
                                    <div class='carousel__item'>
                                        <div class='carousel__item-body'>
                                            <img src="assets/img/logo-red-de-salas.svg" width="20%" alt="">
                                        </div>
                                    </div>
                                    <div class='carousel__item'>
                                        <div class='carousel__item-body'>
                                            <img src="assets/img/logo-ministerio-cultura.svg" width="100%" alt="">
                                        </div>
                                    </div>                            
                                    <div class='carousel__item'>
                                        <div class='carousel__item-body'>
                                            <img src="assets/img/logo-instituto-nacional-de-teatro.svg" width="100%" alt="">
                                        </div>
                                    </div>
                                    <div class='carousel__item'>
                                        <div class='carousel__item-body'>
                                            <img src="assets/img/logo-instituto-nacional-de-teatro.svg" width="100%" alt="">
                                        </div>
                                    </div>
                                    <div class='carousel__item'>
                                        <div class='carousel__item-body'>
                                            <img src="assets/img/logo-instituto-nacional-de-teatro.svg" width="100%" alt="">
                                        </div>
                                    </div>
                                    <div class='carousel__item'>
                                        <div class='carousel__item-body'>
                                            <img src="assets/img/logo-instituto-nacional-de-teatro.svg" width="100%" alt="">
                                        </div>
                                    </div>
                                    <div class='carousel__item'>
                                        <div class='carousel__item-body'>
                                            <img src="assets/img/logo-instituto-nacional-de-teatro.svg" width="100%" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <!-- <div class="ticker-wrap wow bounceInUp">
                <div class="ticker">
                    <div class="ticker__item">SALAS Y ESPACIOS - </div>
                    <div class="ticker__item">SALAS Y ESPACIOS - </div>
                    <div class="ticker__item">SALAS Y ESPACIOS - </div>
                    <div class="ticker__item">SALAS Y ESPACIOS - </div>
                    <div class="ticker__item">SALAS Y ESPACIOS - </div>
                    <div class="ticker__item">SALAS Y ESPACIOS - </div>
                    <div class="ticker__item">SALAS Y ESPACIOS - </div>
                    <div class="ticker__item">SALAS Y ESPACIOS - </div>
                    <div class="ticker__item">SALAS Y ESPACIOS - </div>
                </div>
            </div> -->

            <section id="suscriptions" class="bg-gris-oscuro pt-4 pb-4 wow bounceInUp">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6  d-flex align-items-center">
                            <form class="d-flex position-relative me-auto ms-auto mb-4 mb-md-0">
                                <input class="form-control" type="search" placeholder="tu mail..." aria-label="Search">
                                <button class="btn btn-custom" type="submit">
                                    <svg enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <g id="telegram">
                                            <g>
                                                <path d="M24.687,30.163c-0.402,0-0.843-0.132-1.32-0.395l-10.803-7.976c-0.121-0.089-0.195-0.228-0.203-0.378 c-0.007-0.15,0.053-0.295,0.165-0.396L25.322,9.503c0.205-0.185,0.521-0.169,0.706,0.037c0.185,0.205,0.168,0.521-0.037,0.706 l-12.34,11.106l10.254,7.576c0.271,0.145,0.729,0.329,1.055,0.178c0.332-0.152,0.496-0.637,0.576-1.017l4.375-20.617 c0.17-0.681,0.088-1.229-0.215-1.481c-0.231-0.192-0.575-0.206-0.947-0.038L3.033,15.871C2.244,16.188,1.996,16.514,2,16.622 c0.003,0.071,0.173,0.267,0.68,0.422l6.375,1.99l6.999-4.416c0.234-0.146,0.542-0.077,0.689,0.156 c0.147,0.233,0.078,0.542-0.156,0.689l-7.194,4.539C9.269,20.08,9.116,20.1,8.977,20.057l-6.592-2.058 c-1.17-0.358-1.37-0.99-1.384-1.335c-0.02-0.473,0.253-1.157,1.667-1.723l25.695-9.908c0.697-0.318,1.445-0.25,1.974,0.191 c0.613,0.511,0.813,1.413,0.549,2.474l-4.371,20.598c-0.184,0.878-0.566,1.457-1.137,1.719 C25.163,30.114,24.933,30.163,24.687,30.163z" fill="#fff"/>
                                            </g>
                                                <path d="M24.687,30.163c-0.402,0-0.843-0.132-1.32-0.395l-6.72-4.959c-0.222-0.164-0.27-0.478-0.105-0.699 c0.164-0.222,0.478-0.27,0.699-0.105l6.664,4.923c0.271,0.145,0.729,0.329,1.055,0.178c0.332-0.152,0.496-0.637,0.576-1.017 l4.375-20.617c0.17-0.681,0.088-1.229-0.215-1.481c-0.231-0.192-0.575-0.206-0.947-0.038L3.033,15.871 C2.244,16.188,1.996,16.514,2,16.622c0.003,0.071,0.173,0.267,0.68,0.422l6.594,2.058c0.158,0.049,0.281,0.174,0.33,0.332 l2.267,7.461c0.061,0.167,0.108,0.333,0.149,0.477c0.032,0.114,0.072,0.256,0.099,0.298c-0.004-0.005,0.076,0.019,0.289,0.02 c0.447,0,0.617-0.167,0.957-0.498l1.66-1.614c0.198-0.194,0.514-0.188,0.707,0.01c0.192,0.198,0.188,0.515-0.01,0.707L14.09,27.88 c-0.402,0.393-0.828,0.809-1.682,0.809c-0.98,0-1.178-0.434-1.351-1.046c-0.035-0.124-0.075-0.267-0.135-0.432l-2.198-7.233 l-6.339-1.979c-1.17-0.358-1.37-0.99-1.384-1.335c-0.02-0.473,0.253-1.157,1.667-1.723l25.695-9.908 c0.697-0.318,1.445-0.25,1.974,0.191c0.613,0.511,0.813,1.413,0.549,2.474l-4.371,20.598c-0.184,0.878-0.566,1.457-1.137,1.719 C25.163,30.114,24.933,30.163,24.687,30.163z" fill="#fff"/>
                                            <g> 
                                                <path d="M18.5,14c0,0.275-0.225,0.5-0.5,0.5l0,0c-0.275,0-0.5-0.225-0.5-0.5l0,0c0-0.275,0.225-0.5,0.5-0.5 l0,0C18.275,13.5,18.5,13.725,18.5,14L18.5,14z" fill="#fff"/> 
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <div class="col-md-4 d-flex flex-column align-self-center text-center text-md-start mb-4 mb-md-0">
                            <h1 class="GothamBold fc-blanco fs-32 m-0">SUSCRIBITE</h1>
                            <p class="fc-blanco m-0">para recibí novedades y promociones</p>
                        </div>
                        <div class="col-md-2 d-flex align-items-center justify-content-center justify-content-md-end">
                            <a href="#" target="blank" class="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="65.939" height="65.939" viewBox="0 0 65.939 65.939">
                                    <path id="Trazado_140" data-name="Trazado 140" d="M2121.933,9130.725a32.97,32.97,0,1,0,32.97,32.971A32.97,32.97,0,0,0,2121.933,9130.725Zm5.759,33.975h-6.3v20.423h-7.421V9164.7H2108.5v-7.565h5.464v-5.883c0-3.51,1.718-8.984,9.249-8.984l5.519.029v7.342h-4.815c-.806,0-2.532.388-2.532,2.057v5.439h7.454Z" transform="translate(-2088.964 -9130.725)" fill="#fff"/>
                                </svg>
                            </a>
                            <a href="#" target="blank" class="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="65.989" height="65.988" viewBox="0 0 65.989 65.988">
                                    <g id="Ilustración_34" data-name="Ilustración 34" transform="translate(-2173.478 -9130.734)">
                                        <g id="Grupo_222" data-name="Grupo 222">
                                            <g id="Grupo_221" data-name="Grupo 221">
                                                <path id="Trazado_236" data-name="Trazado 236" d="M2222.108,9159.433c-.046-1.63-.087-3.268-.279-4.886a6.679,6.679,0,0,0-5.548-6.044,22.737,22.737,0,0,0-4.674-.362q-5.1-.06-10.21-.01a47.236,47.236,0,0,0-4.987.277,6.679,6.679,0,0,0-6.038,5.557,23.167,23.167,0,0,0-.362,4.774q-.044,5.747.025,11.5a28.021,28.021,0,0,0,.309,3.967,6.631,6.631,0,0,0,5.4,5.647,23.04,23.04,0,0,0,4.808.376q6.067.035,12.136-.048a21.335,21.335,0,0,0,3.723-.358,6.354,6.354,0,0,0,4.731-3.609,8.851,8.851,0,0,0,.835-3.595c.091-2.8.142-5.609.209-8.413h-.066c0-1.589.035-3.179-.01-4.768m-16.1,14.83a10.079,10.079,0,1,1,10.121-10.037,10.065,10.065,0,0,1-10.121,10.037m10.45-18.2a2.356,2.356,0,1,1,2.421-2.325,2.331,2.331,0,0,1-2.421,2.325" fill="#fff"/>
                                                <path id="Trazado_237" data-name="Trazado 237" d="M2206.473,9130.734a32.994,32.994,0,1,0,32.994,32.994,32.994,32.994,0,0,0-32.994-32.994m19.076,41.677a12.625,12.625,0,0,1-1.448,5.813,10.149,10.149,0,0,1-7.14,5.134,24.516,24.516,0,0,1-4.6.4c-2.2.045-4.394.07-6.591.057q-3.954-.025-7.907-.137a12.65,12.65,0,0,1-5.818-1.433,10.084,10.084,0,0,1-5.1-6.892,24.221,24.221,0,0,1-.463-5c-.042-1.96-.076-3.921-.054-5.881.035-3.1.061-6.2.2-9.289a10.976,10.976,0,0,1,2.222-6.344,10.02,10.02,0,0,1,6.666-3.876,43.617,43.617,0,0,1,4.912-.36c1.959-.066,3.921-.066,5.881-.051,2.659.021,5.318.056,7.975.139a12.4,12.4,0,0,1,6.167,1.646,10.17,10.17,0,0,1,4.779,6.94,27.358,27.358,0,0,1,.413,5.246c.028,1.892.006,3.785.006,5.679h.073c-.054,2.737-.085,5.474-.17,8.21" fill="#fff"/>
                                                <path id="Trazado_238" data-name="Trazado 238" d="M2206.136,9157.656a6.528,6.528,0,1,0,6.444,6.551,6.533,6.533,0,0,0-6.444-6.551" fill="#fff"/>
                                            </g>
                                        </g>
                                    </g>
                                </svg>                              
                            </a>
                            <a href="#" target="blank" class="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="67.02" height="67.021" viewBox="0 0 67.02 67.021">
                                    <g id="Grupo_120" data-name="Grupo 120" transform="translate(-2252.97 -9130.184)">
                                        <path id="Trazado_138" data-name="Trazado 138" d="M2282.484,9169.972l10.9-6.277-10.9-6.278Zm0,0" fill="#fff"/>
                                        <path id="Trazado_139" data-name="Trazado 139" d="M2286.48,9130.184a33.51,33.51,0,1,0,33.51,33.511,33.515,33.515,0,0,0-33.51-33.511Zm20.939,33.545s0,6.8-.862,10.073a5.248,5.248,0,0,1-3.691,3.69c-3.277.863-16.386.863-16.386.863s-13.074,0-16.385-.9a5.247,5.247,0,0,1-3.691-3.691c-.863-3.241-.863-10.072-.863-10.072s0-6.795.863-10.072a5.352,5.352,0,0,1,3.691-3.726c3.277-.862,16.385-.862,16.385-.862s13.109,0,16.386.9a5.247,5.247,0,0,1,3.691,3.691c.9,3.277.862,10.106.862,10.106Zm0,0" fill="#fff"/>
                                    </g>
                                </svg>                              
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <?php include 'includes/footer.php';?>

        <!-- js -->
        <script src="assets/jquery/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/owlcarousel/js/owl.carousel.min.js"></script>
        <script src="assets/wow-master/js/wow.min.js"></script>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <script src="assets/js/custom.js"></script>
    </body>
</html>