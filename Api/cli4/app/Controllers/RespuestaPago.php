<?php
namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\PagosModel;


class RespuestaPago extends BaseTokenController 
{ 
  

	 
	public function exito()	
	{  
		//ini_set('display_errors', 1); 
		$idPAGOS=htmlspecialchars($_GET["external_reference"]);
		$ESTADO=htmlspecialchars($_GET["collection_status"]);
		
		$model = new PagosModel();
		$model->update($idPAGOS,['idestado' => 1]);
		
		header("Location: https://rematesya.com/mpagoexito/".$idPAGOS);
		die();
		//echo "SE PROCESO SATISFACTORIAMENTE EL PAGO: ".$idPAGOS."<br/> ESTADO:". $ESTADO;
	}

	public function rechazo()	
	{  
		$idPAGOS=htmlspecialchars($_GET["external_reference"]);
		$ESTADO=htmlspecialchars($_GET["collection_status"]);	
		
		$model = new PagosModel();
		$model->update($idPAGOS,['idestado' => 9]);

		header("Location: https://localhost:3000/mpagofallo");
		die();
		//echo "ERROR PROCESAR EL PAGO: ".$idPAGOS."<br/> ESTADO:". $ESTADO;

	}
}
