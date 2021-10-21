<?php namespace App\Models;
use CodeIgniter\Model;
 
class EventosModel extends Model
{
    protected $table = 'Eventos';
 
    protected $allowedFields = [
		'titulo',
		'descripcion',
		'slug',
		'idestado',
		];

    protected $primaryKey 		= 'id';
    protected $returnType     	= 'object';
	

}
