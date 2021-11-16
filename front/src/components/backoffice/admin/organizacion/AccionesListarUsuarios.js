import { useContext, useState } from "react";
import {
  Swal,
  OrganizacionContext,
  useAlerta,
  Spinner,
} from "../../../layout/Imports";
import {
  BotonEliminar,
  BotonEditar,
  BotonAprobar,
  BotonCancel,
} from "../../../layout/FormsElements";

const AccionesListarUsuarios = ({ item }) => {
  const usuarioContext = useContext(OrganizacionContext);
  const { actualizarUsuario } = usuarioContext;

  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);

  /*   const editar = (usuario) => {
    seleccionarUsuario(usuario);
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
        eliminarUsuario(item.id);
      }
    });
  }; */

  const cancelar = (item) => {
    //if (item.idestado === "4") {
    // CANCELAR
    item.idestado = "3";
    item.estado = "SOLICITA OFERTAR";
    // }
    actualizarUsuario(item, setLoadingLocal, setAlerta);
  };

  const aprobar = (item) => {
    // if (item.idestado === "3") {
    // AUTORIZAR
    item.idestado = "4";
    item.estado = "PUEDE OFERTAR";
    // }
    actualizarUsuario(item, setLoadingLocal, setAlerta);
  };

  if (loadingLocal) return <Spinner />;
  return (
    <div className="text-center">
      {/* <BotonEditar editar={editar} item={item} />{" "}
      <BotonEliminar eliminar={eliminar} item={item} />{" "} */}
      <button className="btn btn-info" title="Mas Info" value="">
        <i class="fa fa-eye"></i>
      </button>{" "}
      <button className="btn btn-warning" title="Eventos" value="">
        <i class="fa fa-users"></i>
      </button>{" "}
      <button className="btn btn-danger" title="Desactivar" value="">
        <i class="fa fa-trash"></i>
      </button>
      {" "}
      <button className="btn btn-success" title="Activar" value="">
        <i class="fa fa-check"></i>
      </button>
      {item.idtipousuario === "1" ? (
        <>
          {item.idestado === "3" ? (
            <BotonAprobar editar={aprobar} item={item} />
          ) : null}
          {item.idestado === "4" ? (
            <BotonCancel editar={cancelar} item={item} />
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default AccionesListarUsuarios;
