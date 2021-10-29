<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use Config\Services;
use Firebase\JWT\JWT;
use CodeIgniter\I18n\Time;

class BaseController extends \CodeIgniter\Controller
{

	protected $helpers = [];

	use ResponseTrait;

	/**
	 * Constructor.
	 */
	public function initController(\CodeIgniter\HTTP\RequestInterface $request, \CodeIgniter\HTTP\ResponseInterface $response, \Psr\Log\LoggerInterface $logger)
	{

		// Do Not Edit This Line
		parent::initController($request, $response, $logger);

		//--------------------------------------------------------------------
		// Preload any models, libraries, etc, here.
		//--------------------------------------------------------------------
		// E.g.:
		// $this->session = \Config\Services::session();
	}
	

	public function _verificarMetodo($metodo)
	{
		$request = service('request');

		if ($request->getMethod() !== $metodo) {
			return false;
		}else{
			return true;
		}
	}

	public function _verificarToken()
	{
		$request = service('request');
		$key = Services::getSecretKey();
		$auth = $request->getHeader('Authorization');

		if (!empty($auth)) {
			
			try {
				$token = explode(' ', $auth)[2];
				$decoded = get_object_vars( JWT::decode($token, $key, array('HS256')) );
				
			} catch (\Firebase\JWT\ExpiredException $e) {
				
				$decoded = null;
				
			} catch (\Exception $e) {
				
				$decoded = null;
			}
		} else {
			$decoded = null;
		}

		return $decoded ;
	}

	public function _generarToken($user)
	{
		// Generar Token
		$key = Services::getSecretKey();

		$payload = array(
			"iss" => "http://9bit.com.org",
			"aud" => "http://9bit.com.ar",
			"iat" => time(),
			"nbf" => 1357000000,
			"exp" => time() + (60 * 60 * 24), // 1 dia
			"id"  => $user->id,
			"email" => $user->email,
			"nombre" => $user->nombre,
			"estado" => $user->idestado,
			"tipousuario"=> $user->idtipousuario,
			"aprobado"=> $user->aprobado
		);

				/**
		 * IMPORTANT:
		 * You must specify supported algorithms for your application. See
		 * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
		 * for a list of spec-compliant algorithms.
		 */
		$jwt = JWT::encode($payload, $key);

		return $jwt;
	}
		
	public function _generateCode(){
		$set = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$code = substr(str_shuffle($set), 0, 64);
		return $code;
	}
	
	
	public function _cifer($pass){
		return password_hash($pass, PASSWORD_DEFAULT);

	}
	
	// ENVIO DE EMAIL

	public function _enviarEmail($to, $subject, $message)
	{
		return $this->_enviarEmailSMTP($to, $subject, $message);
	}

	public function _enviarEmailSMTP($to, $subject, $message)
	{
		$email = \Config\Services::email();
		$email->setFrom(EMAILADMIN, EMPRESA);
		$email->setTo($to);
		$email->setSubject($subject);
		$email->setMessage($message); //your message here
		$email->setMailType('html');
		$email->setPriority(1);

		$email->send();
		//$email->printDebugger(['headers']);



		/* $email = \Config\Services::email();
		$email->setFrom($from, 'Remate54');
		$email->setTo($to);
		$email->setSubject($subject);
		$email->setMessage($message); //your message here
		$email->setMailType('html');
		$email->setPriority(1);

		$email->send();
		$email->printDebugger(['headers']); */
	}


	public function Ahora($formato)
	{
		$hoyD = new Time('now', 'America/Argentina/Cordoba');
		if($formato === 'date'){
			$hoy  = $hoyD->toDateString();
		}else{
			$hoy  = $hoyD->toDateTimeString();
		}
		
		return $hoy;
	}

	

}
