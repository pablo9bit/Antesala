<?php

namespace App\Models;

use CodeIgniter\Model;

class UsuariosOpcionesCobrosModel extends Model
{
    protected $table = 'UsuariosOpcionesCobros';

    protected $allowedFields = [
        'idusuario',
        'situacionFiscal',
        'CBU',
        'CUIL',
        'estado'
    ];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';
}
