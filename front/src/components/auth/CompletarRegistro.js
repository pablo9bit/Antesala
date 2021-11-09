import { useState, useContext } from "react";
import { FirebaseContext, useAlerta, Spinner } from "../layout/Imports";

const CompletarRegistro = () => {
  const authContext = useContext(FirebaseContext);
  const { usuario, completarRegistro } = authContext;

  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);

  const [DatosForm, LeerForm] = useState({
    telefono: "",
    tipousuario: "",
    uid: usuario.uid,
    nombre: usuario.displayName,
    apellido: "",
    email: usuario.email,
  });

  const { telefono, tipousuario } = DatosForm;

  const onChange = (e) => {
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (telefono.trim() === "" || tipousuario.trim() === "") {
      setAlerta({ msg: "Todos los campos son obligatorios", class: "danger" });
      return;
    }

    completarRegistro(DatosForm, setLoadingLocal, setAlerta, LeerForm);
  };

  return (
    <div
      className="abs-center"
      style={{ paddingTop: "10px", paddingBottom: "50px" }}
    >
      <form onSubmit={onSubmit} className="p-3 form" style={{ width: "400px" }}>
        <br></br>
        <h2 className="text-center">
          {usuario.displayName} Complete su Registro
        </h2>
        <br></br>

        <div className="form-group">
          <label htmlFor="telefono">Telefono</label>
          <input
            type="text"
            name="telefono"
            className="form-control"
            id="telefono"
            aria-describedby="emailHelp"
            placeholder="Ingrese su Telefono"
            onChange={onChange}
            value={telefono}
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="tipousuario">Tipo de Usuario</label>
          <select
            name="tipousuario"
            className="form-control"
            id="tipousuario"
            onChange={onChange}
            value={tipousuario}
          >
            <option value="">Seleccione..</option>
            <option value="1">Expectador</option>
            <option value="2">Organización</option>
          </select>
          <br></br>
        </div>

        {loadingLocal ? <Spinner /> : <MostrarAlerta />}

        <div className="row" style={{ padding: "10px" }}>
          <button type="submit" className="btn btn-block btn-primary">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompletarRegistro;
