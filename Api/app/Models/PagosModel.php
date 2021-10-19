<?php namespace App\Models;
use CodeIgniter\Model;
 
class PagosModel extends Model
{
    protected $table = 'Pagos';
 
    protected $allowedFields = [
		'idusuario',
		'idproducto',
		'monto',
		'fecha',
		'codigo',
		'idtipopago',
		'imagen',
		'idestado',
		'email',
		'linkpago',
		'estadoplataforma'
		];

    protected $primaryKey 		= 'id';
    protected $returnType     	= 'object';
	
	
	public function getAllPagos($iduser){
		
		if($iduser!== "0"){
			$where = ' where Pagos.idusuario = '.$iduser;
		}else{
			$where = '';
		}
		
		return $this->query('SELECT Pagos.*, Productos.titulo, Usuarios.nombre, Usuarios.apellido, Usuarios.cuil, PagosTipo.tipo 
							FROM `Pagos`
							inner JOIN Productos on Productos.id = Pagos.idproducto
							inner JOIN Usuarios on Usuarios.id = Pagos.idusuario
							inner JOIN PagosTipo on PagosTipo.id = Pagos.idtipopago
		'.$where)->getResult();
	}

}
