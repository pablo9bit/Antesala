<?php
namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\UsuariosModel;


class Test extends BaseTokenController 
{

	public function getLink()	
	{  
		$post = [
			"id" => 1,
			"title" =>"producto de prueba",
			"quantity" => 1,
			"currency_id" => "ARS",
			"unit_price" => 33,
			"email_comprador" =>"info@gestionst.com.ar",
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
		$response= str_replace('"',"",$response);

		return $this->respondCreated(['link' => $response]);

	}


}
