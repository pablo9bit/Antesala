<?php namespace App\Models;
use CodeIgniter\Model;
 
class ProductosImagenesModel extends Model
{
    protected $table 			= 'ProductosImagenes';
 
    protected $allowedFields 	= ['archivo','identificador', 'accion'];
    protected $primaryKey 		= 'id';
    protected $returnType     	= 'object';



	public function getImagesOfProduct($identificador, $accion=null){
		
		if($accion === 0){
			$this->set('accion', 0, FALSE);
			$this->where('identificador', $identificador);
			$this->update(); 
		}
		
		return $this->query('select * from ProductosImagenes where identificador = "'.$identificador.'"')->getResult();
	}



	public function removeImagesOfProduct($identificador){
	
		$imagenes = $this->getImagesOfProduct($identificador);

		foreach ($imagenes as $row){
				$id = $row->id;
				$archivo = $row->archivo;
				
				if(file_exists(WRITEPATH.'uploads/'.$archivo)){
					unlink(WRITEPATH.'uploads/'.$archivo);
				}
			}
			$this->where('identificador', $identificador);
			$this->delete(); 
	}
	

	public function updateImagesOfProduct($identificador){
	
		$imagenes = $this->getImagesOfProduct($identificador);

	 	foreach ($imagenes as $row){
				$archivo = $row->archivo;
				$accion = $row->accion;
				
				if($accion === '1'){
				 	if(file_exists(WRITEPATH.'uploads/'.$archivo)){
						unlink(WRITEPATH.'uploads/'.$archivo);
					} 	
				}
			} 
			$this->where('identificador', $identificador);
			$this->where('accion', 1);
			$this->delete(); 
	}

}
