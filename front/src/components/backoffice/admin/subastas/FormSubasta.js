import React, { useState, useContext, useEffect } from "react";
import {
  Input,
  BotoneraForm,
  Select,
  TextArea,
} from "../../layout/FormsElements";
import {
  Spinner,
  SubastaContext,
  useAlerta,
  useHistory,
  uuidv4,
} from "../../layout/Imports";
import { BotonQuitar } from "../../layout/Estilos";

const FormSubasta = (props) => {
  const history = useHistory();
  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);
  const [soloLectura, setSoloLectura] = useState(true);
  const subastaContext = useContext(SubastaContext);
  const {
    imagenes,
    subastaSeleccionada,
    deseleccionarSubasta,
    actualizarSubasta,
    registrarSubasta,
    imagenesHandleChange,
    imagenesQuitar,
    getDataCombos,
    martilleros,
    eventos,
    estadosSubasta,
    estados,
    rubros,
  } = subastaContext;

  const [DatosForm, LeerForm] = useState({
    titulo: "",
    descripcion: "",
    idusuario: "",
    idestado: "",
    identificador: uuidv4(),
    vendedor: "",
    vendedorcuil: "",
    vendedorurl: "",
    urlvideo: "",
    idrubro: "",
    fechainicio: "",
    fechafin: "",
    idestadoSubasta: "",
    idmartillero: "",
    base: "",
    mincuota: "",
    idevento: "",
    idtipooferta: "",
  });

  const {
    titulo,
    descripcion,
    idestado,
    vendedor,
    vendedorcuil,
    vendedorurl,
    urlvideo,
    idrubro,
    fechainicio,
    fechafin,
    idestadoSubasta,
    idmartillero,
    base,
    mincuota,
    idevento,
    idtipooferta,
  } = DatosForm;

  useEffect(() => {
    getDataCombos();
  }, []);

  useEffect(() => {
    if (props.url === "/admin/subastas/nuevo") {
      deseleccionarSubasta();
    } 
  }, []);

  useEffect(() => {
      if (subastaSeleccionada !== null) {
        LeerForm(subastaSeleccionada);
      }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

     if (
      titulo.trim() === "" ||
      descripcion.trim() === "" ||
      idestado.trim() === "" ||
      idestadoSubasta.trim() === "" ||
      fechainicio.trim() === "" ||
      fechafin.trim() === "" ||
      base.trim() === "" ||
      idtipooferta.trim() === "" ||
      idmartillero.trim() === "" ||
      mincuota.trim() === ""
    ) {
      setAlerta({ msg: "Todos los campos son obligatorios", type: "error" });
      return;
    }
 
    if (subastaSeleccionada) {
      actualizarSubasta(DatosForm, setLoadingLocal, setAlerta);
      setSoloLectura(true);
    } else {
      registrarSubasta(DatosForm, setLoadingLocal, setAlerta, LeerForm);
    }
  };

  const onChange = (e) => {
    setSoloLectura(false);
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });
  };

  const funcionCancelar = () => {
    deseleccionarSubasta();
    history.push("/admin/subastas");
  };

  return (
    <div
      className="abs-center"
      style={{ paddingTop: "50px", paddingBottom: "50px" }}
    >
      <div className="center-block">
        <br></br>
        <h2 className="text-center">
          {subastaSeleccionada ? "Editar " : "Agregar "} Subasta
        </h2>
        <br></br>
        <form onSubmit={onSubmit} className="border p-3 form">
          <Input
            key={"titulo"}
            sets={{
              label: "Titulo ",
              type: "text",
              name: "titulo",
              placeholder: " ",
              valor: titulo,
            }}
            onChange={onChange}
          />
          <TextArea
            key={"descripcion"}
            sets={{
              label: "Descripción ",
              type: "text",
              name: "descripcion",
              placeholder: " ",
              rows: 20,
              cols: 40,
              valor: descripcion,
            }}
            onChange={onChange}
          />
          <Select
            key={"idrubro"}
            sets={{
              label: "Rubro",
              name: "idrubro",
              valor: idrubro,
              opciones: rubros,
            }}
            onChange={onChange}
          />
          <Select
            key={"idevento"}
            sets={{
              label: "Evento",
              name: "idevento",
              valor: idevento,
              opciones: eventos,
            }}
            onChange={onChange}
          />
          <Select
            key={"idmartillero"}
            sets={{
              label: "Martillero",
              name: "idmartillero",
              valor: idmartillero,
              opciones: martilleros,
            }}
            onChange={onChange}
          />
          <Select
            key={"idestado"}
            sets={{
              label: "Estado Publicación ",
              name: "idestado",
              valor: idestado,
              opciones: estados,
            }}
            onChange={onChange}
          />
          <Select
            key={"idestadoSubasta"}
            sets={{
              label: "Estado Subasta ",
              name: "idestadoSubasta",
              valor: idestadoSubasta,
              opciones: estadosSubasta,
            }}
            onChange={onChange}
          />
          <Select
            key={"idtipooferta"}
            sets={{
              label: "Tipo de oferta ",
              name: "idtipooferta",
              valor: idtipooferta,
              opciones: [{label: "OFERTA BAJO SOBRE", value:"2"}, {label: "NORMAL", value:"1"}],
            }}
            onChange={onChange}
          />
          <Input
            key={"urlvideo"}
            sets={{
              label: "URL video ",
              type: "text",
              name: "urlvideo",
              placeholder: " ",
              valor: urlvideo,
            }}
            onChange={onChange}
          />
          <Input
            key={"fechainicio"}
            sets={{
              label: "Fecha Inicio Subasta ",
              type: "date",
              name: "fechainicio",
              placeholder: " ",
              valor: fechainicio,
            }}
            onChange={onChange}
          />
          <Input
            key={"fechafin"}
            sets={{
              label: "Fecha Fin Subasta ",
              type: "date",
              name: "fechafin",
              placeholder: " ",
              valor: fechafin,
            }}
            onChange={onChange}
          />
          <Input
            key={"base"}
            sets={{
              label: "Valor Base ",
              type: "number",
              name: "base",
              placeholder: " ",
              valor: base,
            }}
            onChange={onChange}
          />
          <Input
            key={"mincuota"}
            sets={{
              label: "Valor Postura Minima ",
              type: "number",
              name: "mincuota",
              placeholder: " ",
              valor: mincuota,
            }}
            onChange={onChange}
          />
          <br></br>Datos vendedor
          <Input
            key={"vendedor"}
            sets={{
              label: "Nombre y Apellido Vendedor ",
              type: "text",
              name: "vendedor",
              placeholder: " ",
              valor: vendedor,
            }}
            onChange={onChange}
          />
          <Input
            key={"vendedorcuil"}
            sets={{
              label: "CUIL/CUIT Vendedor ",
              type: "text",
              name: "vendedorcuil",
              placeholder: " ",
              valor: vendedorcuil,
            }}
            onChange={onChange}
          />
          <Input
            key={"vendedorurl"}
            sets={{
              label: "Url Info Vendedor ",
              type: "text",
              name: "vendedorurl",
              placeholder: " ",
              valor: vendedorurl,
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
                          <div key={item.url} className="card">
                            <img src={item.url} width="220px" alt="" />
                            <div>
                              <BotonQuitar
                                type="button"
                                onClick={() => imagenesQuitar(item)}
                              >
                                <i className="fa fa-trash"></i>
                              </BotonQuitar>
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
    </div>
  );
};
export default FormSubasta;
