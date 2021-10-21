<?php
 

class Pagar extends CI_Controller{
  
	 
	function __construct()
    {
        // Construct the parent class
        parent::__construct();
		    $this->load->database();
	  $this->load->library('session');
	  $this->load->helper('url');
	  
	  
		$this->load->model('User_m');
		$this->load->model('Email_m');	 
	      
	   
	  
     
	  
	  
    }
	
	
	public function index(){}
	
	
	public function confirmar(){
  	
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
				  
			 }else{
				throw new Exception("Some errors in MercadoPago's gateway");	 	
			 }
  		
			

			 $this->load->view('pagar', $datos);
			
			
		}catch (Exception $e) {
			//atendemos la excepcion....			
		}
  	}
	
	function test_post()
    {
		/**/
		// Retrieve and decode the posted JSON data
   $posted        = file_get_contents("php://input");
   $obj           =  json_decode($posted);
 
$users=array('location'=>"Rada Tilly, Chubut, Argentina Moyano 870");
  
$this->response( $users, 200 );
        

	}
	
	 
	
	//Uptpedidos
	function uptpedidosrechaza_post()
    {
		/**/
		// Retrieve and decode the posted JSON data
   $posted        = file_get_contents("php://input");
   $obj           =  json_decode($posted);
 
  	 	
	$result = $this->User_m->updatepedidoTodos( $obj->idNEGOCIOS,$obj->idCONDUCTOR, array(
            'ESTADOS_PEDIDOS' => $obj->ESTADOS_PEDIDOS,'idCONDUCTOR' => 0
        ),'PEDIDOS');
		
		
		setlocale(LC_ALL, 'es_RA');
$fecha = strftime("%d-%m-%Y %H:%M:%S");
 
 
		 $result2 = $this->User_m->insert2( array(
            'idNEGOCIOS' => strip_tags($obj->idNEGOCIOS),
			'idCONDUCTOR' => strip_tags($obj->idCONDUCTOR),
			'FECHA_HORA' => $fecha,
			'MENSAJE' => "El comercio rechazó propuesta",
			'ESTADO' => "NO_LEIDA"),'NOTIFICACIONES_CONDUCTOR');
         
        if($result == "NO")
        {
            $this->response($result,400);
        }
         
        else
        {
             
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////            
$asunto="[Rechazaron tu propuesta]";
			 $mensaje="El comercio no acepto tu propuesta.<br/>
			 Para volver a ofertar o buscar otros envios, podés ir a la opcion  [NUEVOS REPARTOS].
			 <br/><br/>			 
			 Cualquier consulta, estamos a tu disposición.<br/><br/>
			 Saludos cordiales<br/><br/>			 
			 <b>Agile delivery</b><br/>Gestionst.com.ar";
			 //REVISAR SI ENVIA EMAIL

 $para=$obj->EMAIL;

$this->User_m->enviaNotificacionEmail($para,$asunto,$mensaje);
        $this->response( $result, 200 );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        }
         
    }
	 
 
 
	
	

 
 

 
 
 
 
 
 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	 
	
	}