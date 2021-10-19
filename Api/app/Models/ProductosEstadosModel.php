<?php namespace App\Models;
use CodeIgniter\Model;
 
class ProductosEstadosModel extends Model
{
    protected $table = 'ProductosEstados';
 
    protected $allowedFields = ['estado','activo'];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';


}
