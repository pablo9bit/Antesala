<?php

header("Access-Control-Allow-Origin: http://localhost:8100"); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
defined('BASEPATH') OR exit('No direct script access allowed');


   require APPPATH . 'libraries/RestController.php'; 
   require APPPATH . 'libraries/Format.php';

class Api extends RestController{
  
	
	
	
	
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
	
	
	function updateuser2_post()
    {
		/**/
		// Retrieve and decode the posted JSON data
   $posted        = file_get_contents("php://input");
   $obj           =  json_decode($posted);
 
 
 
		 $result = $this->User_m->update( strip_tags($obj->idUSUARIO), array(
            'TELEFONO' => strip_tags($obj->TELEFONO),
			'NRO_DOC' => strip_tags($obj->DNI),
			'FECHA_NAC' => strip_tags($obj->NACIMIENTO),
			'CIUDAD_RESIDENCIA' => strip_tags($obj->LUGAR),
			'NRO_CBU' => strip_tags($obj->CBU),
			'PRESENTACION' => strip_tags($obj->presentacion)            
        ),'usuarios');
        if($result == "NO")
        {
            $this->response($result,400);
        }
         
        else
        {
             $this->response( $result, 200 );

        }
	}
	function adduser_get()
    {
		/*
		$arrayData = array(
        'USUARIO' => (strtolower($this->input->post('exampleInputEmail1'))),
        'NOMBRE' => ucwords(strtolower($this->input->post('exampleInputName'))),
        'APELLIDO' => ucwords(strtolower($this->input->post('exampleInputLastName'))),
		'TELEFONO'=> $telefono,
		'PASSWORD'=> $pass,
		'TOKEN'=> rand(10000000,99999999)
		);
		*/
		$telefono=ucwords(strtolower($this->get('TELEFONO')));
		    $telefono=str_replace(' ', '', $telefono);
			$token=rand(10000000,99999999);
        $result = $this->User_m->insert(  array(
            'USUARIO' => strtolower($this->get('USUARIO')),
            'NOMBRE' => ucwords(strtolower($this->get('NOMBRE'))),
            'APELLIDO' => ucwords(strtolower($this->get('APELLIDO'))),
            'TELEFONO' => $telefono,
            'PASSWORD' => MD5($this->get('PASSWORD')),
			'TIPO_USUARIO' => 'PASAJERO',
            'TOKEN' => $token
        ),'usuarios');
         
        if($result <> true)
        {
            $this->response($result,400);
        }
         
        else
        {
             
			 
			 $mensaje="
Hola ".ucwords(strtolower($this->get('NOMBRE'))).",  ¿Como estás? <br/>
<p>Gracias por registrarte en Libreviaje.com <br/> Para activar tu cuenta, por favor hacé click en el siguiente link.</p>
<h4><a href='".base_url()."registro/activar?TOKEN=".$token."'>Activar cuenta </a></h4>";

			  
$this->Email_m->enviaNotificacionEmail('admin@libreviaje.com',(strtolower($this->get('USUARIO'))),'Registro Libreviaje.com',$mensaje);
        $this->response( $result, 200 );
		}
         
    }
	function updateuser_get()
    {
		
        $result = $this->User_m->update( $this->get('idUSUARIO'), array(
            'NOMBRE' => $this->get('NOMBRE'),
            'USUARIO' => $this->get('USUARIO')
        ),'usuarios');
         
        if($result == "NO")
        {
            $this->response($result,400);
        }
         
        else
        {
             $this->response( $result, 200 );

        }
         
    }
	public function mail_get()
    {
        // Users from a data store e.g. database
       /* $users = [
            ['id' => 0, 'name' => 'John', 'email' => 'john@example.com'],
            ['id' => 1, 'name' => 'Jim', 'email' => 'jim@example.com'],
        ];*/
        
	 	
		$this->db->select();
$this->db->from('usuarios');
$this->db->where('USUARIO',$this->get( 'usuario' ));
$this->db->where('PASSWORD',MD5($this->get( 'password' )));

$consulta = $this->db->get();
 
$users = $consulta->result_array();

 
		
		 if($consulta->num_rows() > 0 )
        { 
//$this->response( $users, 200 );
$this->response( $users, 200 );

        } 
else{$this->response( "USUARIO ".$usuario." NO EXISTE", 404 );}		
         
    }
public function user_get()
    {
        // Users from a data store e.g. database
       /* $users = [
            ['id' => 0, 'name' => 'John', 'email' => 'john@example.com'],
            ['id' => 1, 'name' => 'Jim', 'email' => 'jim@example.com'],
        ];*/
        
		$this->db->select();
$this->db->from('usuarios');
$this->db->where('idUSUARIO',$this->get( 'id' ));

$consulta = $this->db->get();
 
$users = $consulta->result_array();

 
		
		 if($consulta->num_rows() > 0 )
        { 
$this->response( $users[0], 200 );

        } 
else{$this->response( "USUARIO NO EXISTE", 404 );}		
         
    }
    public function users_get()
    {
        // Users from a data store e.g. database
       /* $users = [
            ['id' => 0, 'name' => 'John', 'email' => 'john@example.com'],
            ['id' => 1, 'name' => 'Jim', 'email' => 'jim@example.com'],
        ];*/
        
		$this->db->select();
$this->db->from('usuarios');
$consulta = $this->db->get();
 
$users = $consulta->result_array();

 
		
		$id = $this->get( 'id' );  

        if ( $id === null )
        {
            // Check if the users data store contains users
            if ( $users )
            {
                // Set the response and exit
                $this->response( $users, 200 );
            }
            else
            {
                // Set the response and exit
                $this->response( [
                    'status' => false,
                    'message' => 'No users were found'
                ], 404 );
            }
        }
        else
        {
              $this->response( [
                    'status' => false,
                    'message' => 'No such user found'
                ], 404 ); 
        }
    }
}