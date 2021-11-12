<?php

namespace App\Models;

use CodeIgniter\Model;

class EventosModel extends Model
{
    protected $table = 'Eventos';

    protected $allowedFields = [
        'idusuario', 'titulo', 'descripcion', 'fecha',
        'hora', 'lugares', 'claves'
    ];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';
}
