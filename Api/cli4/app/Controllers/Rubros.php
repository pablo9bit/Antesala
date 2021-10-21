<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\ProductosRubrosModel;

class Rubros extends BaseTokenController
{
	use ResponseTrait;


	public function getAll()
	{
		$request = service('request');
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}
		
		try
		{
		
			// Consultar base de datos
			$model = new ProductosRubrosModel();
			$categorias = $model->findAll();

			return $this->respondCreated(['rubros' => $categorias]);
		
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}
	
	public function add()
	{

		$request = service('request');
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}
		
		try
		{ 
		
			$campos= get_object_vars(json_decode($request->getBody()));

			$model = new ProductosRubrosModel();

			$data = [
				'rubro'		=> strtoupper($campos['rubro']),
				'activo' 	=> $campos['activo'],
			];
			
			$dom = $model->insert($data);
						
			return $this->respondCreated(['msg' => 'Se creo Rubro']);
			
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
		
	}

	public function update()
	{
		$request = service('request');
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}

		try
		{
			$campos= get_object_vars(json_decode($request->getBody()));
			
			
			$id = $campos['id'];	
			
			$model = new ProductosRubrosModel();
			$email = $model->where('id', $id)->first();			
			
			if(!$email){
				return $this->respondCreated(['msg' => 'Rubro No Existe']);
			}else{
				
				if(isset($campos['rubro'])){
					$email->rubro = strtoupper($campos['rubro']);
				}	
				if(isset($campos['activo'])){
					$email->activo = $campos['activo'];
				}			
				
				$model->update($id, $email);
				
				
				return $this->respondCreated(['msg' => 'Se Realizo con Exito']);
			}

		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	} 

	public function remove()
	{
		$request = service('request');
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}

		try
		{
			
			$id = $request->getGet('id');
			
			$model = new ProductosRubrosModel();
			$user = $model->where('id', $id)->first();
			
			
			if(!$user){
				return $this->respondCreated(['msg' => 'Rubro No Existe']);
			}else{
					
				$model->delete($id);
				
				
				return $this->respondCreated(['msg' => 'Se Realizo con Exito']);
			}

		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	} 



}
