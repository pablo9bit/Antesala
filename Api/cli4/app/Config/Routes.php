<?php namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (file_exists(SYSTEMPATH . 'Config/Routes.php'))
{
	require SYSTEMPATH . 'Config/Routes.php';
}

/**
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
//$routes->setDefaultController('Home');
//$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
$routes->setAutoRoute(true);

/**
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
//$routes->get('/', 'Home::index');

// auth
$routes->post('/auth/', 				'Auth::auth');
$routes->get('/auth/', 					'Auth::getinfo');
$routes->get('/auth/activar/',			'Auth::activarCuenta');
$routes->post('/auth/enviaractivar/',	'Auth::enviarActivarCuenta');
//$routes->post('/auth/recuperar/', 	'Auth::enviarRecuperarPassword');
//$routes->post('/auth/cambiar/', 		'Auth::cambiarRecuperarPassword');



//Users
$routes->post('/users/', 				'User::add');
$routes->get('/users/', 				'User::getAll');
$routes->put('/users/', 				'User::update');
//$routes->put('/users/recuperar', 		'User::updateRecuperarPass');

//Products
$routes->post('/products/', 			'Products::add');
$routes->put('/products/', 				'Products::update');
$routes->delete('/products/',			'Products::remove');
$routes->get('/products/', 				'Products::getAllUser');
$routes->get('/products/all/', 			'Products::getAll');
$routes->get('/product/', 				'Products::get');

//Subastas
$routes->post('/subastas/add', 			'Subastas::add');
$routes->get('/Subastas/CronJob', 		'Subastas::CronJobStartEndSubastas');
$routes->post('/subastas/cancelar', 	'Subastas::cancelar');
$routes->get('/Subastas/stats', 		'Subastas::getStatsSubasta');
$routes->get('/Subastas/subastar', 		'Subastas::getSubastar');
$routes->get('/Subastas/subastarmasivo','Subastas::getSubastarMasivo');

$routes->get('/social/(:any)', 			'Subastas::index/$1');

//subastas oferentes
$routes->post('/subastasoferentes/solicitar', 	'SubastasOferentes::solicitar');
$routes->get('/subastasoferentes/formartillero','SubastasOferentes::getAllForMartillero');
$routes->put('/subastasoferentes/', 			'SubastasOferentes::update');
$routes->put('/subastasoferentes/masivo', 		'SubastasOferentes::updateMasivo');

//subastas ofertas
$routes->post('/subastasofertas/ofertar', 		'SubastasOfertas::add');

//Imagenes
$routes->post('/imagenes/', 			'Imagenes::subir');
$routes->get('/imagenes/', 				'Imagenes::getAll');
$routes->delete('/imagenes/', 			'Imagenes::borrar');

//Eventos
$routes->get('/eventos/', 		'Eventos::getAll');
$routes->post('/eventos/', 		'Eventos::add');
$routes->put('/eventos/', 		'Eventos::update');
$routes->delete('/eventos/', 	'Eventos::remove');



//pages
$routes->post('/actions/email', 		'Actions::enviarEmail');


/**
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (file_exists(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php'))
{
	require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
