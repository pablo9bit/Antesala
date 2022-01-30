<?php

namespace App\Models;

use CodeIgniter\Model;

class EventosModel extends Model
{
    protected $table = 'Eventos';

    protected $allowedFields = [
        'idusuario',
        'titulo',
        'grupo',
        'descripcionCorta',
        'descripcion',
        'atp',
        'presencial',
        'duracion',
        'url',
        'facebook',
        'instagram',
        'claves',
        'habilitado',
    ];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';
}
