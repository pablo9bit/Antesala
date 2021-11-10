<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\UsuariosModel;


class User extends BaseController
{
	use ResponseTrait;


/* 	public function add()
	{

		$request = service('request');
		
		try
		{
		
			$campos= get_object_vars(json_decode($request->getBody()));

			$model = new UsuariosModel();
			$user = $model->getUserExist($campos['email'], $campos['cuil']);

			if (!$user) {
				
				$data = [
					'uid'		=> $uid,
					'nombre' 	=> $campos['nombre'],
					'apellido' 	=> $campos['apellido'],
					'telefono'	=> $campos['telefono'],
					'email'    	=> $campos['email'],
					'idtipousuario' => $campos['tipousuario'],
					'idestado'	=> 2,
					'aprobado'	=> 1
				];

			
				$user = $model->insert($data);
				
				
				// enviar mail de confirmacion de cuenta
				$message = 'Para activar su cuenta en '.EMPRESA.', haga click en el siguiente link: '.anchor('https://rematesya.com/activar/'.$code, 'ACTIVAR CUENTA');
				$from 	 = 'validar@Validar.com';
				$to 	 = $campos['email'];
				$subject = 'Validar Cuenta de Correo - '.EMPRESA;
				
				$this->_enviarEmail($message, $from, $to, $subject);
				// enviar mail de confirmacion de cuenta
				
				
				return $this->respondCreated(['msg' => 'Se creo el Usuario']);
			
			} else {
				return $this->fail(['msg' => 'Email y/o Cuil ya Existe', 'user' => $user],400);
			}
		
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
		
	}

 */
	public function update()
	{
		$request = service('request');
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}

		try
		{
			$campos= get_object_vars(json_decode($request->getBody()));
			
			
			if(isset($campos['id'])){
				$id = $campos['id'];
			}else{
				$id = $this->usuario['id'];	

			}
			
			
			$model = new UsuariosModel();
			$user = $model->where('id', $id)->first();
			
			if(!$user){
				return $this->respondCreated(['msg' => 'Usuario No Existe']);
			}else{
				
				/* if(isset($campos['aprobado'])){
					$user->aprobado = $campos['aprobado'];
					
					
					if($campos['aprobado'] === '1'){
						// enviar mail 
						$email = $user->email;
						$message = 'Ha sido Autorizado a Operar en '.anchor('https://rematesya.com/', 'RemateYa');
						$from 	 = 'validar@validar.com';
						$to 	 = $email;
						$subject = 'Martillero Autorizado - '.EMPRESA;
							
						$this->_enviarEmail($message, $from, $to, $subject);
						// enviar mail 
					}
				} */
				
				if(isset($campos['password']) ){
					
					
					if(password_verify($campos['password'], $user->password)){
						$user->password = $this->_cifer($campos['newpassword']);
					}else{
						return $this->fail(['msg' => 'La contraseña actual no es Correcta' ],400);
					}
				}
				
				if(isset($campos['idestado'])){
					$user->idestado = $campos['idestado'];
				}
				if(isset($campos['motivodesactivado'])){
					$user->motivodesactivado = $campos['motivodesactivado'];
				}
				
				
				$model->update($id, $user);
				
				
				return $this->respondCreated(['msg' => 'Se Realizo con Exito']);
			}

		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}


	public function getAll()
	{
	 	$request = service('request');
	
			
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}
		
		try
		{
			//$idtipo = $request->getGet('idtipo');

			$model = new UsuariosModel();
			$usuarios = $model->findAll();	
			return $this->respondCreated(['usuarios' => $usuarios]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}
	
	
	public function get()
	{
	 	$request = service('request');
	
			
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}
		
		try
		{
			$id = $request->getGet('idusuario');

			$model = new UsuariosModel();
			$usuarios = $model->where('id', $id)->first();	
			return $this->respondCreated(['usuarios' => $usuarios]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}


	public function completarregistro()
	{

		$request = service('request');

		try {

			$campos= get_object_vars(json_decode($request->getBody()));
			$uid = $campos['uid'];

			$model = new UsuariosModel();
			$user = $model->where('uid', $uid)->first();

			if (!$user) {

				$data = [
					'uid'		=> $uid,
					'nombre' 	=> $campos['nombre'],
					'apellido' 	=> $campos['apellido'],
					'telefono'	=> $campos['telefono'],
					'email'    	=> $campos['email'],
					'idtipousuario' => $campos['tipousuario'],
					'idestado'	=> 2,
					'aprobado'	=> 1
				];

				$model->insert($data);

				$user = $model->where('uid', $uid)->first();
				
				if($campos['generatoken'] === "si"){
					$token = $this->_generarToken($user);
				}else{
					$token = null;
				}

			} else {

				if($campos['generatoken'] === "si"){
					$token = $this->_generarToken($user);
				}else{
					$token = null;
				}
				
			}

			return $this->respondCreated(['token' => $token, 'msg'=> 'Su Usuario se Creo con Exito']);
			
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}



}
