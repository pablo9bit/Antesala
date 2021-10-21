<?php

namespace App\Controllers;

use CodeIgniter\I18n\Time;
use CodeIgniter\API\ResponseTrait;
use Config\Services;
use App\Models\SubastasOferentesModel;
use App\Models\SubastasModel;

class SubastasOferentes extends BaseTokenController
{
	use ResponseTrait;


	



	public function solicitar()	
	{
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}
		
		$request = service('request');
		
		try
		{
			$campos= get_object_vars(json_decode($request->getBody()));
			
			$model = new SubastasOferentesModel();

			$solicitud = $model
			->where('idproducto', $campos['idproducto'])
			->where('idusuario', $this->usuario['id'])
			->first(); 
			
			$respuesta = 0;
			
			if($solicitud){
				$solicitud = get_object_vars($solicitud);
				$respuesta = $solicitud['activo'];
						
			}else{
				
				$data = [
				'idproducto' 	=> $campos['idproducto'],
				'idusuario'		=> $this->usuario['id']
				];

				$subasta = $model->insert($data);
				
				
				// enviar mail 
				/*
				$message = 'Tiene un Oferente que requiere su Autorizacion para Ofertar.';
				$from 	 = 'validar@validar.com';
				$to 	 = $email;
				$subject = 'Autorizar Oferente - '.EMPRESA;
					
				$this->_enviarEmail($message, $from, $to, $subject);
				*/
				// enviar mail 
			
			}
			
			
			return $this->respondCreated(['msg' => $respuesta ]);
		
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
			
			$idSubastasOferente = $campos['id'];
			
			$model = new SubastasOferentesModel();
			$oferente = $model->where('id', $idSubastasOferente)->first();
			
			if(!$oferente){
				return $this->respondCreated(['msg' => 'Oferente No Existe']);
			}else{
				
				if(isset($campos['activo'])){
					$oferente->activo = $campos['activo'];
					
					if($campos['activo'] === '1'){
					
						$idbien = $oferente->idproducto);
						
						// enviar mail 
						$email	 = $model->emailOferente($idSubastasOferente);
						$message = 'Ha sido Autorizado a Ofertar en la siguiente '.anchor('https://remate54.com/subasta/'.$idbien, 'SUBASTA');
						$from 	 = 'validar@validar.com';
						$to 	 = $email;
						$subject = 'Oferente Autorizado - '.EMPRESA;
							
						$this->_enviarEmail($message, $from, $to, $subject);
						// enviar mail 
					}
				
				}
				
				$model->update($idSubastasOferente, $oferente);
				
				return $this->respondCreated(['msg' => 'Se Realizo con Exito']);
			}

		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}


	public function updateMasivo()
	{
		$request = service('request');
		
		if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}

		try
		{
			$campos= get_object_vars(json_decode($request->getBody()));
			
			$idSubastasOferente = $campos['id'];
			
			$model = new SubastasOferentesModel();
			$oferente = $model->where('id', $idSubastasOferente)->first();
			
			if(!$oferente){
				return $this->respondCreated(['msg' => 'Oferente No Existe']);
			}else{
				
				$idusuario = $oferente->idusuario;

				if(isset($campos['activo'])){
					$oferente->activo = $campos['activo'];
					
					if($campos['activo'] === '1'){
					
						// enviar mail 
						$email	 = $model->emailOferente($idSubastasOferente);
						$message = 'Ha sido Autorizado a Ofertar en '.anchor('https://remate54.com', 'REMATE54');
						$from 	 = 'validar@validar.com';
						$to 	 = $email;
						$subject = 'Oferente Autorizado - '.EMPRESA;
							
						$this->_enviarEmail($message, $from, $to, $subject);
						// enviar mail 
					}
				
				}
				
				$model->where('idusuario',$idusuario )
					  ->set('activo', $campos['activo'])
					  ->update(); 
				
				return $this->respondCreated(['msg' => 'Se Realizo con Exito']);
			}

		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
	}

}
