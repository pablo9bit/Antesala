<?php

namespace App\Controllers;

use CodeIgniter\I18n\Time;
use CodeIgniter\API\ResponseTrait;
use App\Models\ProductosModel;
use App\Models\ProductosImagenesModel;
use App\Models\SubastasModel;
use App\Models\SubastasOferentesModel;
use App\Models\UsuariosModel;




class Subastas extends BaseTokenController
{
	use ResponseTrait;


	public function getAllUser()
	{
		$request = service('request');
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}
		
		try
		{
			$id = $this->usuario['id'];	
			
			$model = new SubastasModel();
			$subastas = get_object_vars($model->where('idmartillero', $id)->first());

			
			return $this->respondCreated(['subastas' => $subastas]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}
	
	
	public function getAllProducts()
	{
		$request = service('request');
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}
		
		try
		{
			$idproducto = $request->getGet('id');
			
			$model = new SubastasModel();
			$subastas = $model->SubastasPorPorducto($idproducto);
			
			return $this->respondCreated(['subastas' => $subastas]);
			
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

			$model = new SubastasModel();
			$ultimaSubasta = $model
								->where('idproducto', $campos['idproducto'])
								->whereIn('idestado', ['1', '2', '5','6'])->first();

			
			if($ultimaSubasta!==null){
				return $this->fail(['msg' => 'Ya tiene una Subasta es Estado: Programada o Abierta o Vendida o Trastienda'], 400); 

			}else{
				
				$hoyD = new Time('now', 'America/Argentina/Cordoba');
				$hoy  =$hoyD->toDateString();

				$data = [
					'idproducto'	=> $campos['idproducto'],
					'fechainicio' 	=> $campos['fechainicio'],
					'fechafin' 		=> $campos['fechafin'],
					'base'	 		=> $campos['base'],
					'idmartillero'	=> $campos['idmartillero'], //$this->usuario['id'],
					'mincuota'		=> $campos['mincuota'],
					'idevento'		=> $campos['idevento'],
				];
	
				//$subasta = $model->insert($data);
				return $this->respondCreated(['msg' => 'Ingreso Realizado con Exito'.$hoy.' '.$campos['fechainicio']]);
	
			}


		
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
			
 			$model = new SubastasModel();	

			$producto = get_object_vars($model
			->where('id', $id)
			->first()
			); 
			
			$data = [					
				
				'fechainicio' 	=> $campos['fechainicio'],
				'fechafin' 		=> $campos['fechafin'],
				'base'	 		=> $campos['base'],
				'idmartillero'	=> $campos['idmartillero'], //$this->usuario['id'],
				'mincuota'		=> $campos['mincuota'],
				'idevento'		=> $campos['idevento'],
			];


			$producto = $model->update($id, $data);
			
			
			return $this->respondCreated(['msg' => 'Se Actualizo con Exito']);
		
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}

	// wget -O /dev/null https://rematesya.com/Api/public/Subastas/CronJobEndSubastas	
	public function CronJobEndSubastas()	
	{
		
		$request = service('request');
		
		try
		{
			//$hoy = getdate();
			$hoyD = new Time('now', 'America/Argentina/Cordoba');
			$hoy  =$hoyD->toDateString();
			
			$mananaD = new Time('tomorrow', 'America/Argentina/Cordoba');
			$manana  = $mananaD->toDateString();
			
			$Model = new ProductosModel();
		
			//Finish
			//UPDATE `Subastas` SET `idestado`= 3 WHERE idestado = 2 and fechafin = '2020-10-30'			
			//UPDATE `Subastas` SET `idestado`= 3 WHERE idestado = 2 and fechafin = $hoy
			
			$finish = $Model
				->where('idestado', 2)
				->where('fechaFin', $hoy)
				->set(['idestado' => 3])
				->update();
		
		
			
			// notificar ganadores
			$ganadores = $Model->Ganadores($hoy);
					
				if(isset($ganadores)){
					foreach ($ganadores as $row){
						$idsubasta = $row->id;
						// enviar mail 
						$email 	 = $row->email;
						$message = 'Felicitaciones!!! Le informamos que Usted es el Ganador en el Remate: '.$row->titulo.'. Nos comunicaremos con usted a la brevedad para realizar la entrega.';
						$from 	 = 'ganador@rematesya.com';
						$to 	 = $email;
						$subject = 'Ganador - '.EMPRESA;
										
						$this->_enviarEmail($message, $from, $to, $subject);
						// enviar mail 			
							
					}
				}   
				// notificar ganadores
			
		
			return $this->respondCreated(["hoy"=> $hoy, "manana"=> $manana, "ganadores"=> $ganadores]);
		
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
				
	}

	// wget -O /dev/null https://rematesya.com/Api/public/Subastas/CronJobStartSubastas	
	public function CronJobStartSubastas()	
	{
		
		$request = service('request');
		
		try
		{
			//$hoy = getdate();
			$hoyD = new Time('now', 'America/Argentina/Cordoba');
			$hoy  =$hoyD->toDateString();
			
			$mananaD = new Time('tomorrow', 'America/Argentina/Cordoba');
			$manana  = $mananaD->toDateString();
			
			$Model = new ProductosModel();

			//Start
			//UPDATE `Subastas` SET `idestado`= 2 WHERE idestado = 1 and fechainicio = '2020-10-30'
			//UPDATE `Subastas` SET `idestado`= 2 WHERE idestado = 1 and fechainicio = $manana
			
			$start = $Model
				->where('idestado', 1)
				->where('fechaInicio', $manana)
				->set(['idestado' => 2])
				->update();
		
			return $this->respondCreated(["hoy"=> $hoy, "manana"=> $manana]);
		
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
				
	}


	public function finSubastasManual()	
	{
		
		$request = service('request');
		
		try
		{
		
			$Model = new SubastasModel();

			
			//Finish
			//UPDATE `Subastas` SET `idestado`= 3 WHERE idestado = 2 and fechafin = '2020-10-30'			
			//UPDATE `Subastas` SET `idestado`= 3 WHERE idestado = 2 and fechafin = $hoy
			
			$finish = $Model
				->where('idestado', 2)
				->set(['idestado' => 3])
				->update();
		
		
			// notificar ganadores
		/* 	$ganadores = $Model->Ganadores($hoy);
				
			if(isset($ganadores)){
				foreach ($ganadores as $row){
					$idsubasta = $row->id;
					// enviar mail 
					$email 	 = $row->email;
					$message = 'Felicitaciones!!! Le informamos que Usted es el Ganador en la Subasta: '.$row->titulo.'. El Martillero se comunicara con usted a la brevedad para realizar la entrega.';
					$from 	 = 'validar@validar.com';
					$to 	 = $email;
					$subject = 'Ganador Subasta - '.EMPRESA;
									
					$this->_enviarEmail($message, $from, $to, $subject);
					// enviar mail 			
						
				}
			} */
			// notificar ganadores
		
		
			return $this->respondCreated([]);
		
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
				
	}



	
	/* public function CronJobNotificarGanadores()	
	{
		
		$request = service('request');
		
		try
		{
			$hoyD = new Time('now', 'America/Argentina/Cordoba');
			$hoy  =$hoyD->toDateString();
			
			$Model = new SubastasModel();
			$ganadores = $Model->Ganadores($hoy);
				
			if(isset($ganadores){
				foreach ($ganadores as $row)
				{
					$idsubasta = $row->id;
					// enviar mail 
					$email 	 = $row->email;
					$message = 'Felicitaciones!!! Le informamos que es el Ganador en la Subasta: '.$row->titulo.'. El Martillero se comunicara con usted a la brevedad para realizar la entrega.';
					$from 	 = 'validar@validar.com';
					$to 	 = $email;
					$subject = 'Ganador Subasta - '.EMPRESA;
									
					$this->_enviarEmail($message, $from, $to, $subject);
					// enviar mail 			
						
				}
			}
					
			return $this->respondCreated([]);
		
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
				
	}
 */


	public function cancelar()	
	{
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}

		$request = service('request');
		$idmartilero = 0;
		try
		{
			$campos= get_object_vars(json_decode($request->getBody()));
			$id = $campos['idsubasta'];
			
			/* if($campos['idmartillero']){
				$idmartilero = $campos['idmartilero'];
			}else{
				$idmartilero = $this->usuario['id'];
			} */
			
			
			$Model = new SubastasModel();
			
			$subasta = $Model
			->where('id', $id)
			//->where('idmartillero', $idmartilero)
			->first(); 

			if($subasta){
				
				$subasta = $Model
				->where('id', $id)
				->set(['idestado' => 4])
				->update();
				
				$ModelOferentes = new SubastasOferentesModel();
				
				$oferentes = $ModelOferentes
				->where('idsubasta', $id)
				->set(['activo' => 0])
				->update();

			}
		
			return $this->respondCreated(['msg' => 'Se Cancelo con Exito']);
		
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
			
			$idsubasta = $request->getGet('id');
			
			$model = new SubastasModel();
			$subastas = $model->Stats($idsubasta);
			
			return $this->respondCreated(['msg' => $subastas]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}

	
	public function getSubastar()
	{
		
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
			
			//producto
			$id = $request->getGet('id');
			//$iduser = $request->getGet('user');
			
			$model = new ProductosModel();			
			$producto = $model->where('id', $id)->first();
			
			
			if(isset($producto)){
				$identificador = $producto->identificador;
				$vendedorcuil = $producto->vendedorcuil;
				
				$relacionados = $model->getAllProductsOneImageRelacionados($vendedorcuil, $id);
				
				$modelImages = new ProductosImagenesModel();
				$imagenes = $modelImages->getImagesOfProduct($identificador, 0);
				
				$modelSubastas = new SubastasModel();
				
				$subasta = $modelSubastas
					->where('idproducto', $id)
					->orderBy('id', 'desc')
					->first();
				
				
				// datos martillero 
				
				if(isset($subasta)){
					$modelUser = new UsuariosModel();
					$user = $modelUser->where('id', $subasta->idmartillero)->first();
					
					$dataUser = [
						'nombre' => $user->nombre,
						'apellido' => $user->apellido,
						'cuil' => $user->cuil,
						'matricula' => $user->matricula,
						'url' => $user->url
					];
					
					if($subasta->idestado === "3" || $subasta->idestado === "5"){ // finalizada
						$ganador = $modelSubastas->Ganador($subasta->id);
					}
				
				
					//permiso oferente
					
					if($this->usuario){
						
						$modelOferentes = new SubastasOferentesModel();

						$solicitud = $modelOferentes
						->where('idsubasta', $subasta->id)
						->where('idusuario', $this->usuario['id'])
						->first(); 
										
						if(isset($solicitud)){
							$respuesta = $solicitud->activo;
									
						}else{
							
							$modelUser = new UsuariosModel();
							$userOferente = $modelUser->where('id', $this->usuario['id'])->first();
							
							if($userOferente->idtipousuario === "1"){
								
								$data =[
									'idsubasta'=>$subasta->id,
									'idusuario'=>$this->usuario['id']
								];

								$subastaoferta = $modelOferentes->insert($data);
								
								
								// enviar mail 
								$email = $modelOferentes->emailMartillero($subasta->id);
								$message = 'Tiene un Oferente que requiere su Autorizacion para Ofertar.';
								$from 	 = 'validar@validar.com';
								$to 	 = $email;
								$subject = 'Autorizar Comprador - '.EMPRESA;
									
								$this->_enviarEmail($message, $from, $to, $subject);
								// enviar mail 
							}
						}
					}
			
				}
			}
			
			
			return $this->respondCreated([
			'producto' => $producto, 
			'relacionados' => $relacionados,
			'martillero' => $dataUser,
			'imagenes' => $imagenes, 
			'subasta' => $subasta,
			'ganador' => $ganador,
			'tengopermiso' => $respuesta		
			]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}

	}

	
	public function getSubastarMasivo()
	{
		
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
			
			//producto
			$id = $request->getGet('id');
			//$iduser = $request->getGet('user');
			
			$model = new ProductosModel();			
			$producto = $model->where('id', $id)->first();
			
			
			if(isset($producto)){
				$identificador = $producto->identificador;
				$vendedorcuil = $producto->vendedorcuil;
				
				$relacionados = $model->getAllProductsOneImageRelacionados($vendedorcuil, $id);
				
				$modelImages = new ProductosImagenesModel();
				$imagenes = $modelImages->getImagesOfProduct($identificador, 0);
				
				$modelSubastas = new SubastasModel();
				
				$subasta = $modelSubastas
					->where('idproducto', $id)
					->orderBy('id', 'desc')
					->first();
				
				
				// datos martillero 
				
				if(isset($subasta)){
					$modelUser = new UsuariosModel();
					$user = $modelUser->where('id', $subasta->idmartillero)->first();
					
					$dataUser = [
						'nombre' => $user->nombre,
						'apellido' => $user->apellido,
						'cuil' => $user->cuil,
						'matricula' => $user->matricula,
						'url' => $user->url
					];
					
					if($subasta->idestado === "3" || $subasta->idestado === "5"){ // finalizada
						$ganador = $modelSubastas->Ganador($subasta->id);
					}
				
				
					//permiso oferente
					
					if($this->usuario){
						
						$subastasMasivo = $modelSubastas
						->whereIn('idestado', [1,2])
						->findAll(); 
						
						$modelOferentes = new SubastasOferentesModel();

						
						foreach ($subastasMasivo as $row)
						{
							$idsubasta = $row->id;
							
							$solicitud = $modelOferentes
							->where('idsubasta', $idsubasta)
							->where('idusuario', $this->usuario['id'])
							->first(); 
							
							if(isset($solicitud)){
								$solicitud = get_object_vars($solicitud);
								$respuesta = $solicitud['activo'];
										
							}else{
								
								$data = [
								'idsubasta' 	=> $idsubasta,
								'idusuario'		=> $this->usuario['id']
								];
								
								$subastaof = $modelOferentes->insert($data);
								$respuesta = 0;
								
							}

						}
						
						// enviar mail 
						$email 	 = EMAILADMIN;
						$message = 'Tiene un Oferente que requiere su Autorizacion para Ofertar.';
						$from 	 = 'validar@validar.com';
						$to 	 = $email;
						$subject = 'Autorizar Oferente - '.EMPRESA;
								
						$this->_enviarEmail($message, $from, $to, $subject);
						// enviar mail 			
					
						
					}			
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
			]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		} 

	}

		
	public function index($id)
	{
			
			$model = new ProductosModel();			
			$producto = $model->where('id', $id)->first();
			
			$modelImages = new ProductosImagenesModel();
			$imagenes = $modelImages->getImagesOfProduct($producto->identificador, 0);
			
			$imagen = "";
			
			foreach ($imagenes as $row)
			{
				$imagen = $row->archivo;
			}
			
			$data = [
					'title'   		=> $producto->titulo,
					'description' 	=> $producto->descripcion,
					'image' 		=> $imagen,
					'id'			=>	$id
			];
			
			echo view('subastas', $data);
	}
	

}
