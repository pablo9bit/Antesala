<?php

namespace App\Models;

use CodeIgniter\Model;

class UsuariosOrganizacionesModel extends Model
{
    protected $table = 'UsuariosOrganizaciones';

    protected $allowedFields = [
        'idusuario',
        'razon_social',
        'logo',
        'descripcionOrg',
        'ubicacion',
        'coordX',
        'coordY',
        'whatsapp',
        'idestado',
        'url',
        'accesibilidad',
        'motivodesactivado'
    ];
    protected $primaryKey = 'id';
    protected $returnType     = 'object';
}
