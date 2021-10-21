<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\SubastasOfertasModel;

class SubastasOfertas extends BaseTokenController
{
	use ResponseTrait;

	
	public function add()	
	{
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}
		
		$request = service('request');
		
		try
		{
			$campos= get_object_vars(json_decode($request->getBody()));

			$data = [
				'idproducto'	=> $campos['idsubasta'],
				'valor' 		=> $campos['valor'],
				'idtipooferta'	=> $campos['idtipooferta'],
				'idusuario'		=> $this->usuario['id']
			];

			$model = new SubastasOfertasModel();
			$subastasofertas = $model->insert($data);
			return $this->respondCreated(['msg' => 'Ingreso Realizado']);
		
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
				
	}

	public function getAllUser()
	{
		$request = service('request');
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}
		
		try
		{
		
			// Consultar base de datos
			$model = new SubastasOfertasModel();
			$ofertas = $model->getAllUser($this->usuario['id']);

			return $this->respondCreated(['ofertas' => $ofertas]);
		
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
		
			// Consultar base de datos
			$model = new SubastasOfertasModel();
			$ofertas = $model->getAllUser(0);

			return $this->respondCreated(['ofertas' => $categorias]);
		
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}


}
