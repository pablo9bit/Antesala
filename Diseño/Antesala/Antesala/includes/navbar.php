<nav class="navbar navbar-expand-lg custom-navbar fixed-top d-block d-md-none">
    <div class="container">
        <a class="navbar-brand" href="index.php"><img src="assets/img/antesala-logo.svg" width="100px" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="entradas.php">Entradas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="somos.php">Somos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Cartelera</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Contenidos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Teatros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Cursos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Contacto</a>
                </li>
            </ul>
            <hr>
            <select class="form-select form-select">
                <option selected>Córdoba</option>
                <option value="1">Rosario</option>
                <option value="2">Buenos Aires</option>
                <option value="3">Santa Fé</option>
            </select>            
        </div>
        
        <div class="input-group flex-nowrap mt-4">
            <input type="text" class="form-control" placeholder="Buscar..." aria-label="" aria-describedby="addon-wrapping">
            <span class="input-group-text" id="addon-wrapping"><img src="assets/img/search.png" width="20px" alt=""></span>
        </div>
    </div>
</nav>

<nav class="custom-navbar d-none d-md-block fixed-top">
    <div class="container">
        <div class="row">
            <div class="col-md-2">
                <a href="index.php"><img src="assets/img/antesala-logo.svg" width="200px" alt=""></a>
            </div>
            <div class="col-md-8 d-flex flex-column justify-content-between">
                <form class="d-flex position-relative me-auto ms-auto">
                    <input class="form-control" type="search" placeholder="Buscar..." aria-label="Search">
                    <button class="btn btn-custom" type="submit">Filtrar</button>
                </form>
                <ul class="navbar-nav flex-row justify-content-center mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="entradas.php">Entradas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="somos.php">Somos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Cartelera</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Contenidos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Teatros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Cursos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-2 d-flex flex-column justify-content-between align-items-end">
                <select class="form-select form-select">
                    <option selected>Córdoba</option>
                    <option value="1">Rosario</option>
                    <option value="2">Buenos Aires</option>
                    <option value="3">Santa Fé</option>
                </select>
                <div class="d-flex align-items-center">
                    <img src="assets/img/icon-user.svg" width="22px"><a href="#" class="nav-link">MI CUENTA</a>
                </div>
            </div>
        </div>
    </div>
</nav>