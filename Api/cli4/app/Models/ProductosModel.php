<?php namespace App\Models;
use CodeIgniter\Model;
 
class ProductosModel extends Model
{
    protected $table = 'Productos';
 
    protected $allowedFields = ['titulo','descripcion','idcategoria', 'idrubro','idusuario','idestado', 'identificador','valor', 'vendedor', 
	'vendedorcuil', 'vendedorurl', 'urlvideo', 'idrubro', 'fechaInicio', 'fechaFin', 'base', 'posturaMinima', 'Moneda'];
	
    protected $primaryKey = 'id';
    protected $returnType     = 'object';


	public function getAllProductsOneImage($iduser){
		if($iduser>0){
			$where = ' where P.idusuario = '.$iduser;
		}else{
			$where = '';
		}
		
		return $this->query('select P.*, PI.archivo
		from Productos P 
		left join 
		(SELECT id, identificador, archivo FROM `ProductosImagenes` GROUP By identificador) as PI on P.identificador = PI.identificador 
		left join Subastas S on P.id = S.idproducto 
		'.$where)->getResult();
		//and S.idestado in (1, 2)
	}
	
	public function getAllProductsOneImagePaginado($pagina, $texto){
		
		$totalporPagina = 100;

		if ($pagina === 1) {
			$inicio = 0;
		}
		else {
			$inicio = ($pagina - 1) * $totalporPagina;
		}
	

		$query = 'select P.*,  PI.archivo
		from Productos P 
		left join 
		(SELECT id, identificador, archivo FROM `ProductosImagenes` GROUP By identificador) as PI on P.identificador = PI.identificador 
		where P.titulo like "%'.$texto.'%" ' ;

		$totalRegistros = count($this->query($query)->getResult());
		$totalPaginas = ceil($totalRegistros / $totalporPagina);

		$productos = $this->query($query.' limit '.$inicio.', '.$totalporPagina.' ')->getResult();
		
	
		$data=[
				'productos' => $productos, 
				'registros' => $totalRegistros,
				'paginas'	=> $totalPaginas,
				'pagina' 	=> (int)$pagina,
			];

		return $data;
		
	}
	
	public function getAllProductsOneImageRelacionados($cuil, $id){
		
		$query = 'select P.id, P.titulo, P.valor, PI.archivo, P.idusuario , P.vendedor, P.vendedorcuil, S.idestado as estadoSubasta, S.fechafin, S.base, ST.maxvalor
		from Productos P 
		inner join 
		(SELECT id, identificador, archivo FROM `ProductosImagenes` GROUP By identificador) as PI on P.identificador = PI.identificador
		inner join Subastas S on P.id = S.idproducto and S.idestado in (1, 2, 3)
		left join 
		(select max(valor) as maxvalor, idsubasta from SubastasOfertas GROUP by idsubasta) as ST on S.id = ST.idsubasta 
		where P.vendedorcuil = "'.$cuil.'" and P.idcategoria = 2 and P.id <> '.$id;

		$productos = $this->query($query)->getResult();

		return $productos;
		
	}
	
	
	public function Stats($id){
	
		$base = 0;
		
		$totaloferentes = $this->query('select count(idusuario) as usuarios
										from SubastasOferentes 
										where activo = 1 and idproducto = '.$id)->getRow();
		
		$maxvalorOfertas = $this->query('select max(SubastasOfertas.valor) as maxvalor, Moneda 
										from SubastasOfertas 
										inner join Productos on SubastasOfertas.idproducto = Productos.id where idproducto = '.$id)->getRow();
		
		$maxvalorSubasta = $this->query('select base as maxvalor from Productos where id = '.$id)->getRow();
		
		$data = [
				'totaloferentes'	=> $totaloferentes->usuarios,
				'maxvalor' 			=> $maxvalorOfertas->maxvalor === null ? $maxvalorSubasta->maxvalor : $maxvalorOfertas->maxvalor,
				'moneda'			=> $maxvalorOfertas->Moneda,
			];
			
		return $data;

	}
	
	
	public function SubastasResumen(){
	
		$query = 'SELECT * 
					FROM `Productos`
					left join (
						select max(valor) as maxvalor, idproducto
						from SubastasOfertas 
					) as so on so.idproducto = Productos.id
					left join (
						select max(monto) as totalpagado, idproducto
						from Pagos 
					) as pa on pa.idproducto = Productos.id';
	
		$productos = $this->query($query)->getResult();

		return $productos;
	

	}
	
	
	public function Ganadores($fechaCierre){
		
		$ganadores = $this->query('SELECT U.nombre, U.apellido, U.email, U.id, O.valorfinal, P.titulo, P.id  
							FROM Usuarios U
							INNER JOIN
							(
							
							SELECT max(So.valor) as valorfinal, So.idusuario, Su.id as idproducto
							FROM `SubastasOfertas` So
							INNER JOIN Productos Su on So.idproducto = Su.id and Su.idestado = 3 and Su.fechaFin = "'.$fechaCierre.'"
							GROUP BY So.idusuario, Su.id
							
							) O on U.id = O.idusuario
							INNER JOIN Productos P on O.idproducto = P.id
							
							')->getResult();

		return $ganadores;

	}



}
