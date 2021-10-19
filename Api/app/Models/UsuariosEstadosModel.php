<?php namespace App\Models;
use CodeIgniter\Model;
 
class UsuariosEstadosModel extends Model
{
    protected $table = 'UsuariosEstados';
 
    protected $allowedFields = ['estado','activo'];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';


}
