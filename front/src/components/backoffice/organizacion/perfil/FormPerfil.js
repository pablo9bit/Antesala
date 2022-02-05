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

const FormPerfil = (props) => {
  const id = props.match.params.id;

  const history = useHistory();
  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);
  const [soloLectura, setSoloLectura] = useState(false);
  const [permitido, setPermitido] = useState(null);

  const fbContext = useContext(FirebaseContext);
  const { usuarioLocal, noPermitido } = fbContext;

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
    descripcionOrg: "",
    ubicacion: "",
    url: "",
    motivodesactivado: "",
    coordX: "",
    coordY: "",
    logo: "",
    whatsapp: "",
    accesibilidad: "",
    mediosdecobro: [],
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const {
    razon_social,
    idestado,
    descripcionOrg,
    ubicacion,
    url,
    motivodesactivado,
    whatsapp,
    accesibilidad,
    mediosdecobro,
    nombre,
    apellido,
    telefono,
  } = DatosForm;

  useEffect(() => {
    console.log("id", id);
    if (usuarioLocal !== null) {
      if (
        usuarioLocal.tipousuario === "1" ||
        usuarioLocal.tipousuario === "9"
      ) {
        getOrganizacion(id ? id : usuarioLocal.id, setLoadingLocal, setAlerta);
      }
      if (id) {
        setSoloLectura(true);
      }
      noPermitido(["1", "9"], setPermitido, history);
    }
  }, [usuarioLocal]);

  useEffect(() => {
    if (organizacionSeleccionada !== null) {
      LeerForm(organizacionSeleccionada);
    }
  }, [organizacionSeleccionada]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.trim()==="" ||
      apellido.trim()==="" ||
      razon_social.trim() === "" ||
      ubicacion.trim() === "" ||
      descripcionOrg.trim() === ""
    ) {
      setAlerta({ msg: "Todos los campos son obligatorios", type: "error" });
      return;
    }
   /*  if (idestado.trim() === "3" && motivodesactivado.trim() === "") {
      setAlerta({
        msg: "Debe ingresar la causa de Desactivación",
        type: "error",
      });
      return;
    } */

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
    if (usuarioLocal.tipousuario === "1") {
      history.push("/org");
    }
    if (usuarioLocal.tipousuario === "9") {
      history.push("/admin/organizaciones");
    }
  };

  if (permitido === null) return <></>;
  if (permitido === "si")
    return (
      <div
        className="abs-center"
        style={{ paddingTop: "5px", paddingBottom: "10px" }}
      >
        <form
          onSubmit={onSubmit}
          className="border p-3 form"
          style={{ width: "90%" }}
        >
          <h2 className="text-center">Mi Organización</h2>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Datos de Productor
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <br></br>
                  <Input
                    key={"nombre"}
                    sets={{
                      label: "Nombre",
                      type: "text",
                      name: "nombre",
                      placeholder: " ",
                      valor: nombre,
                      disabled: soloLectura,
                    }}
                    onChange={onChange}
                  />
                  <br></br>
                  <Input
                    key={"apellido"}
                    sets={{
                      label: "Apellido",
                      type: "text",
                      name: "apellido",
                      placeholder: " ",
                      valor: apellido,
                      disabled: soloLectura,
                    }}
                    onChange={onChange}
                  />
                  <br></br>
                  <Input
                    key={"telefono"}
                    sets={{
                      label: "Telefono",
                      type: "text",
                      name: "telefono",
                      placeholder: " ",
                      valor: telefono,
                      disabled: soloLectura,
                    }}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Datos de la Sala
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <br></br>
                  <Input
                    key={"razon_social"}
                    sets={{
                      label: "Razon Social",
                      type: "text",
                      name: "razon_social",
                      placeholder: " ",
                      valor: razon_social,
                      disabled: soloLectura,
                    }}
                    onChange={onChange}
                  />
                  <br></br>
                  <TextArea
                    key={"descripcionOrg"}
                    sets={{
                      label: "Descripcion",
                      type: "text",
                      name: "descripcionOrg",
                      placeholder: " ",
                      rows: 3,
                      cols: 40,
                      valor: descripcionOrg,
                      disabled: soloLectura,
                    }}
                    onChange={onChange}
                  />
                   <br></br>
                  <Input
                    key={"whatsapp"}
                    sets={{
                      label: "Whatsapp",
                      type: "text",
                      name: "whatsapp",
                      placeholder: " ",
                      valor: whatsapp,
                      disabled: soloLectura,
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
                      disabled: soloLectura,
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
                      disabled: soloLectura,
                    }}
                    onChange={onChange}
                  />
                  <br></br>
                  <Select
                    key={"accesibilidad"}
                    sets={{
                      label: "Accesible",
                      name: "accesibilidad",
                      valor: accesibilidad,
                      disabled: true,
                      opciones: [
                        { label: "Si", value: "Si" },
                        { label: "No", value: "No" },
                      ],
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
                      disabled: true,
                      opciones: [
                        { label: "Activo", value: "ACTIVO" },
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
                    {!soloLectura ? (
                      <input
                        type="file"
                        multiple
                        onChange={imagenesHandleChange}
                        name="archivo"
                      />
                    ) : null}
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
                                    style={{
                                      padding: "10px",
                                      width: "240px",
                                    }}
                                  >
                                    <img src={item.url} width="220px" alt="" />
                                    <div>
                                      {!soloLectura ? (
                                        <button
                                          className="BotonQuitar"
                                          type="button"
                                          onClick={() => imagenesQuitar(item)}
                                        >
                                          <i className="fa fa-trash"></i>
                                        </button>
                                      ) : null}
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
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Medios de Cobro
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
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
