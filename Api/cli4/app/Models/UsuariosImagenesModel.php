<?php

namespace App\Models;

use CodeIgniter\Model;

class UsuariosImagenesModel extends Model
{
	protected $table 			= 'UsuariosImagenes';

	protected $allowedFields 	= ['idusuario', 'archivo', 'identificador', 'slider', 'accion'];
	protected $primaryKey 		= 'id';
	protected $returnType     	= 'object';



	public function getImages($idusuario, $identificador, $accion = null)
	{

		if ($accion === 0) {
			$this->set('accion', 0, FALSE);
			$this->where('identificador', $identificador);
			$this->where('idusuario', $idusuario);
			$this->update();
		}

		return $this
			->query('select * from UsuariosImagenes where identificador = "' . $identificador . '"')
			->getResult();
	}


	public function removeImages($idusuario, $identificador)
	{

		$imagenes = $this->getImages($idusuario, $identificador);

		foreach ($imagenes as $row) {
			$id = $row->id;
			$archivo = $row->archivo;

			if (file_exists(WRITEPATH . 'uploads/' . $archivo)) {
				unlink(WRITEPATH . 'uploads/' . $archivo);
			}
		}
		$this->where('identificador', $identificador);
		$this->where('idusuario', $idusuario);
		$this->delete();
	}


	public function updateImages($idusuario,$identificador)
	{

		$imagenes = $this->getImages($idusuario, $identificador);

		foreach ($imagenes as $row) {
			$archivo = $row->archivo;
			$accion = $row->accion;

			if ($accion === '1') {
				if (file_exists(WRITEPATH . 'uploads/' . $archivo)) {
					unlink(WRITEPATH . 'uploads/' . $archivo);
				}
			}
		}
		$this->where('identificador', $identificador);
		$this->where('idusuario', $idusuario);
		$this->where('accion', 1);
		$this->delete();
	}
}
