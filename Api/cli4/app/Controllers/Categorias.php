<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\ProductosCategoriasModel;

class Categorias extends BaseTokenController
{
	use ResponseTrait;


	public function getAll()
	{
		$request = service('request');
		
		if(!$this->usuario){
			return $this->fail(['msg' => 'Auth Incorrecto'],400);
		}
		
		// Consultar base de datos
		$model = new ProductosCategoriasModel();
		$categorias = $model->where('activo', 1)->findAll();

		return $this->respondCreated(['categorias' => $categorias]);
	}
	
	public function get($id = 0)
	{
		return $this->respondCreated(['msg' => 'get']);
	}
	
	public function remove($id = 0)
	{
		return $this->respondCreated(['msg' => 'remove']);
	}




}
