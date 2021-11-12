<?php

namespace App\Models;

use CodeIgniter\Model;

class UsuariosOrganizacionesModel extends Model
{
    protected $table = 'UsuariosOrganizaciones';

    protected $allowedFields = [
        'idusuario', 'razon_social', 'logo', 'descripcion',
        'ubicacion', 'coordX', 'coordY', 'idestado', 'url', 'motivodesactivado'
    ];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';
}
