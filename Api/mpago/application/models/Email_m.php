<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Email_m extends CI_Model {
  public function __construct(){parent::__construct();}
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
   function insert_viaje($data) {
        $this->db->insert('viajes_sugeridos', $data);
		return $this->db->insert_id();
    }
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function enviaNotificacionEmail($desde,$para,$asunto,$mensaje){
$nombre='Libreviaje.com';

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