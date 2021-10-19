<?php namespace App\Models;
use CodeIgniter\Model;
 
class SubastasOferentesModel extends Model
{
    protected $table = 'SubastasOferentes';
 
    protected $allowedFields = ['idproducto','idusuario','activo','fecha'];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';
	
	
	public function emailOferente($idsubastaOferente){
			
		$oferente = $this->query('SELECT Usuarios.email FROM SubastasOferentes
		inner JOIN Usuarios on Usuarios.id = SubastasOferentes.idusuario and SubastasOferentes.id = '.$idsubastaOferente)->getRow();
				
		return $oferente->email;

	}
	
	

}
