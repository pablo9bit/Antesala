<?php

namespace App\Models;

use CodeIgniter\Model;

class UsuariosModel extends Model
{
	protected $table = 'Usuarios';

	protected $allowedFields 	= [
		'uid', 'nombre', 'apellido', 'telefono', 'email', 'direccion', 'idestado', 'password',
		'code', 'codePassword', 'fecha', 'idtipousuario',
		'imagen',  'motivodesactivado'
	];

	protected $primaryKey 		= 'id';
	protected $returnType     	= 'object';


	public function getUserExist($email, $cuil, $iduser = 0)
	{
		if ($iduser > 0) {
			$where = ' where id = ' . $iduser;
		} else {
			$where = ' where email ="' . $email . '" or cuil="' . $cuil . '"';
		}

		return $this->query('select * from Usuarios ' . $where)->getResult();
	}

	public function getAllUsers($idtipousuario)
	{
		if ($idtipousuario > 0) {
			$where = ' where idtipousuario = ' . $idtipousuario . ' and idestado = 2';
		} else {
			$where = '';
		}

		$select = 'id,uid, nombre, apellido, telefono, email, direccion, idestado, fecha, idtipousuario, imagen,  motivodesactivado';

		return $this->query('select ' . $select . ' from Usuarios ' . $where)->getResult();
	}
}
