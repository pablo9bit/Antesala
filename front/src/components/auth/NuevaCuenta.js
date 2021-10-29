import { useState, useContext } from "react";
import { AuthContext, useAlerta, Spinner, Link } from "../layout/Imports";

const NuevaCuenta = (props) => {

  const tipo = props.match.params.tipo;

  const authContext = useContext(AuthContext);
  const { registrarUsuario, ocultarMensaje, mensaje } = authContext;

  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);

  const [DatosForm, LeerForm] = useState({
    email: "",
    password: "",
    confirmar: "",
    nombre: "",
    apellido: "",
    telefono: "",
    tipousuario: "1",
  });

  const {
    nombre,
    apellido,
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
      apellido.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === "" ||
      telefono.trim() === ""
    ) {
      setAlerta({ msg: "Todos los campos son obligatorios", class: "danger" });
      return;
    }
    if (password.trim().length < 8) {
      setAlerta({
        msg: "Password debe tener minimo 8 caracteres",
        class: "danger",
      });
      return;
    }
    if (password.trim() !== confirmar.trim()) {
      setAlerta({ msg: "Los Passwords no coinciden", class: "danger" });
      return;
    }

    /* const api = {
      url: "/users",
      type: "post",
      datosJson: {
        nombre,
        apellido,
        direccion,
        cuil,
        email,
        password,
        telefono,
        tipousuario,
        matricula,
        colegio,
        url,
        alias,
        cdadpublicaciones: "0",
      },
      getParams: null,
      funcion: registrarUsuario,
    };

    load(api); */
  };

  return (
    <div
      className="abs-center"
      style={{ paddingTop: "10px", paddingBottom: "50px" }}
    >
      <form onSubmit={onSubmit} className="p-3 form" style={{ width: "400px" }}>
        <br></br>
        <h2 className="text-center">Registrarse</h2>
        <br></br>
        <p>
          Ingrese si lo desea un Alias que se mostrará en toda el Sitio cuando
          se refiera a su usuario. En caso que no lo complete se usara su nombre
          y apellido.{" "}
        </p>
        

        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
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
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            name="apellido"
            className="form-control"
            id="apellido"
            aria-describedby="emailHelp"
            placeholder="Ingrese su Apellido"
            onChange={onChange}
            value={apellido}
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
        </div>

        {loadingLocal ? <Spinner /> : <MostrarAlerta />}

        <div className="form-group">
          <button type="submit" className=" btn btn-block btn-primary">
            Registrarme
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
