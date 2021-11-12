import { useContext, useState, useEffect } from "react";
import {
  UsuarioContext,
  useAlerta,
  Portal,
  Spinner,
} from "../../../layout/Imports";
import { InputSinLabel, SelectSinLabel } from "../../../layout/FormsElements";
import Listar from "./ListarUsuarios";
import FormUsuario from "./FormUsuario";

const Eventos = () => {
  const usuarioContext = useContext(UsuarioContext);
  const {
    obtenerUsuarios,
    isOpenedModal,
    usuarioSeleccionado,
    openModal,
    getDataCombos,
    tiposUsuarios,
  } = usuarioContext;
  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);
  const [consultar, setConsultar] = useState(false);

  const [DatosForm, LeerForm] = useState({ texto: "", idtipo: "" });
  const { texto, idtipo } = DatosForm;

  const [config] = useState({
    columnasMartilleros: [
      { label: "Cuil", nombre: "cuil" },
      { label: "Nombre", nombre: "nombre" },
      { label: "Apellido", nombre: "apellido" },
      { label: "Email", nombre: "email" },
      { label: "Telefono", nombre: "telefono" },
      { label: "Matricula", nombre: "matricula" },
      { label: "Estado", nombre: "estado" },
    ],
    columnasOferentes: [
      { label: "Cuil", nombre: "cuil" },
      { label: "Nombre", nombre: "nombre" },
      { label: "Apellido", nombre: "apellido" },
      { label: "Alias", nombre: "alias" },
      { label: "Email", nombre: "email" },
      { label: "Telefono", nombre: "telefono" },
      { label: "Estado", nombre: "estado" },
    ],
    permiteAgregar: false,
    path: "admin/usuarios",
    nombre: "Usuarios",
    registrosPorPagina: 20,
  });

  useEffect(() => {
    getDataCombos();
  }, []);

  useEffect(() => {
    if (consultar) {
      setConsultar(false);
      obtenerUsuarios(DatosForm, setLoadingLocal, setAlerta);
    }
  }, [consultar]);

  const onChange = (e) => {
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });
    setConsultar(true);
  };

  return (
    <div className="center-block">
      <br></br>
      <h3 className="text-center">Gestionar {config.nombre}</h3>
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

          <SelectSinLabel
            key={"idtipo"}
            sets={{
              name: "idtipo",
              valor: idtipo,
              label: "Seleccione Tipo de Usuario",
              opciones: tiposUsuarios,
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
            columnas={
              idtipo !== "1"
                ? config.columnasMartilleros
                : config.columnasOferentes
            }
            registrosPorPagina={config.registrosPorPagina}
          />
        
      )}

      <Portal isOpened={isOpenedModal}>
        <FormUsuario Seleccionado={usuarioSeleccionado} />
      </Portal>
    </div>
  );
};

export default Eventos;
