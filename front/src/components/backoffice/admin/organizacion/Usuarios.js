import { useContext, useState, useEffect } from "react";
import {
  OrganizacionContext,
  FirebaseContext,
  Portal,
  Spinner,
  useHistory,
} from "../../../layout/Imports";
import { InputSinLabel } from "../../../layout/FormsElements";
import Listar from "./ListarUsuarios";
import FormUsuario from "./FormUsuario";

const Usuarios = () => {
  const history = useHistory();
  const authContext = useContext(FirebaseContext);
  const { usuarioLocal, noPermitido } = authContext;

  const usuarioContext = useContext(OrganizacionContext);
  const { obtenerOrganizaciones, isOpenedModal, usuarioSeleccionado } = usuarioContext;

  const [loadingLocal, setLoadingLocal] = useState(null);
  const [consultar, setConsultar] = useState(true);
  const [permitido, setPermitido] = useState(null);
  const [DatosForm, LeerForm] = useState({ texto: "" });
  const { texto } = DatosForm;

  const [config] = useState({
    columnas: [
      { label: "Nombre", nombre: "nombre" },
      { label: "Razon Social", nombre: "razon_social" },
      { label: "Telefono", nombre: "telefono" },
      { label: "Ubicacion", nombre: "ubicacion" },
      { label: "Estado", nombre: "estado" },

    ],
    permiteAgregar: false,
    path: "admin/organizaciones",
    nombre: "Organizaciones",
    registrosPorPagina: 20,
  });

  useEffect(() => {
    if (consultar) {
      setConsultar(false);
      obtenerOrganizaciones(DatosForm, setLoadingLocal);
    }
  }, [consultar]);

  useEffect(() => {
    if (usuarioLocal !== null) {
      if (usuarioLocal.tipousuario === "1") {
        //  getOrganizacion(usuarioLocal.id, setLoadingLocal, setAlerta);
      }
      noPermitido(["9"], setPermitido, history);
    }
  }, [usuarioLocal]);

  const onChange = (e) => {
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });
    setConsultar(true);
  };

  if (permitido === null) return <></>;
  if (permitido === "si")
    return (
      <div className="center-block">
        <br></br>
        <h3 className="text-center">{config.nombre}</h3>
        <br></br>
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm ">
            <InputSinLabel
              key={"buscar"}
              sets={{
                type: "text",
                name: "texto",
                placeholder: "Ingrese su Búsqueda",
                valor: texto,
              }}
              onChange={onChange}
            />
          </div>
          <br></br>
        </div>
        <br></br>
        {loadingLocal ? (
          <Spinner />
        ) : (
          <Listar
            columnas={config.columnas}
            registrosPorPagina={config.registrosPorPagina}
          />
        )}

        <Portal isOpened={isOpenedModal}>
          <FormUsuario Seleccionado={usuarioSeleccionado} />
        </Portal>
      </div>
    );
};

export default Usuarios;
