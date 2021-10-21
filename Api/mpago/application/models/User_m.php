<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User_m extends CI_Model {
  public function __construct(){parent::__construct();
  
   
   }    
 
	 
	 public function insert2($data,$base)
    {
		 $this->db->insert($base, $data);
                
		 if ($this->db->affected_rows()>=1){
   return "SI"; 
}else {
   return "NO"; 
}
   
}
	 
	 
	 
	 public function update($id,$data,$base)
    {
		$this->db->where('idUSUARIO', $id);
                $this->db->update($base, $data);
		 if ($this->db->affected_rows()>=1){
   return "SI"; 
}else {
   return "NO"; 
}
   
}


public function updatepedidoTodos($idNegocio,$idConductor,$data,$base)
    {
		$this->db->where('ESTADOS_PEDIDOS', 'TOMADO');
		$this->db->where('idNEGOCIOS', $idNegocio);
		$this->db->where('idCONDUCTOR', $idConductor);
                $this->db->update($base, $data);
		 if ($this->db->affected_rows()>=1){
   return "SI"; 
}else {
   return "NO"; 
}
   
}
public function updatepedido($id,$data,$base)
    {
		$this->db->where('idPEDIDOS', $id);
                $this->db->update($base, $data);
		 if ($this->db->affected_rows()>=1){
   return "SI"; 
}else {
   return "NO"; 
}
   
}

public function updategenerico($where,$id,$data,$base)
    {
		$this->db->where($where, $id);
                $this->db->update($base, $data);
		 if ($this->db->affected_rows()>=1){
   return "SI"; 
}else {
   return "NO"; 
}
   
}

 function insert($data,$base){
		$db_debug = $this->db->db_debug; //save setting

$this->db->db_debug = FALSE; //disable debugging for queries
		$datos=$this->db->insert($base, $data);
 		 
		if ($this->db->affected_rows()>=1){
			
   return $datos; 
}else {
   return false;  
}
		
				
	}	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function enviaNotificacionEmail($para,$asunto,$mensaje){
$nombre='Agile Delivery';
$desde='admin@libreviaje.com';
@$this->load->library('email');
@$mail_config['smtp_host'] = 'mail.libreviaje.com';
@$mail_config['smtp_port'] = '587';
@$mail_config['smtp_user'] = 'admin@libreviaje.com';
@$mail_config['smtp_pass'] = 'Marcos30700971';
//$mail_config['smtp_crypto'] = 'tls'; //FIXED
@$mail_config['protocol'] = 'smtp'; //FIXED
@$mail_config['mailtype'] = 'html'; //FIXED
@$mail_config['charset'] = 'utf-8';
@$mail_config['newline'] = '\r\n';
@$this->email->initialize($mail_config);	   
@$this->email->from($desde,$nombre);
@$this->email->to($para);
@$this->email->subject($asunto);
@$this->email->message($mensaje);	
@$this->email->send();	
}	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
	
	 
	}
?>