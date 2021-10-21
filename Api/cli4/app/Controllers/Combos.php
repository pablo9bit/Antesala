<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;

use App\Models\ProductosCategoriasModel;
use App\Models\ProductosRubrosModel;
use App\Models\SubastasEstadosModel;


class Combos extends BaseTokenController
{
	use ResponseTrait;


	public function getProductosCategorias()
	{
	 	$request = service('request');
		
		try
		{
			$model = new ProductosCategoriasModel();
			$usuarios = $model->where('activo', 1)->findAll();
							
			return $this->respondCreated(['productoscategorias' => $usuarios]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}
	
	public function getProductosRubros()
	{
	 	$request = service('request');
		
		try
		{
			$model = new ProductosRubrosModel();
			$usuarios = $model->where('activo', 1)->findAll();
							
			return $this->respondCreated(['productosrubros' => $usuarios]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}

	public function getSubastasEstados()
	{
	 	$request = service('request');
		
		try
		{
			$model = new SubastasEstadosModel();
			$usuarios = $model->findAll();
							
			return $this->respondCreated(['subastasestados' => $usuarios]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}


}
