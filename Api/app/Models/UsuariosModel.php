<?php namespace App\Models;
use CodeIgniter\Model;
 
class UsuariosModel extends Model
{
    protected $table = 'Usuarios';
 
    protected $allowedFields 	= ['nombre','email','idestado','password','apellido', 'cuil', 'direccion', 'telefono', 'code', 'idtipousuario', 'matricula', 'imagen', 'aprobado', 'codePassword', 'url', 'motivodesactivado'];
	
    protected $primaryKey 		= 'id';
    protected $returnType     	= 'object';
	
	
	public function getUserExist($email, $cuil, $iduser=0){
		if($iduser>0){
			$where = ' where id = '.$iduser;
		}else{
			$where = ' where email ="'.$email.'" or cuil="'.$cuil.'"';
		}
		
		return $this->query('select * from Usuarios '.$where)->getResult();
		
	}
	
	public function getAllUsers($idtipousuario){
		if($idtipousuario>0){
			$where = ' where idtipousuario = '.$idtipousuario.' and idestado = 2';
		}else{
			$where = '';
		}
		
		$select = 'id, nombre,apellido, telefono, email, cuil, direccion, idestado, fecha, matricula, imagen, aprobado';
		
		return $this->query('select '.$select.' from Usuarios '.$where)->getResult();
		
	}

}
