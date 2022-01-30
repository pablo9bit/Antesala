<?php

namespace App\Models;

use CodeIgniter\Model;

class EventosCalendarioModel extends Model
{
    protected $table = 'EventosCalendario';

    protected $allowedFields = [
        'idevento',
        'fecha',
        'tipoLiquidacion',
        'lugares'
    ];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';
}
