<?php namespace App\Models;
use CodeIgniter\Model;
 
class SuscripcionesModel extends Model
{
    protected $table = 'Suscripciones';
 
    protected $allowedFields = [
		'email',
		'activo',
		];

    protected $primaryKey 		= 'id';
    protected $returnType     	= 'object';
	
	

}
