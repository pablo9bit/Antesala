<?php namespace App\Models;
use CodeIgniter\Model;
 
class ProductosCategoriasModel extends Model
{
    protected $table = 'ProductosCategorias';
 
    protected $allowedFields = ['categoria','activo'];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';


}
