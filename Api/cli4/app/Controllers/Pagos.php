<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\PagosModel;


class Pagos extends BaseTokenController
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
					
			$idproducto = $request->getPost('idproducto');
			$monto 		= $request->getPost('monto');
			$codigo 	= $request->getPost('codigo');
			$idtipopago = $request->getPost('idtipopago');
			$email = $request->getPost('email');

			$link = "";
			$idpago = "";
			
			$model = new PagosModel();
			$obj = $model
						->where('idusuario', $this->usuario['id'])
						->where('idproducto', $idproducto)
						->first();
			
			
			if (!$obj) {
			
				$img = $this->request->getFile('archivo');
				$newName = "";
				
				if($idtipopago==="1"){ //transferencia
					if ($img->isValid() && ! $img->hasMoved())
					{
					   $newName = $img->getRandomName();
					   $img->move(WRITEPATH.'uploads/pagos', $newName);
					} 
				}
			
				$data = [
					'idusuario'		=> $this->usuario['id'],
					'email'			=> $email,
					'idproducto' 	=> $idproducto,
					'monto'			=> $monto,
					'idestado'		=> "0",
					'codigo'		=> $codigo,
					'idtipopago'	=> $idtipopago,
					'imagen'		=> $newName,
				];
			
				$obj = $model->insert($data);
				$idpago = $obj;	
				
				if($idtipopago==="2"){ //mercadopago
					$post = [
						"id" => $obj,
						"title" =>"Permiso de Oferta",
						"quantity" => 1,
						"currency_id" => "ARS",
						"unit_price" => $monto,
						"email_comprador" => $email,
						"url_exito" =>"https://rematesya.com/Api/public/RespuestaPago/exito",
						"url_error" =>"https://rematesya.com/Api/public/RespuestaPago/rechazo"
						
					];

					$post=json_encode($post);
					$ch = curl_init('https://rematesya.com/mpago/index.php/Api2/linkMpago');
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
					curl_setopt($ch, CURLOPT_POSTFIELDS, $post);

					// ejecuta post
					$response = curl_exec($ch);  

					// cierra conexion
					curl_close($ch);

					// devuelve link MPAGO. 
					$response= str_replace("https:\/\/www.mercadopago.com.ar\/checkout\/v1\/","",$response);
					$link= str_replace('"',"",$response);
					
					
					$model->update($idpago,['linkpago' => $link]);
					
				}else{
					$link = "";
				}
				
					
				return $this->respondCreated(['msg' => 'Se registro el Pago', 
												'idpago' => $idpago,
												'link' => $link]);
			
			} else {
				$link = $obj->linkpago;
				return $this->fail(['msg' => 'El Pago ya Existe', 
												'idpago' => $obj->id,
												'idestado' => $obj->idestado,
												'link' => $link],400);
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
			$idestado = $request->getPost('idestado');
			$id = $request->getPost('id');

			
			$model = new PagosModel();
			$obj = $model
					->where('id', $id)->first();			
			
			if(!$obj){
				return $this->respondCreated(['msg' => 'Pago No Existe'.$id]);
			}else{
				
				if(isset($idestado)){
					$obj->idestado = $idestado;
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
			$model = new PagosModel();
			$obj = $model->getAllPagos("0");
			return $this->respondCreated(['pagos' => $obj]);
			
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
		
		$id = $request->getGet('id');

		try
		{
			$model = new PagosModel();
			$obj = $model->getAllPagos($id ? $id : $this->usuario['id']);
			
			return $this->respondCreated(['pagos' => $obj]);
			
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
			
			$model = new Pagos();
			$obj = $model->where('id', $id)->first();
			
			
			if(!$obj){
				return $this->respondCreated(['msg' => 'Pago No Existe']);
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


	public function getEstadoPago()
	{
		$token = 'APP_USR-8707972109259025-052813-66bf627df6502bb8fa2e4b1c4dc6926d-747843523';
		$request = service('request');
			
	 	if(!$this->usuario){
			return $this->fail(['msg' => '0'],400);
		}  
		
		try
		{
			$idproducto = $request->getGet('idproducto');
			$idusuario = $this->usuario['id'];
			
			$resultadoPlataforma = null;
			
			$model = new PagosModel();
			$obj = $model
						->selectMax('Pagos.id', 'id')
						->select(['idtipopago', 'idestado', 'PagosEstado.estado', 'estadoplataforma'])
						->join('PagosEstado', 'PagosEstado.id = Pagos.idestado')
						->where('idusuario', $idusuario)
						->where('idproducto', $idproducto)
						->first(); 
			 
			if($obj){ 
				if($obj->idtipopago ==="2" && $obj->idestado === "0"){ //mercadopago

					$ch = curl_init();
					curl_setopt($ch, CURLOPT_URL, 'https://api.mercadopago.com/v1/payments/search?access_token='.$token.'&external_reference='.$obj->id); 
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
					curl_setopt($ch, CURLOPT_HEADER, 0); 
					$data = curl_exec($ch); 
					curl_close($ch); 
					$resultado = get_object_vars(json_decode($data));
					$resultadoPlataforma = $resultado['results'][0];
					
					$idestado = 0;
								
					switch ($resultado['results'][0]->status) {
						case "approved":
							$idestado = 1;
							break;
						case "cancelled":
							$idestado = 9;
							break;
					}
					
					$data = [
							'estadoplataforma'=> $resultado['results'][0]->status.' ('.$resultado['results'][0]->status_detail.')',
							'idestado' => $idestado
							];
					
					$model->update($obj->id, $data);
					
					$obj = $model
						->selectMax('Pagos.id', 'id')
						->select(['idtipopago', 'idestado', 'PagosEstado.estado', 'estadoplataforma'])
						->join('PagosEstado', 'PagosEstado.id = Pagos.idestado')
						->where('idusuario', $idusuario)
						->where('idproducto', $idproducto)
						->first(); 
				} 
			}
			
			return $this->respondCreated([ 'detalle'=> $obj ]);
			
		}
		catch (\Exception $e)
		{
			return $this->fail(['msg' => $e->getMessage()],400);
		}
		
	}
	
}