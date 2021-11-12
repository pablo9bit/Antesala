import { useState, useContext, useEffect } from "react";
import {
  Input,
  BotoneraForm,
  Select,
  TextArea,
} from "../../../layout/FormsElements";
import { Spinner, UsuarioContext, useAlerta } from "../../../layout/Imports";

const FormPerfil = ({ Seleccionado }) => {
  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);
  const [soloLectura, setSoloLectura] = useState(true);

  const usuarioContext = useContext(UsuarioContext);
  const {
    usuarioSeleccionado,
    deseleccionarUsuario,
    closeModal,
    actualizarUsuario,
  } = usuarioContext;

  const [DatosForm, LeerForm] = useState({
    razon_social: "",
    idestado: "",
    descripcion: "",
    ubicacion: "",
    url: "",
    motivodesactivado: "",
    coordX: "",
    coordY: "",
    logo: "",
  });

  const {
    razon_social,
    idestado,
    descripcion,
    ubicacion,
    url,
    motivodesactivado,
  } = DatosForm;

  useEffect(() => {
    if (usuarioSeleccionado !== null) {
      LeerForm(usuarioSeleccionado);
    }
  }, []);

  /*   useEffect(() => {
    if (usuarioSeleccionado !== null && idestado !== "3") {
      LeerForm({
        ...DatosForm,
        motivodesactivado: "",
      });
    }
  }, [usuarioSeleccionado, idestado]); */

  const Actualizar = () => {
    if (
      razon_social.trim() === "" ||
      ubicacion.trim() === "" ||
      descripcion.trim() === ""
    ) {
      setAlerta({ msg: "Todos los campos son obligatorios", type: "error" });
      return;
    }
    if (idestado.trim() === "3" && motivodesactivado.trim() === "") {
      setAlerta({
        msg: "Debe ingresar la causa de Desactivación",
        type: "error",
      });
      return;
    }

    actualizarUsuario(DatosForm, setLoadingLocal, setAlerta);
    setSoloLectura(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Actualizar();
  };

  const onChange = (e) => {
    setSoloLectura(false);
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });
  };

  const funcionCancelar = () => {
    deseleccionarUsuario();
    closeModal(true);
  };

  return (
    <div className="center-block">
      <br></br>
      <h2 className="text-center">
        {Seleccionado ? "Editar " : "Agregar "} Mi Perfil
      </h2>
      <br></br>
      <form onSubmit={onSubmit} className="border p-3 form">
        <Input
          key={"razon_social"}
          sets={{
            label: "Razon Social ",
            type: "text",
            name: "razon_social",
            placeholder: " ",
            valor: razon_social,
            disabled: true,
          }}
          onChange={onChange}
        />
        <Input
          key={"ubicacion"}
          sets={{
            label: "Dirección: ",
            type: "text",
            name: "ubicacion",
            placeholder: " ",
            valor: ubicacion,
            disabled: true,
          }}
          onChange={onChange}
        />

        <Select
          key={"idestado"}
          sets={{
            label: "Estado de Martillero",
            name: "idestado",
            valor: idestado,
            opciones: [
              { label: "Sin Verificar Email", value: "1" },
              { label: "Activo", value: "2" },
              { label: "No Activo", value: "3" },
            ],
          }}
          onChange={onChange}
        />
        <TextArea
          key={"motivodesactivado"}
          sets={{
            label: "Causa Desactivación ",
            type: "text",
            name: "motivodesactivado",
            placeholder: " ",
            rows: 3,
            cols: 40,
            valor: motivodesactivado,
          }}
          onChange={onChange}
        />
        <div style={{ padding: "20px" }}>
          Al Presionar "Guardar", se enviará un Email al usuario comunicandole
          los cambios en su cuenta.
        </div>
        {loadingLocal ? <Spinner /> : <MostrarAlerta />}

        <BotoneraForm
          funcionCancelar={funcionCancelar}
          valorfuncion={null}
          deshabilitado={soloLectura}
        />
      </form>
    </div>
  );
};
export default FormPerfil;
