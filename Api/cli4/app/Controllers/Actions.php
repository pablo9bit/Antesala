<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\SuscripcionesModel;


class Actions extends BaseTokenController
{
	use ResponseTrait;


	public function enviarEmail()
	{
		$request = service('request');
		
		try
		{
			$campos= get_object_vars(json_decode($request->getBody()));

			// enviar mail 
			$message = 'Mensaje: '.$campos['mensaje'].'<br><br>Nombre y Apellido: '.$campos['nya'].'<br><br>Email: '.$campos['email'];
			$from 	 = 'enviamos.emails@gmail.com';
			$to 	 = EMAILADMIN;
			$subject = 'EMAIL de '.EMPRESA;
				
			$this->_enviarEmail($message, $from, $to, $subject);
			// enviar mail 

			return $this->respondCreated(['msg' => 'Su mensaje fue enviado con Exito']);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}
	
	
	public function Suscribir()	
	{
		
		/* if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		} */
		
		$request = service('request');
		
		try
		{
			$campos= get_object_vars(json_decode($request->getBody()));
			$model = new SuscripcionesModel();

			$obj = $model
					->where('email', strtolower($campos['email']))
					->first();

			if (!$obj) {
			
			$data = [
				'email'		=> strtolower($campos['email']),
			];

			$producto = $model->insert($data);
			return $this->respondCreated(['msg' => 'Se Suscribio con Exito']);
			
			} else {
				return $this->fail(['msg' => 'Ya esta Suscripto', ],400);
			}
		
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
				
	}


	
	
	public function test()
	{
		$request = service('request');
		
		try
		{
			

			return $this->respondCreated(['msg' => 'exito']);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}
	
	

}
