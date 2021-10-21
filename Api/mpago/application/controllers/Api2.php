<?php defined('BASEPATH') OR exit('No direct script access allowed');
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');



   @require APPPATH . 'libraries/RestController.php'; 
   @require APPPATH . 'libraries/Format.php';

class Api2 extends RestController{
  
	
	
	
	
	function __construct()
    {
        // Construct the parent class
        parent::__construct();
		 $this->load->database();
		 $this->load->library('Session'); //agregue para el login
		$this->load->helper('url'); //agregue para el login
		$this->load->model('User_m');
		$this->load->model('Email_m');
    }
	
	
	function linkMpago_post()
    {
		/**/
		// Retrieve and decode the posted JSON data
   $posted        = file_get_contents("php://input");
   $obj           =  json_decode($posted);
 
 
 
 
 
 try{ 
  			
  			//load order
  			$this->load->library('Mercadopago');
  			
  			
  			///Here some data ex: validateion, addOrder to database, mailsend...

  		 
			
			//items basket
  			$products_mp = array();
			
			
			 
				
				$products_mp[] = array(
										"id" => $obj->id,	
										"title" =>$obj->title,
										"quantity" => $obj->quantity,
										"currency_id" => "ARS",
										"unit_price" => $obj->unit_price 
									);
					
				
			 
				
				
			//options to SDK mercadopago....
			$preference_data = array(
						"payer_email" => $obj->email_comprador,
						"external_reference" => $obj->id,
						"back_urls"=> array (
											"success"=> $obj->url_exito,
											"failure"=>  $obj->url_error
									),						
						"items" => $products_mp,
						 
						"auto_return"=>"approved",
						
									
					);
							
			 $preference = $this->mercadopago->create_preference($preference_data);
					
			 
			 if(isset($preference->init_point)){
				 //link pay gateway MP
				 $datos['MP_link_pay'] = $preference->init_point;
				 
				 //$this->response( $preference->init_point, 200 );
				 
				 $VARIABLE=$preference->init_point; 
				 $this->response( $VARIABLE, 200 );
				  
			 }else{
				throw new Exception("Some errors in MercadoPago's gateway");	 	
			 }
  		
			 
		}catch (Exception $e) {
			//atendemos la excepcion....			
		} 

	} 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
function test_get()
    {
		/**/
		// Retrieve and decode the posted JSON data
   $posted        = file_get_contents("php://input");
   $obj           =  json_decode($posted);
 
$users=array('location'=>"Rada Tilly, Chubut, Argentina Moyano 870");
  
$this->response( $users, 200 );
        

	}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
public function confirmar_post(){
	
	/**/
		// Retrieve and decode the posted JSON data
   $posted        = file_get_contents("php://input");
   $obj           =  json_decode($posted);
 
  	
  		try{ 
  			
  			//load order
  			$this->load->library('Mercadopago');
  			
  			
  			///Here some data ex: validateion, addOrder to database, mailsend...

  		 
			
			//items basket
  			$products_mp = array();
			
			
			 
				
				$products_mp[] = array(
										"id" => 1,	
										"title" =>"Delivery",
										"quantity" => 1,
										"currency_id" => "ARS",
										"unit_price" => 100 
									);
					
				
			 
				
				
			//options to SDK mercadopago....
			$preference_data = array(
						"payer_email" => "payer@email.com",
						"external_reference" => "Bla bla",
						"back_urls"=> array (
											"success"=> "http://example.com/",
											"failure"=> "http://example.com/"
									),						
						"items" => $products_mp,
						 
						"auto_return"=>"approved",
						
									
					);
							
			 $preference = $this->mercadopago->create_preference($preference_data);
					
			 
			 if(isset($preference->init_point)){
				 //link pay gateway MP
				 $datos['MP_link_pay'] = $preference->init_point;
				 
				 //$this->response( $preference->init_point, 200 );
				 
				 $VARIABLE=$obj->DESTINO.$obj->COSTO_ENVIO.$obj->COSTO_PRODUCTO.$obj->PRODUCTO.$obj->idCLIENTES;
				 $this->response( $VARIABLE, 200 );
				  
			 }else{
				throw new Exception("Some errors in MercadoPago's gateway");	 	
			 }
  		
			

			 //$this->load->view('pagar', $datos);
			
			
		}catch (Exception $e) {
			//atendemos la excepcion....			
		}
  	}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getClientes_post()
    {
		/**/
		// Retrieve and decode the posted JSON data
   $posted        = file_get_contents("php://input");
   $obj           =  json_decode($posted);
 


// $db->query("SELECT * FROM users;"); 
$query="SELECT * FROM CLIENTES WHERE idNEGOCIOS=".$obj->idNEGOCIOS;

  
$consulta = $this->db->query($query); 
$users = $consulta->result_array();
 
		
		 if($consulta->num_rows() > 0 )
        { 
$this->response( $users, 200 );
        } 
 		
         
    }
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
function addclientes_post()
    {
		/*$obj->PRODUCTOS*/
		// Retrieve and decode the posted JSON data
   $posted        = file_get_contents("php://input");
   $obj           =  json_decode($posted); 
 
 
		 $result = $this->User_m->insert2( array(
            'TIPO_PRODUCTO' => strip_tags($obj->PRODUCTOS),
			'DESTINO' => strip_tags($obj->DESTINO),
			'ESTADOS_PEDIDOS' => "NUEVO",
			'FECHA' => strip_tags($obj->FECHA),
			'KILOS' => strip_tags($obj->PESO),
			'ANCHO' => strip_tags($obj->ANCHO),
			'LARGO' => strip_tags($obj->LARGO),
			'PROFUNDIDAD' => strip_tags($obj->PROFUNDIDAD),
			'idNEGOCIOS' => strip_tags($obj->idNEGOCIOS)            
        ),'CLIENTES');
		
		 
        if($result == "NO")
        {
            $this->response($result,400);
        }
         
        else
        {             
			 $this->response( $result, 200 );
        }
         
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		 
	
	}