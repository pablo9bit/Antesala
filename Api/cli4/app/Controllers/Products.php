<?php

namespace App\Controllers;

use CodeIgniter\I18n\Time;
use CodeIgniter\API\ResponseTrait;
use App\Models\ProductosModel;
use App\Models\ProductosImagenesModel;
use App\Models\SubastasModel;
use App\Models\PagosModel;


class Products extends BaseTokenController
{
	use ResponseTrait;


	public function getAllUser()
	{
		$request = service('request');
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}
		
		if($request->getGet('idusuario')!==null){
			$idusuario = $request->getGet('idusuario');
		}else{
			$idusuario = $this->usuario['id'];	
		};
		
		try
		{
			//$id = $this->usuario['id'];	
			
			$model = new ProductosModel();
			$productos = $model->getAllProductsOneImage($idusuario);
			
			return $this->respondCreated(['productos' => $productos, 'idusuario'=> $idusuario]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}
	
	
	public function getAll()
	{
		$request = service('request');
		
		try
		{
			$pagina = $request->getGet('page');
			$texto = $request->getGet('texto');

			$model = new ProductosModel();
			$productos = $model->getAllProductsOneImagePaginado($pagina, $texto);
			
			$modelSubasta = new SubastasModel();
			
			
			return $this->respondCreated($productos);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}
	
	
	public function get()
	{
		$request = service('request');

		try
		{	
			$id = $request->getGet('id');
			
			$model = new ProductosModel();			
			$producto = get_object_vars($model->where('id', $id)->first());
			$identificador = $producto['identificador'];

			
			$modelImages = new ProductosImagenesModel();
			$imagenes = $modelImages->getImagesOfProduct($identificador, 0);
			
			$modelSubastas = new SubastasModel();
			$subastasHistorico = $modelSubastas->where('idproducto', $id)->findAll();
			
			$subasta = $modelSubastas
				->where('idproducto', $id)
				->orderBy('fechafin', 'desc')
				->first();
			
			return $this->respondCreated([
			'producto' => $producto, 
			'imagenes' => $imagenes, 
			'subastasHistorico' => $subastasHistorico,
			'subasta' => $subasta
			]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}

	}
	
	
	public function remove()
	{
			
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}
		
		$request = service('request');

		try
		{
			$id = $request->getGet('id');
			
			$model = new ProductosModel();

			$producto = get_object_vars($model
			->where('id', $id)
			->where('idusuario', $this->usuario['id'])
			->first()
			);
			
			$identificador = $producto['identificador'];
			$producto = $model->where('id', $id)->where('idusuario', $this->usuario['id'])->delete();			

			$modelImages = new ProductosImagenesModel();
			$modelImages->removeImagesOfProduct($identificador);
			
			return $this->respondCreated(['msg' => 'Se Elimino con Exito']);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}

	}

	
	public function add()	
	{
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}
		
		$request = service('request');
		
		try
		{
			$campos= get_object_vars(json_decode($request->getBody()));
			
			$hoyD = new Time('now', 'America/Argentina/Cordoba');
			$hoy  =$hoyD->toDateString();
	
			$idusuario = $this->usuario['id'];	
			
			if($hoy === $campos['fechaInicio']){
				$idestado = "2";
			}else{
				$idestado = $campos['idestado'];
			}
			
			$data = [
				'titulo'		=> $campos['titulo'],
				'descripcion' 	=> $campos['descripcion'],
				'idcategoria'	=> $campos['idcategoria'],
				'idrubro'		=> $campos['idrubro'],
				'idusuario'		=> $idusuario,  
				'idestado'		=> $idestado,
				'identificador' => $campos['identificador'],
				'valor'			=> $campos['valor'],
				'vendedor' 		=> $campos['vendedor'],
				'vendedorcuil' 	=> $campos['vendedorcuil'],
				'urlvideo' 		=> $campos['urlvideo'],
				'vendedorurl' 	=> $campos['vendedorurl'],
				'fechaInicio' 	=> $campos['fechaInicio'],
				'fechaFin' 		=> $campos['fechaFin'],
				'base' 			=> $campos['base'],
				'posturaMinima' => $campos['posturaMinima'],
				'Moneda'		=> $campos['Moneda'],
			];

			$model = new ProductosModel();
			$producto = $model->insert($data);
			return $this->respondCreated(['msg' => 'Ingreso Realizado']);
		
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
				
	}


	public function update()
	{
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}

		$request = service('request');
		
		try 
		{			
			$campos= get_object_vars(json_decode($request->getBody()));
			$id = $campos['id'];
			
 			$model = new ProductosModel();	

			$producto = get_object_vars($model
			->where('id', $id)
			//->where('idusuario', $this->usuario['id'])
			->first()
			); 
			
			$identificador = $producto['identificador']; 

			$data = [
				'titulo'		=> $campos['titulo'],
				'descripcion' 	=> $campos['descripcion'],
				'idcategoria'	=> $campos['idcategoria'],
				'idrubro'		=> $campos['idrubro'],
				'valor'			=> $campos['valor'],
				'vendedor' 		=> $campos['vendedor'],
				'vendedorcuil' 	=> $campos['vendedorcuil'],
				'urlvideo' 		=> $campos['urlvideo'],
				'vendedorurl' 	=> $campos['vendedorurl'],
				'idusuario' 	=> $campos['idusuario'],
				'fechaInicio' 	=> $campos['fechaInicio'],
				'fechaFin' 		=> $campos['fechaFin'],
				'base' 			=> $campos['base'],
				'posturaMinima' => $campos['posturaMinima'],
				'Moneda'		=> $campos['Moneda'],
			];


			$producto = $model->update($id, $data);
			
			//$modelImages = new ProductosImagenesModel();
			//$modelImages->updateImagesOfProduct($identificador);
			
			return $this->respondCreated(['msg' => $identificador]);
		
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}

	
	public function getDetalleSubasta()
	{
		
		/* if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		} */

		$request = service('request');
		try
		{	

			$relacionados = null;
			$imagenes = null;
			$producto = null;			
			$respuesta = 0;
			$subasta = null;
			$dataUser = null;
			$ganador = null;
			$pagos = null;
			
			//producto
			$id = $request->getGet('id');
			//$iduser = $request->getGet('user');
			
			$model = new ProductosModel();			
			$producto = $model->where('id', $id)->first();
			
			
			if(isset($producto)){
				$identificador = $producto->identificador;
				
				//$relacionados = $model->getAllProductsOneImageRelacionados($vendedorcuil, $id);
				
				$modelImages = new ProductosImagenesModel();
				$imagenes = $modelImages->getImagesOfProduct($identificador, 0);
				
				if($this->usuario){
				$modelPagos = new PagosModel();
				$pagos = $modelPagos
						->where('idusuario', $this->usuario['id'])
						->where('idproducto', $id)->first();
				}
				
				// ganador
				if($producto->idestado === "3" || $producto->idestado === "5"){ // finalizada
					//$ganador = $modelSubastas->Ganador($subasta->id);
				}
				
			}
			
			
			return $this->respondCreated([
			'producto' => $producto, 
			'relacionados' => $relacionados,
			'martillero' => $dataUser,
			'imagenes' => $imagenes, 
			'subasta' => $subasta,
			'ganador' => $ganador,
			'tengopermiso' => $respuesta,
			'pagos' => $pagos,
			]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}  

	}
	
	
	public function getSubastas()
	{
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		} 

		$request = service('request');
		try
		{	
			$model = new ProductosModel();			
			$producto = $model->SubastasResumen();
			
			return $this->respondCreated([
			'productos' => $producto, 
			]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}  

	}
	
	
	public function getStatsSubasta()
	{
		$request = service('request');
		
		try
		{ 
			
			$idproducto = $request->getGet('id');
			
			$model = new ProductosModel();
			$subastas = $model->Stats($idproducto);
			
			return $this->respondCreated(['msg' => $subastas]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}



}
