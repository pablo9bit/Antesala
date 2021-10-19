<?php namespace App\Models;
use CodeIgniter\Model;
 
class SubastasEstadosModel extends Model
{
    protected $table = 'SubastasEstados';
 
    protected $allowedFields = ['estado'];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';


}
