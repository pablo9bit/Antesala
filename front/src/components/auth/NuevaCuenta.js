import { useState, useContext } from "react";
import { FirebaseContext, useAlerta, Spinner, Link } from "../layout/Imports";
import { validPassword } from "../layout/RegEx";

const NuevaCuenta = () => {
  const authContext = useContext(FirebaseContext);
  const { registrarUsuario } = authContext;

  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);

  const [DatosForm, LeerForm] = useState({
    email: "",
    password: "",
    confirmar: "",
    nombre: "",
    apellido: "",
    telefono: "",
    tipousuario: "",
  });

  const {
    nombre,
    telefono,
    email,
    password,
    confirmar,
    tipousuario,
  } = DatosForm;

  const onChange = (e) => {
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === "" ||
      telefono.trim() === "" ||
      tipousuario.trim() === ""
    ) {
      setAlerta({ msg: "Todos los campos son obligatorios", class: "danger" });
      return;
    }
/*     if (!validPassword.test(password)) {
      setAlerta({
        msg: "Las contraseñas debe contener al menos una mayúscula (A-Z) y un número (0-9) y tienen que estar conformadas con 6 o más caracteres",
        type: "error",
      });
      return;
    }
    if (password.trim() !== confirmar.trim()) {
      setAlerta({ msg: "Los Passwords no coinciden", class: "danger" });
      return;
    } */

    registrarUsuario(DatosForm, setLoadingLocal, setAlerta, LeerForm);
  };

  return (
    <div
      className="abs-center"
      style={{ paddingTop: "10px", paddingBottom: "50px" }}
    >
      <form onSubmit={onSubmit} className="p-3 form" style={{ width: "400px" }}>
        <h2 className="text-center">Registrarse</h2>

        <div className="form-group">
          <label htmlFor="nombre">Nombre y Apellido</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            id="nombre"
            aria-describedby="emailHelp"
            placeholder="Ingrese su Nombre"
            onChange={onChange}
            value={nombre}
          />
        </div>

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
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Ingrese su Email"
            onChange={onChange}
            value={email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            aria-describedby="emailHelp"
            placeholder="Ingrese su Contraseña"
            onChange={onChange}
            value={password}
          />
          <br></br>
          <ul style={{ fontSize: "14px" }}>
            <li>
              Debe contener al menos una mayúscula (A-Z) y un número (0-9)
            </li>
            <li>Tiene que estar conformado con 6 o más caracteres</li>
          </ul>
        </div>

        <div className="form-group">
          <label htmlFor="confirmar">Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmar"
            className="form-control"
            id="confirmar"
            aria-describedby="emailHelp"
            placeholder="Ingrese su Contraseña de Nuevo"
            onChange={onChange}
            value={confirmar}
          />
          <br></br>
        </div>

        {loadingLocal ? <Spinner /> : <MostrarAlerta />}

        <div className="row" style={{ padding: "10px" }}>
          <button type="submit" className="btn btn-block btn-primary">
            Registrarse
          </button>
        </div>
        <div className="text-center">
          <Link aria-label="Ingresar" to={"/login"}>
            Iniciar Sesión
          </Link>
        </div>
        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default NuevaCuenta;
