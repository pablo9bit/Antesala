<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\UsuariosImagenesModel;

class UsuariosImagenes extends BaseController
{
	use ResponseTrait;


	public function getAll()
	{

		if (!$this->usuario) {
			return $this->fail(['msg' => '0'], 400);
		}

		$request = service('request');

		try {
			$identificador = $request->getGet('identificador');

			$model = new UsuariosImagenesModel();
			$imagenes = $model
				->where('identificador', $identificador)
				->where('idusuario', $this->usuario['id'])
				->findAll();

			return $this->respondCreated(['imagenes' => $imagenes]);
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}


	public function subir()
	{

		if (!$this->usuario) {
			return $this->fail(['msg' => '0'], 400);
		}

		$request = service('request');

		try {
			$identificador = $request->getPost('identificador');

			$img = $this->request->getFile('archivo');

			if ($img->isValid() && !$img->hasMoved()) {
				$newName = $img->getRandomName();
				$img->move(WRITEPATH . 'uploads', $newName);
			}

			$data = [
				'archivo'		=> $newName,
				'identificador' => $identificador,
				'idusuario' => $this->usuario['id']
			];

			$model = new UsuariosImagenesModel();
			$imagen = $model->insert($data);

			$dev = [
				'archivo' 	=> $newName,
				'id'		=> $imagen,
			];

			return $this->respondCreated(['imagen' => $dev]);
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}


	public function borrar()
	{

		if (!$this->usuario) {
			return $this->fail(['msg' => '0'], 400);
		}

		$request = service('request');

		try {

			$id = $request->getGet('id');

			$model = new UsuariosImagenesModel();
			$imagen = $model
				->where('id', $id)
				->first();

			$archivo = $imagen->archivo;


			if (file_exists(WRITEPATH . 'uploads/' . $archivo)) {
				unlink(WRITEPATH . 'uploads/' . $archivo);
			}

			$model->where('id', $id)->delete();

			return $this->respondCreated(['imagen' => $id]);
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}
}
