import { useState, useEffect, useContext } from "react";
import {
  Input,
  BotoneraForm,
  Select,
  TextArea,
} from "../../../layout/FormsElements";
import {
  Spinner,
  OrganizacionContext,
  FirebaseContext,
  useAlerta,
  useHistory,
} from "../../../layout/Imports";

const FormPerfil = () => {
  const history = useHistory();
  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);
  const [soloLectura, setSoloLectura] = useState(true);
  const [permitido, setPermitido] = useState(null);

  const fbContext = useContext(FirebaseContext);
  const {usuarioLocal, noPermitido } = fbContext;

  const orgContext = useContext(OrganizacionContext);
  const {
    organizacionSeleccionada,
    getOrganizacion,
    saveOrganizacion,
    imagenes,
    imagenesHandleChange,
    imagenesQuitar,
  } = orgContext;

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
    if (usuarioLocal !== null) {
      if (usuarioLocal.tipousuario === "1") {
        getOrganizacion(usuarioLocal.id, setLoadingLocal, setAlerta);
      }
      noPermitido("1", setPermitido, history);
    }
  }, [usuarioLocal]);

  useEffect(() => {
    if (organizacionSeleccionada !== null) {
      LeerForm(organizacionSeleccionada);
    }
  }, []);

 

  const onSubmit = (e) => {
    e.preventDefault();
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

    saveOrganizacion(DatosForm, setLoadingLocal, setAlerta);
    setSoloLectura(true);
  };

  const onChange = (e) => {
    setSoloLectura(false);
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });
  };

  const funcionCancelar = () => {
    history.push("/org");
  };

  if (permitido === null) return <></>;
  if (permitido === "si")
    return (
      <div
        className="abs-center"
        style={{ paddingTop: "10px", paddingBottom: "50px" }}
      >
        <form onSubmit={onSubmit} className="border p-3 form">
          <h2 className="text-center">Mi Organización</h2>
          <br></br>
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
          <br></br>
          <TextArea
            key={"descripcion"}
            sets={{
              label: "Descripcion",
              type: "text",
              name: "descripcion",
              placeholder: " ",
              rows: 3,
              cols: 40,
              valor: descripcion,
            }}
            onChange={onChange}
          />
          <br></br>
          <Input
            key={"url"}
            sets={{
              label: "Url ",
              type: "text",
              name: "url",
              placeholder: " ",
              valor: url,
              disabled: true,
            }}
            onChange={onChange}
          />
          <br></br>
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
          <br></br>

          <Select
            key={"idestado"}
            sets={{
              label: "Estado",
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
          <br></br>

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
              disabled: true,
            }}
            onChange={onChange}
          />

          <div style={{ padding: "10px" }}>
            <input
              type="file"
              multiple
              onChange={imagenesHandleChange}
              name="archivo"
            />
            <br></br>
            {imagenes ? (
              <>
                <div className="text-center">
                  <br></br>

                  {imagenes.length > 0 ? (
                    <div className="p-2 row justify-content-center">
                      {imagenes
                        .filter((item) => item.accion !== "borrar")
                        .map((item) => (
                          <div
                            key={item.url}
                            className="card"
                            style={{ paddingTop: "10px" }}
                          >
                            <img src={item.url} width="220px" alt="" />
                            <div>
                              <button
                                className="BotonQuitar"
                                type="button"
                                onClick={() => imagenesQuitar(item)}
                              >
                                <i className="fa fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : null}
                </div>
                <br></br>
                <br></br>
              </>
            ) : null}
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
