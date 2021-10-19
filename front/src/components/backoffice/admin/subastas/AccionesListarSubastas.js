import { useContext } from "react";
import { Swal, SubastaContext, useHistory } from "../../layout/Imports";
import { BotonEliminar, BotonEditar } from "../../layout/FormsElements";

const AccionesListarSubastas = ({ item }) => {
  const history = useHistory();
  const subastaContext = useContext(SubastaContext);
  const { eliminarSubasta, seleccionarSubasta } = subastaContext;

  const editar = (item) => {
    history.push('/admin/subastas/'+item.id)
    seleccionarSubasta(item);
  };

  const eliminar = (item) => {
    Swal.fire({
      title: "Esta Seguro que desea Eliminar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarSubasta(item.id);
      }
    });
  };


  return (
    <div className="text-center">
      <BotonEditar editar={editar} item={item} />{" "}
      <BotonEliminar eliminar={eliminar} item={item} />{" "}
      {/*       <BotonVer mostrar={mostrar} item={item} />*/}
    </div>
  );
};

export default AccionesListarSubastas;
