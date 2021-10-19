import { useContext, useState, useEffect } from "react";
import { SubastaContext, useAlerta, Spinner } from "../../layout/Imports";
import { InputSinLabel } from "../../layout/FormsElements";
import Listar from "./ListarSubastas";

const Subastas = (props) => {
  const subastaContext = useContext(SubastaContext);
  const { obtenerSubastas } = subastaContext;

  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);

  const [DatosForm, LeerForm] = useState({ texto: "", idusuario: 0 });
  const { texto } = DatosForm;

  const [config] = useState({
    columnas: [
      { label: "Titulo", nombre: "titulo" },
      { label: "Fecha Inicio", nombre: "fechainicio" },
      { label: "Rubro", nombre: "rubro" },
      { label: "Estado", nombre: "estado" },
      { label: "Estado Subasta", nombre: "estadoSubasta" },
      { label: "Total Oferentes", nombre: "totalOferentes" },
      { label: "Ultima Oferta", nombre: "ultimaOferta" },
      { label: "Ultimo Oferente", nombre: "UltimoOferente" },

    ],
    permiteAgregar: true,
    path: "subastas",
    nombre: "Subastas",
    registrosPorPagina: 20,
  });

  useEffect(() => {
    obtenerSubastas(DatosForm, setLoadingLocal, setAlerta);
  }, [texto]);

  
  const onChange = (e) => {
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });

    if (texto.length > 1) {
      obtenerSubastas(DatosForm, setLoadingLocal, setAlerta);
    }
  };

  return (
    <div className="center-block">
      <br></br>
      <h3 className="text-center">Gestionar {config.nombre}</h3>
      <br></br>
      <div className="row">
        <div className="col-sm">
          {config.permiteAgregar ? (
            <div className="form-group">
              <button
                onClick={() => {
                  props.history.push("/admin/subastas/nuevo");
                }}
                className="btn boton-negro"
              >
                <i className="fa fa-plus-circle"></i> Agregar
              </button>
            </div>
          ) : null}
        </div>
        <div className="col-sm">
          <InputSinLabel
            key={"buscar"}
            sets={{
              label: "",
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
        <Spinner/>
      ) : (
        <Listar
          columnas={config.columnas}
          registrosPorPagina={config.registrosPorPagina}
        />
      )}

    </div>
  );
};

export default Subastas;
