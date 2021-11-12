<?php

namespace App\Models;

use CodeIgniter\Model;

class EventosImagenesModel extends Model
{
	protected $table 			= 'EventosImagenes';

	protected $allowedFields 	= ['idevento', 'archivo', 'identificador', 'slider', 'accion'];
	protected $primaryKey 		= 'id';
	protected $returnType     	= 'object';



	public function getImages($idevento, $identificador, $accion = null)
	{

		if ($accion === 0) {
			$this->set('accion', 0, FALSE);
			$this->where('identificador', $identificador);
			$this->where('idevento', $idevento);
			$this->update();
		}

		return $this
			->query('select * from EventosImagenes where identificador = "' . $identificador . '"')
			->getResult();
	}


	public function removeImages($idevento, $identificador)
	{

		$imagenes = $this->getImages($idevento, $identificador);

		foreach ($imagenes as $row) {
			$id = $row->id;
			$archivo = $row->archivo;

			if (file_exists(WRITEPATH . 'uploads/' . $archivo)) {
				unlink(WRITEPATH . 'uploads/' . $archivo);
			}
		}
		$this->where('identificador', $identificador);
		$this->where('idevento', $idevento);
		$this->delete();
	}


	public function updateImages($idevento,$identificador)
	{

		$imagenes = $this->getImages($idevento, $identificador);

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
		$this->where('idevento', $idevento);
		$this->where('accion', 1);
		$this->delete();
	}
}
