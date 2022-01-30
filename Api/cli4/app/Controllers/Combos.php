<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;

use App\Models\EventosTipoLiquidacionModel;


class Combos extends BaseController
{
	use ResponseTrait;


	public function getEventosTiposLiquidacion()
	{
		try {
			$model = new EventosTipoLiquidacionModel();
			$items = $model->where('habilitado', 1)->findAll();

			return $this->respondCreated(['tipoliquidacion' => $items]);
		} catch (\Exception $e) {
			return $this->fail(['msg' => $e->getMessage()], 400);
		}
	}
}
