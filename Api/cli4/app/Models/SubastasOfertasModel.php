<?php namespace App\Models;
use CodeIgniter\Model;
 
class SubastasOfertasModel extends Model
{
    protected $table = 'SubastasOfertas';
 
    protected $allowedFields = ['idproducto','idusuario','valor','fecha', 'idtipooferta'];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';
	
	
	public function getAllUser($iduser=0){
		if($iduser>0){
			$where = ' where SubastasOfertas.idusuario = '.$iduser;
		}else{
			$where = '';
		}
		
		return $this->query('SELECT SubastasOfertas.*, Productos.titulo, Usuarios.nombre, Usuarios.apellido
							FROM `SubastasOfertas`
							inner JOIN Productos on Productos.id = SubastasOfertas.idproducto
							inner join Usuarios on Usuarios.id = SubastasOfertas.idusuario 
							'.$where.' 
							order by SubastasOfertas.fecha DESC ')->getResult();
		
	}

}
