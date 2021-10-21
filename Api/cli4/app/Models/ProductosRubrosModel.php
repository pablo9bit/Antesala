<?php namespace App\Models;
use CodeIgniter\Model;
 
class ProductosRubrosModel extends Model
{
    protected $table = 'ProductosRubros';
 
    protected $allowedFields = [
		'rubro',
		'activo',
		];

    protected $primaryKey 		= 'id';
    protected $returnType     	= 'object';
	

}
