<?php namespace App\Models;
use CodeIgniter\Model;
 
class SubastasModel extends Model
{
    protected $table = 'Subastas';
 
    protected $allowedFields 	= ['idproducto','fechafin', 'fechainicio', 'idestado','fecha','idmartillero', 'base', 'mincuota', 'idevento'];
    protected $primaryKey 		= 'id';
    protected $returnType     	= 'object';


	public function Stats($id){
	
		$base = 0;
		
		$totaloferentes = $this->query('select count(idusuario) as usuarios
		from SubastasOferentes 
		where activo = 1 and idsubasta = '.$id)->getRow();
		
		$maxvalorOfertas = $this->query('select max(valor) as maxvalor
		from SubastasOfertas where idsubasta = '.$id)->getRow();
		
		$maxvalorSubasta = $this->query('select base as maxvalor from Subastas where id = '.$id)->getRow();
		
		$data = [
				'totaloferentes'	=> $totaloferentes->usuarios,
				'maxvalor' 			=> $maxvalorOfertas->maxvalor === null ? $maxvalorSubasta->maxvalor : $maxvalorOfertas->maxvalor,
			];
			
		return $data;

	}
	
	public function Ganador($idsubasta){
		
		$ganador = $this->query('SELECT U.nombre, U.apellido, U.email, U.id, O.valorfinal from Usuarios U
							inner join 
							(SELECT max(valor) as valorfinal, idusuario FROM `SubastasOfertas`
							where idsubasta = '.$idsubasta.' 
							GROUP BY idusuario) O on U.id = O.idusuario')->getRow();

			
		return $ganador;

	}

	public function Ganadores($fechaCierre){
		
		$ganadores = $this->query('SELECT U.nombre, U.apellido, U.email, U.id, O.valorfinal, P.titulo 
							FROM Usuarios U
							INNER JOIN
							(
							
							SELECT max(valor) as valorfinal, idusuario, Su.idproducto 
							FROM `SubastasOfertas` So
							INNER JOIN Subastas Su on So.idsubasta = Su.id and Su.idestado = 3 and Su.fechafin = '.$fechaCierre.'
							GROUP BY So.idusuario, Su.idproducto
							
							) O on U.id = O.idusuario
							INNER JOIN Productos P on O.idproducto = P.id
							
							')->getRow();

		return $ganadores;

	}
	
	public function SubastasPorPorducto($id){
		
		$subastas = $this->query('SELECT 
			Subastas.*, Eventos.titulo, SubastasEstados.estado, Usuarios.nombre, Usuarios.apellido 
			FROM `Subastas` 
			inner join Eventos on Eventos.id = Subastas.idevento 
			inner join SubastasEstados on SubastasEstados.id = Subastas.idestado 
			inner join Usuarios on Usuarios.id = Subastas.idmartillero 
			where idproducto = '.$id.'
		')->getResult();

			
		return $subastas;

	}


	

	
}
