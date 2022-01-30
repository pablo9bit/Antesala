<?php

namespace App\Models;

use CodeIgniter\Model;

class EventosAsistenciasModel extends Model
{
    protected $table = 'EventosAsistencias';

    protected $allowedFields = [
        'idusuario',
        'idEventoCalendario',
        'confirmado'
    ];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';
}
