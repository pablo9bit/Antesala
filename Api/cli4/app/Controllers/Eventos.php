<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\EventosModel;
use App\Models\EventosAsistenciasModel;
use App\Models\EventosCalendarioModel;
use App\Models\EventosEntradasModel;
use App\Models\EventosImagenesModel;
use App\Models\EventosTipoLiquidacionModel;


class Eventos extends BaseController
{
	use ResponseTrait;


	public function add()
	{

		$request = service('request');

		if (!$this->usuario) {
			return $this->fail(['msg' => '0'], 400);
		}

		try {

			$campos = get_object_vars(json_decode($request->getBody()));
			$id = $this->usuario['id'];

			$model = new EventosModel();
			$evento = $model->where('id', $id)->first();

			if (!$evento) {

				$data = [
					'idusuario'			=> $id,
					'titulo' 			=> $campos['titulo'],
					'grupo'		 		=> $campos['grupo'],
					'descripcion'		=> $campos['descripcion'],
					'descripcionCorta'  => $campos['descripcionCorta'],
					'atp' 				=> $campos['atp'],
					'presencial' 		=> $campos['presencial'],
					'duracion'			=> $campos['duracion'],
					'url'				=> $campos['url'],
					'facebook'			=> $campos['facebook'],
					'instagram'			=> $campos['instagram'],
					'claves'			=> $campos['claves'],
					'habilitado'		=> $campos['habilitado'],
				];

				$evento->insert($data);
				return $this->respondCreated(['msg' => 'Su Evento se Creo con Exito']);
			}
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}

	public function update()
	{

		$request = service('request');

		if (!$this->usuario) {
			return $this->fail(['msg' => '0'], 400);
		}

		try {

			$campos = get_object_vars(json_decode($request->getBody()));
			$id = $this->usuario['id'];
			$idevento = $request->getGet('idevento');


			$model = new EventosModel();
			$evento = $model->where('id', $idevento)->first();

			if (!$evento) {

				$data = [
					'idusuario'			=> $id,
					'titulo' 			=> $campos['titulo'],
					'grupo'		 		=> $campos['grupo'],
					'descripcion'		=> $campos['descripcion'],
					'descripcionCorta'  => $campos['descripcionCorta'],
					'atp' 				=> $campos['atp'],
					'presencial' 		=> $campos['presencial'],
					'duracion'			=> $campos['duracion'],
					'url'				=> $campos['url'],
					'facebook'			=> $campos['facebook'],
					'instagram'			=> $campos['instagram'],
					'claves'			=> $campos['claves'],
					'habilitado'		=> $campos['habilitado'],
				];

				$model
					->set($data)
					->where('id', $idevento)
					->update();

				return $this->respondCreated(['msg' => 'Su Evento se Modifico con Exito']);
			}
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}

	public function cambiarEstadoEvento()
	{

		$request = service('request');

		if (!$this->usuario) {
			return $this->fail(['msg' => '0'], 400);
		}

		try {

			$campos = get_object_vars(json_decode($request->getBody()));
			$id = $campos['id'];

			$model = new EventosModel();
			$evento = $model->where('id', $id)->first();

			if ($evento) {

				$data = [
					'habilitado'	=> $campos['habilitado'],
				];

				$model
					->set($data)
					->where('id', $id)
					->update();
			} else {

				return $this->respondCreated(['msg' => 'El Evento no existe']);
			}
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}

	public function getAll()
	{
		$request = service('request');

		if (!$this->usuario) {
			return $this->fail(['msg' => '0'], 400);
		}

		try {
			$texto = $request->getGet('texto');

			$model = new EventosModel();

			if (!empty($texto)) {
				$like = ' and (titulo like "%' . $texto . '%" or grupo like "%' . $texto . '% or descripcionCorta like "%' .
					$texto . '% or UsuariosOrganizaciones.razon_social like "%' . $texto . '%)';
			} else {
				$like = '';
			}

			$filtrado = $model->Where('Eventos.id > 0 ' . $like)
				->Select([
					`id`, `idusuario`, `titulo`, `grupo`, `descripcionCorta`, `descripcion`, `atp`, `presencial`, `duracion`, `url`, `facebook`, `instagram`, `claves`, `habilitado`,
					`razon_social`, `logo`, `descripcionOrg`, `ubicacion`, `coordX`, `coordY`, `whatsapp`, `idestado`, `url`, `accesibilidad`,
					`nombre`, `apellido`, `telefono`, `email`, `direccion`, `idestado`, `fecha`, `idtipousuario`, `imagen`, `motivodesactivado`
				])
				->join('Usuarios', 'Eventos.idusuario = Usuarios.id', 'left')
				->join('UsuariosOrganizaciones', 'UsuariosOrganizaciones.idusuario = Usuarios.id', 'left')
				->join('UsuariosEstados', 'UsuariosEstados.id = Usuarios.idestado')
				->findAll();

			$modelImages = new EventosImagenesModel();
			foreach ($filtrado as $row) {
				$imagenes = $modelImages
					->select(['id',  'idevento',  'archivo', 'slider', 'identificador', 'accion', 'id as idtemp'])
					->where('idevento', $row->id)
					->findAll();
				$row->imagenes = $imagenes;
			}

			$modelCalendario = new EventosCalendarioModel();
			foreach ($filtrado as $row) {
				$calendario = $modelCalendario
					->select([
						'EventosCalendario.*', 'EventosTipoLiquidacion.detalle'
					])
					->where('idevento', $row->id)
					->join('EventosTipoLiquidacion', 'EventosTipoLiquidacion.id = EventosCalendario.tipoLiquidacion')
					->findAll();
				$row->calendario = $calendario;
			}

			return $this->respondCreated(['msg' => '', 'eventos' => $filtrado]);
		} catch (\Exception $e) {
			return $this->fail(['type' => 'error', 'msg' => $e->getMessage()], 400);
		}
	}

	public function get()
	{

		$request = service('request');

		if (!$this->usuario) {
			return $this->fail(['msg' => '0'], 400);
		}

		try {

			$id = $request->getGet('idevento');

			$model = new EventosModel();
			$evento = $model
				->Select([
					`id`, `idusuario`, `titulo`, `grupo`, `descripcionCorta`, `descripcion`, `atp`, `presencial`, `duracion`, `url`, `facebook`, `instagram`, `claves`, `habilitado`,
					`razon_social`, `logo`, `descripcionOrg`, `ubicacion`, `coordX`, `coordY`, `whatsapp`, `idestado`, `url`, `accesibilidad`,
					`nombre`, `apellido`, `telefono`, `email`, `direccion`, `idestado`, `fecha`, `idtipousuario`, `imagen`, `motivodesactivado`
				])
				->join('Usuarios', 'Eventos.idusuario = Usuarios.id', 'left')
				->join('UsuariosOrganizaciones', 'UsuariosOrganizaciones.idusuario = Usuarios.id', 'left')
				->join('UsuariosEstados', 'UsuariosEstados.id = Usuarios.idestado')
				->where('Eventos.id', $id)->first();

			$modelImages = new EventosImagenesModel();

			$imagenes = $modelImages
				->select(['id',  'idevento',  'archivo', 'slider', 'identificador', 'accion', 'id as idtemp'])
				->where('idevento', $id)
				->findAll();
			$evento->imagenes = $imagenes;



			return $this->respondCreated(['evento' => $evento, 'msg' => '']);
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}
}
