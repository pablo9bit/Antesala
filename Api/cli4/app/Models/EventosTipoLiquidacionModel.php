<?php

namespace App\Models;

use CodeIgniter\Model;

class EventosTipoLiquidacionModel extends Model
{
    protected $table = 'EventosTipoLiquidacion';

    protected $allowedFields = [
        'detalle',
        'habilitado',
    ];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';
}
