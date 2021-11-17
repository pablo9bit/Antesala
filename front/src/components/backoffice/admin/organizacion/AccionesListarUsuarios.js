import { useContext, useState } from "react";
import {
  Swal,
  OrganizacionContext,
  Spinner,
  clienteAxios,
  useHistory,
} from "../../../layout/Imports";

const AccionesListarUsuarios = ({ item }) => {
  const history = useHistory();
  const usuarioContext = useContext(OrganizacionContext);
  const { cambiarEstado } = usuarioContext;

  const [loadingLocal, setLoadingLocal] = useState(null);


  const desactivar = async () => {
    Swal.fire({
      title: "Ingrese Motivo de Desactivación",
      input: "textarea",
      inputAttributes: {
        autocapitalize: "on",
      },
      showCancelButton: true,
      confirmButtonText: "Desactivar",
      cancelButtonText: "Cancelar",

      showLoaderOnConfirm: true,
      icon: "warning",
      confirmButtonColor: "#d33",
      preConfirm: (login) => {
        if (login === "") {
          Swal.showValidationMessage(`Debe ingresar Motivo`);
        } else {
          return clienteAxios
            .post("/User/cambiarEstadoOrganizacion", {
              id: item.idusuario,
              idestado: 3,
              motivodesactivado: login,
            })
            .then((response) => {
              console.log("response", response);

              if (!response.data) {
                throw new Error(response.statusText);
              } else {
                item.idestadoUsuario = "3";
                item.estado = "NO ACTIVO";
                cambiarEstado(item);
                return response.data;
              }
            })
            .catch((error) => {
              Swal.showValidationMessage(`Request failed: ${error}`);
            });
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        Swal.fire({
          title: `Se Desactivo Correctamente`,
        });
      }
    });
  };

  const activar = async () => {
    Swal.fire({
      title: "Esta seguro que desea Activar?",
      showCancelButton: true,
      confirmButtonText: "Sí, Activar",
      cancelButtonText: "Cancelar",

      showLoaderOnConfirm: true,
      icon: "warning",
      confirmButtonColor: "#d33",
      preConfirm: () => {
        return clienteAxios
          .post("/User/cambiarEstadoOrganizacion", {
            id: item.idusuario,
            idestado: 2,
            motivodesactivado: "",
          })
          .then((response) => {
            console.log("response", response);

            if (!response.data) {
              throw new Error(response.statusText);
            } else {
              item.idestadoUsuario = "2";
              item.estado = "ACTIVO";
              cambiarEstado(item);
              return response.data;
            }
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        Swal.fire({
          title: `Se Activo Correctamente`,
        });
      }
    });
  };

  const mostrar = () => {
    history.push("/admin/organizaciones/" + item.idusuario);
  };




  if (loadingLocal) return <Spinner />;
  return (
    <div className="text-center">
      {item.idOrg ? (
        <>
          <button
            onClick={() => mostrar()}
            className="btn btn-info"
            title="Mas Info"
            value=""
          >
            <i class="fa fa-eye"></i>
          </button>{" "}
          <button className="btn btn-warning" title="Eventos" value="">
            <i class="fa fa-users"></i>
          </button>{" "}
        </>
      ) : null}

      {item.idestadoUsuario === "3" ? (
        <button
          onClick={() => activar()}
          className="btn btn-success"
          title="Activar"
          value=""
        >
          <i class="fa fa-check"></i>
        </button>
      ) : null}

      {item.idestadoUsuario === "2" ? (
        <button
          onClick={() => desactivar()}
          className="btn btn-danger"
          title="Desactivar"
          value=""
        >
          <i class="fa fa-trash"></i>
        </button>
      ) : null}
    </div>
  );
};

export default AccionesListarUsuarios;
