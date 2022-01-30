<?php

namespace App\Models;

use CodeIgniter\Model;

class EventosEntradasModel extends Model
{
    protected $table = 'EventosEntradas';

    protected $allowedFields = [
        'idevento',
        'idcalendario',
        'denominacion',
        'tipo',
        'cantidad',
        'precio',
        'habilitarDesde',
    ];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';
}
