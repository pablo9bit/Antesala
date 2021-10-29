<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;

class Actions extends BaseController
{
	use ResponseTrait;


	public function enviarEmail()
	{
		$request = service('request');

		try {
			$campos = get_object_vars(json_decode($request->getBody()));

			// enviar mail 
			$message = 'Mensaje: ' . $campos['mensaje'] . '<br><br>Telefono: ' . $campos['telefono'] . '<br><br>Email: ' . $campos['email'];
			$to 	 = EMAILADMIN;
			$subject = 'EMAIL de REMATE54 - ' . $campos['asunto'];

			$this->_enviarEmail($to, $subject, $message);
			// enviar mail 

			return $this->respondCreated(['type' => 'ok', 'msg' => 'Su mensaje fue enviado con Exito']);
		} catch (\Exception $e) {
			return $this->fail(['type' => 'error', 'msg' => $e->getMessage()], 400);
		}
	}



	// TEST APLICACION

	public function emailtest()
	{

		try {
			$message = 'Hola Probando';
			$to 	 = EMAILADMIN;
			$subject = 'gmail EMAIL de ' . EMPRESA . ' - ' . time();

			$salida = $this->_enviarEmail($to, $subject, $message);

			return $this->respondCreated(['salida' => $salida]);
		} catch (\Exception $e) {
			return $this->fail(['type' => 'error', 'msg' => $e->getMessage()], 400);
		}
	}

	public function test()
	{

		try {

			return $this->respondCreated([
				'fechaServidor' => date('Y-m-d H:i:s'),
				'fechaLocal' => $this->Ahora('datetime'),
				'EmailAdmin' => EMAILADMIN,
				'Empresa' => EMPRESA,
				'Url' => URLSITIO,
			]);
		} catch (\Exception $e) {
			return $this->fail(['type' => 'error', 'msg' => $e->getMessage()], 400);
		}
	}
}
