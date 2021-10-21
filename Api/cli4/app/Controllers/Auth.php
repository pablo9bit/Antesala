<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\UsuariosModel;
use Config\Services;
use Firebase\JWT\JWT;

class Auth extends BaseController
{
	use ResponseTrait;


	
	public function auth(){
		
		$request = service('request');
		
		if ($request->getMethod() !=='post') {
			return $this->fail(['msg' => 'Metodo Incorrecto'],400);
		}


		try
		{ 
			$email = '';
			$password = '';

			$body = json_decode($request->getBody());

			if (empty($body->email) || $body->email === null) {
				return $this->fail(['msg' => 'Usuario Incorrecto'],400);
			} else {
				$email = $body->email;
			}

			if (empty($body->password) || $body->password === null) {
				return $this->fail(['msg' => 'Password Incorrecto'],400);
			} else {
				$password = $body->password;
			}


			// Consultar base de datos
			$model = new UsuariosModel();
			$user = $model->where('email', $email)->first();
	
			if(!$user){
				return $this->fail(['msg' => 'Usuario No Existe'],400);
			}else{
				
				
				if($user->idestado === '1'){
					return $this->fail(['msg' => 'Debe validar su dirección de correo'],400);
				}
				if($user->idestado === '3'){
					return $this->fail(['msg' => 'Su cuenta se encuentra Desactivada. Motivo: '.$user->motivodesactivado],400);
				}
				
				if($user->idestado === '2'){
					if(password_verify($password, $user->password)){
						$token = $this->_generarToken($user);
						return $this->respondCreated(['token' => $token]);
					}else{
						return $this->fail(['msg' => 'Password Incorrecto'],400);
					}
				}
				
			}
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		} 

	}


	public function getInfo(){
		$user = $this->_verificarToken();
		if($user){
			return $this->respondCreated(['usuario' => $user]);
		}else{
			return $this->fail(['msg' => 'Auth Incorrecto'],400);
		}
	
	}
	
	
	public function activarCuenta(){
		
		$request = service('request');
		
		try
		{
			$code = $request->getGet('id');
			$model = new UsuariosModel();
			
			$user = $model
			->where('code', $code)
			->where('idestado', '1')
			->first(); 
			
			if($user){
				
				$id = $user->id; 

				$data = [
					'code'			=> '',
					'idestado' 		=> 2
				];

				$userUpdate = $model->update($id, $data);
					
				return $this->respondCreated(['msg' => 'Activacion Exitosa']);
			}else{
				return $this->fail(['msg' => 'Fallo la Activacion'],400);
			}
						
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
		
	}
	
	
	public function enviarActivarCuenta(){
		
		$request = service('request');
		
		try
		{
			$campos= get_object_vars(json_decode($request->getBody()));

			$email 	= $campos['email'];
			$code 	= $this->_generateCode();
			
			$model = new UsuariosModel();

			$user = get_object_vars($model->where('email', $email)->first()); 
		
			if($user){				
				$user = $model
				->where('email', $email)
				->set(['idestado' => 1, 'code'=> $code])
				->update();
				
				// enviar mail de confirmacion de cuenta
				$message = 'Para activar su cuenta en RemateYa, haga click en el siguiente link: '.anchor('https://remateya.com/activar/'.$code, 'ACTIVAR CUENTA');
				$from 	 = 'validar@remateya.com';
				$to 	 = $campos['email'];
				$subject = 'Validar Cuenta de Correo - RemateYa';
				
				$this->_enviarEmail($message, $from, $to, $subject);
				// enviar mail de confirmacion de cuenta

				return $this->respondCreated(['msg' => 'Se envio email para Activar Cuenta']);

			}else{
				
				return $this->fail(['msg' => 'La direccion de email no existe en RemateYa'],400);

			}
						
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
		
	}
	
	
	public function enviarRecuperarPassword(){
		
		$request = service('request');
		
		try
		{
			$campos= get_object_vars(json_decode($request->getBody()));

			$email 	= $campos['email'];
			$code 	= $this->_generateCode();
			
			$model = new UsuariosModel();

			$user = $model->where('email', $email)->first(); 
					

			if(isset($user)){				
				$user = $model
				->where('email', $email)
				->set(['codePassword'=> $code])
				->update();
				
				// enviar mail de confirmacion de cuenta
				$message = 'Para Recuperar su Contraseña, haga click en el siguiente link: '.anchor('https://rematesya.com/recuperar/'.$code, 'RECUPERAR');
				$from 	 = 'validar@validar.com';
				$to 	 = $campos['email'];
				$subject = 'Recuperar Contraseña - '.EMPRESA;
				
				$this->_enviarEmail($message, $from, $to, $subject);
				// enviar mail de confirmacion de cuenta

				return $this->respondCreated(['msg' => 'Se envio email para Recuperar su Contraseña']);

			}else{
				
				return $this->fail(['msg' => 'La direccion de email ingresada no se registro en RematesYa'],400);

			}
						
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
		
	}
	
	
	public function cambiarRecuperarPassword(){
		
		$request = service('request');
		
		try
		{
			$campos= get_object_vars(json_decode($request->getBody()));

			$password 	= $campos['password'];
			$code 	= $campos['code'];
			
			$model = new UsuariosModel();

			$user = get_object_vars($model->where('codePassword', $code)->first()); 
		
			if($user){				
				$user = $model
				->where('id', $user['id'])
				->set(['codePassword'=> null, 'password'=> $this->_cifer($password)])
				->update();
				
				// enviar mail de confirmacion de cuenta
				$message = 'Se cambio la Contraseña con Exito';
				$from 	 = 'validar@validar.com';
				$to 	 = $user['email'];
				$subject = 'Cambio de Contraseña - '.EMPRESA;
				
				$this->_enviarEmail($message, $from, $to, $subject);
				// enviar mail de confirmacion de cuenta

				return $this->respondCreated(['msg' => 'Se Cambio la Contraseña con Exito']);

			}else{
				
				return $this->fail(['msg' => 'Hubo un Error'],400);

			}
						
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
		
	}
	
	
}
