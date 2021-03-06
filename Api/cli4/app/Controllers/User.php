<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\UsuariosModel;
use App\Models\UsuariosOrganizacionesModel;
use App\Models\UsuariosImagenesModel;
use App\Models\UsuariosOpcionesCobrosModel;


class User extends BaseController
{
	use ResponseTrait;

	public function completarregistro()
	{

		$request = service('request');

		try {

			$campos = get_object_vars(json_decode($request->getBody()));
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

				if ($campos['generatoken'] === "si") {
					$token = $this->_generarToken($user);
				} else {
					$token = null;
				}
			} else {

				if ($campos['generatoken'] === "si") {
					$token = $this->_generarToken($user);
				} else {
					$token = null;
				}
			}

			return $this->respondCreated(['token' => $token, 'msg' => 'Su Usuario se Creo con Exito']);
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}




	// ORGANIZACIONES

	public function addOrUpdateOrganizacion()
	{

		$request = service('request');

		if (!$this->usuario) {
			return $this->fail(['msg' => '0'], 400);
		}

		try {

			$campos = get_object_vars(json_decode($request->getBody()));
			$id = $this->usuario['id'];


			$model = new UsuariosModel();
			$user = $model->where('id', $id)->first();

			if ($user) {

				$modelOrg = new UsuariosOrganizacionesModel();
				$userOrg = $modelOrg->where('idusuario', $id)->first();

				if (!$userOrg) {

					$data = [
						'idusuario'		=> $id,
						'razon_social' 	=> $campos['razon_social'],
						'logo'		 	=> $campos['logo'],
						'descripcionOrg' => $campos['descripcionOrg'],
						'ubicacion'    	=> $campos['ubicacion'],
						'coordX' 		=> $campos['coordX'],
						'coordY' 		=> $campos['coordY'],
						'whatsapp'		=> $campos['whatsapp'],
						'idestado'		=> 1,
						'url'			=> $campos['url'],
						'accesibilidad'	=> $campos['accesibilidad'],
					];

					$modelOrg->insert($data);
					return $this->respondCreated(['msg' => 'Su Perfil se Creo con Exito']);
				} else {

					$data = [
						'razon_social' 	=> $campos['razon_social'],
						'logo'		 	=> $campos['logo'],
						'descripcionOrg' => $campos['descripcionOrg'],
						'ubicacion'    	=> $campos['ubicacion'],
						'coordX' 		=> $campos['coordX'],
						'coordY' 		=> $campos['coordY'],
						'whatsapp'		=> $campos['whatsapp'],
						'idestado'		=> 1,
						'url'			=> $campos['url'],
						'accesibilidad'	=> $campos['accesibilidad'],
						'motivodesactivado'	=> $campos['motivodesactivado'],
					];

					$modelOrg
						->set($data)
						->where('idusuario', $id)
						->update();


					$datauser = [
						'nombre' 	=> $campos['nombre'],
						'apellido'	=> $campos['apellido'],
						'telefono'  => $campos['telefono'],
						'idlocalidad' => $campos['idlocalidad'],
					];

					$model
						->set($datauser)
						->where('id', $id)
						->update();


					return $this->respondCreated(['msg' => 'Su Perfil se Modifico con Exito']);
				}
			} else {

				return $this->respondCreated(['msg' => 'Su Usuario no existe']);
			}
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}

	public function cambiarEstadoOrganizacion()
	{

		$request = service('request');

		if (!$this->usuario) {
			return $this->fail(['msg' => '0'], 400);
		}

		try {

			$campos = get_object_vars(json_decode($request->getBody()));
			$id = $campos['id'];

			$model = new UsuariosModel();
			$user = $model->where('id', $id)->first();

			if ($user) {

				$data = [
					'idestado'			=> $campos['idestado'],
					'motivodesactivado'	=> $campos['motivodesactivado'],
				];

				$model
					->set($data)
					->where('id', $id)
					->update();


				$modelOrg = new UsuariosOrganizacionesModel();
				$userOrg = $modelOrg->where('idusuario', $id)->first();

				if ($userOrg) {

					$modelOrg
						->set($data)
						->where('idusuario', $id)
						->update();

					$model
						->set($data)
						->where('id', $id)
						->update();

					return $this->respondCreated(['msg' => 'Su Perfil se Modifico con Exito']);
				} else {
					return $this->respondCreated(['msg' => 'Su Usuario no existe']);
				}
			} else {

				return $this->respondCreated(['msg' => 'Su Usuario no existe']);
			}
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}

	public function getOrganizaciones()
	{
		$request = service('request');

		/* if (!$this->usuario) {
			return $this->fail(['msg' => '0'], 400);
		} */

		try {
			$texto = $request->getGet('texto');

			$model = new UsuariosModel();

			if (!empty($texto)) {
				$like = ' and (nombre like "%' . $texto . '%" or apellido like "%' . $texto . '% or telefono like "%' . $texto . '% or email like "%' . $texto . '%")';
			} else {
				$like = '';
			}

			$filtrado = $model->Where('idtipousuario  = 1 ' . $like)
				->Select([
					'Usuarios.id as idusuario', 'uid', 'nombre', 'apellido', 'telefono', 'email', 'Usuarios.idestado as idestadoUsuario', 'fecha', 'idtipousuario',
					'imagen',  'Usuarios.motivodesactivado as motivoUsuario',
					'razon_social', 'descripcionOrg', 'logo', 'whatsapp', 'idlocalidad',
					'ubicacion', 'coordX', 'coordY', 'UsuariosOrganizaciones.idestado as idestadoOrg',
					'url', 'UsuariosOrganizaciones.motivodesactivado as motivoOrg', 'UsuariosOrganizaciones.id as idOrg',
					'UsuariosEstados.estado'
				])
				->join('UsuariosOrganizaciones', 'UsuariosOrganizaciones.idusuario = Usuarios.id', 'left')
				->join('UsuariosEstados', 'UsuariosEstados.id = Usuarios.idestado')
				->findAll();

			$modelImages = new UsuariosImagenesModel();
			foreach ($filtrado as $row) {
				$imagenes = $modelImages
					->select(['id',  'idusuario',  'archivo', 'slider', 'identificador', 'accion', 'id as idtemp'])
					->where('idusuario', $row->idusuario)
					->findAll();
				$row->imagenes = $imagenes;
			}

			return $this->respondCreated(['msg' => '', 'organizaciones' => $filtrado]);
		} catch (\Exception $e) {
			return $this->fail(['type' => 'error', 'msg' => $e->getMessage()], 400);
		}
	}

	public function getOrganizacion()
	{

		$request = service('request');

		/* 	if (!$this->usuario) {
			return $this->fail(['msg' => '0'], 400);
		} */

		try {

			$id = $request->getGet('idusuario');

			$model = new UsuariosModel();
			$user = $model
				->Select([
					'Usuarios.id as idusuario', 'uid', 'nombre', 'apellido', 'telefono', 'email', 'Usuarios.idestado as idestadoUsuario', 'fecha', 'idtipousuario',
					'imagen',  'Usuarios.motivodesactivado',
					'razon_social', 'descripcionOrg', 'logo', 'whatsapp', 'idlocalidad',
					'ubicacion', 'coordX', 'coordY', 'UsuariosOrganizaciones.idestado as idestadoOrg',
					'url', 'UsuariosOrganizaciones.motivodesactivado as motivoOrg', 'UsuariosOrganizaciones.id as idOrg',
					'UsuariosEstados.estado', 'UsuariosOrganizaciones.accesibilidad'
				])
				->join('UsuariosOrganizaciones', 'UsuariosOrganizaciones.idusuario = Usuarios.id', 'left')
				->join('UsuariosEstados', 'UsuariosEstados.id = Usuarios.idestado')
				->where('Usuarios.id', $id)
				->first();

			$modelImages = new UsuariosImagenesModel();

			$imagenes = $modelImages
				->select(['id',  'idusuario',  'archivo', 'slider', 'identificador', 'accion', 'id as idtemp'])
				->where('idusuario', $id)
				->findAll();
			$user->imagenes = $imagenes;

			$modelCobros = new UsuariosOpcionesCobrosModel();

			$cobros = $modelCobros
				->where('idusuario', $id)
				->findAll();
			$user->MediosCobros = $cobros;

			return $this->respondCreated(['org' => $user, 'msg' => '']);
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}
}
