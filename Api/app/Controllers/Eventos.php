<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\EventosModel;


class Eventos extends BaseTokenController
{
	use ResponseTrait;


	public function add()
	{

		$request = service('request');
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}
		
		try
		{ 
		
			$campos= get_object_vars(json_decode($request->getBody()));

			$model = new EventosModel();
			$obj = $model->where('slug', $campos['slug'])->first();

			if (!$obj) {
				
				$data = [
					'titulo'		=> $campos['titulo'],
					'descripcion' 	=> $campos['descripcion'],
					'slug'			=> $campos['slug'],
					'idestado'		=> $campos['idestado'],
					
				];
			
				$obj = $model->insert($data);
						
				return $this->respondCreated(['msg' => 'Se creo Evento']);
			
			} else {
				return $this->fail(['msg' => 'El Slug del Evento ya Existe'],400);
			}
		
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
			
			$model = new EventosModel();
			$obj = $model
					->where('id', $id)->first();			
			
			if(!$obj){
				return $this->respondCreated(['msg' => 'Evento No Existe']);
			}else{
				
				if(isset($campos['titulo'])){
					$obj->titulo = $campos['titulo'];
				}	
				if(isset($campos['descripcion'])){
					$obj->descripcion = $campos['descripcion'];
				}			
				if(isset($campos['slug'])){
					$obj->slug = $campos['slug'];
				}
				if(isset($campos['idestado'])){
					$obj->idestado = $campos['idestado'];
				}
				
				$model->update($id, $obj);
				
				
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
			$model = new EventosModel();
			$obj = $model->findAll();
			return $this->respondCreated(['eventos' => $obj]);
			
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
			
			$model = new EventosModel();
			$obj = $model->where('id', $id)->first();
			
			
			if(!$obj){
				return $this->respondCreated(['msg' => 'Evento No Existe']);
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
