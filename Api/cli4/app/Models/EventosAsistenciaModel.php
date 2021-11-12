<?php

namespace App\Models;

use CodeIgniter\Model;

class EventosAsistenciaModel extends Model
{
    protected $table = 'EventosAsistencia';

    protected $allowedFields = [
        'idusuario', 'idevento', 'confirmado'
    ];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';
}
