<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use Config\Services;
use Firebase\JWT\JWT;

class BaseTokenController extends \CodeIgniter\Controller
{
	
	protected $helpers = [];
	public $usuario = [];
	
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
		
		
		$this->usuario = $this->_verificarToken();
		
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
		
		return $decoded;

	}

	
	public function _enviarEmail($message, $from, $to, $subject){
	   $email = \Config\Services::email();
	   $email->setFrom($from, EMPRESA);
	   $email->setTo($to);
	   $email->setSubject($subject);
	   $email->setMessage($message);//your message here
	   $email->setMailType('html');
	   $email->setPriority(1);
	   
	   //$email->setCC('another@emailHere');//CC
	   //$email->setBCC('thirdEmail@emialHere');// and BCC
	   //$filename = '/img/yourPhoto.jpg'; //you can use the App patch 
	   //$email->attach($filename);
		
	   $email->send();
	   $email->printDebugger(['headers']);
	}

	
	public function _generateCode(){
		$set = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$code = substr(str_shuffle($set), 0, 64);
		return $code;
	}
	
	
	public function _cifer($pass){
		return password_hash($pass, PASSWORD_DEFAULT);

	}
}
