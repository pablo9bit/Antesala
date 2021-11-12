<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\UsuariosModel;

class Auth extends BaseController
{
	use ResponseTrait;


	public function auth()
	{

		$request = service('request');

		try {
			$email = '';
			$password = '';

			$body = json_decode($request->getBody());

			if (empty($body->email) || $body->email === null) {
				return $this->fail(['msg' => 'Usuario Incorrecto'], 400);
			} else {
				$email = $body->email;
			}

			if (empty($body->password) || $body->password === null) {
				return $this->fail(['msg' => 'Password Incorrecto'], 400);
			} else {
				$password = $body->password;
			}


			// Consultar base de datos
			$model = new UsuariosModel();
			$user = $model->where('email', $email)->first();

			if (!$user) {
				return $this->fail(['msg' => 'Usuario No Existe'], 400);
			} else {


				if ($user->idestado === '1') {
					return $this->fail(['msg' => 'Debe validar su dirección de correo'], 400);
				}
				if ($user->idestado === '3') {
					return $this->fail(['msg' => 'Su cuenta se encuentra Desactivada. Motivo: ' . $user->motivodesactivado], 400);
				}

				if ($user->idestado === '2') {
					if (password_verify($password, $user->password)) {
						$token = $this->_generarToken($user);
						return $this->respondCreated(['token' => $token]);
					} else {
						return $this->fail(['msg' => 'Password Incorrecto'], 400);
					}
				}
			}
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}

	public function authUID()
	{

		$request = service('request');

		try {

			$uid = $request->getGet('uid');

			// Consultar base de datos
			$model = new UsuariosModel();
			$user = $model->where('uid', $uid)->first();

			if (!$user) {
				return $this->respondCreated(['msg' => 'Usuario No Existe', 'token' => null, 'usuario' => null]);
			} else {

				$token = $this->_generarToken($user);

				$usuario = [
					"id"  => $user->id,
					"email" => $user->email,
					"nombre" => $user->nombre,
					"estado" => $user->idestado,
					"tipousuario" => $user->idtipousuario,
					"idestado" => $user->idestado
				];

				return $this->respondCreated(['token' => $token, 'usuario' => $usuario]);
			}
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}

	public function getInfo()
	{
		$user = $this->_verificarToken();
		if ($user) {
			return $this->respondCreated(['usuario' => $user]);
		} else {
			return $this->fail(['msg' => 'Auth Incorrecto'], 400);
		}
	}



}
