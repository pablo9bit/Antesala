import { useState, useContext, useEffect } from "react";
import { AuthContext, useAlerta, useRest, Spinner, Link } from "../layout/Imports";

const NuevaCuenta = () => {
  const authContext = useContext(AuthContext);
  const { registrarUsuario, ocultarMensaje, mensaje } = authContext;

  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loading, load] = useRest();

  const [DatosForm, LeerForm] = useState({
    email: "",
    password: "",
    confirmar: "",
    nombre: "",
    apellido: "",
    direccion: "",
    cuil: "",
    telefono: "",
    tipousuario: "1",
    matricula: "",
    colegio: "",
    url: "",
    alias: "",
  });

  const {
    nombre,
    apellido,
    direccion,
    cuil,
    telefono,
    email,
    password,
    confirmar,
    tipousuario,
    matricula,
    colegio,
    url,
    alias,
  } = DatosForm;

  const [inicio, setInicio] = useState(true);

  useEffect(() => {
    const alertar = () => {
      if (mensaje.msg && !loading) {
        if (mensaje.class === "success") {
          LeerForm({
            email: "",
            password: "",
            confirmar: "",
            nombre: "",
            apellido: "",
            direccion: "",
            cuil: "",
            telefono: "",
            tipousuario: "",
            matricula: "",
            url: "",
            alias: "",
          });
        }
        setAlerta({ msg: mensaje.msg, class: mensaje.class });
      }
      if (loading) {
        setAlerta(null);
      }
      if (inicio) {
        /* eslint-disable */
        ocultarMensaje();
        setInicio(null);
        setAlerta(null);
      }
    };

    alertar();
  }, [tipousuario, mensaje, loading, inicio]);

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
      cuil.trim() === "" ||
      direccion.trim() === "" ||
      telefono.trim() === ""
    ) {
      setAlerta({ msg: "Todos los campos son obligatorios", class: "danger" });
      return;
    }
    if (cuil.trim().length < 11 || cuil.trim().length > 11) {
      setAlerta({ msg: "CUIL debe tener 11 caracteres", class: "danger" });
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

    if (tipousuario === "2") {
      if (matricula.trim().length === 0) {
        setAlerta({
          msg: "Debe ingresar su Matricula habilitante",
          class: "danger",
        });
        return;
      }
      if (colegio.trim().length === 0) {
        setAlerta({
          msg: "Debe ingresar Colegio habilitante",
          class: "danger",
        });
        return;
      }
    }

    const api = {
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
        cdadpublicaciones: "0"
      },
      getParams: null,
      funcion: registrarUsuario,
    };

    load(api);
  };

  return (
    <>
      <br></br>
      <h2 className="text-center">Registrarse</h2>
      <br></br>
      <div className="text-center">
        Complete los siguientes datos para Registrarse. Una vez completa la
        información solicitada, presione el boton "Registrarme".
        <br></br>
        Luego de realizar lo mencionado se enviara un email a la casilla
        detallada. Debera ingresar al email enviado y presionar "Activar" (sino
        encuentra el email, verifique en la carpeta Spam). Esta acción activara
        su cuenta para operar en este sitio.
        <br></br>
      </div>
      <br></br>
      <div className="row">
        <div className="col-sm">
          <form onSubmit={onSubmit}>
            <p>
              Ingrese si lo desea un Alias que se mostrará en toda el Sitio
              cuando se refiera a su usuario. En caso que no lo complete se
              usara su nombre y apellido.{" "}
            </p>
            <div className="form-group">
              <label htmlFor="alias">Alias</label>
              <input
                type="text"
                name="alias"
                className="form-control"
                id="alias"
                aria-describedby="emailHelp"
                placeholder="Ingrese su Alias"
                onChange={onChange}
                value={alias}
              />
            </div>

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
              <label htmlFor="cuil">CUIL</label>
              <input
                type="number"
                name="cuil"
                className="form-control"
                id="cuil"
                aria-describedby="emailHelp"
                placeholder="Ingrese su CUIL (sin guiones)"
                onChange={onChange}
                value={cuil}
              />
            </div>

            <div className="form-group">
              <label htmlFor="direccion">Direccion</label>
              <input
                type="text"
                name="direccion"
                className="form-control"
                id="direccion"
                aria-describedby="emailHelp"
                placeholder="Ingrese su Direccion"
                onChange={onChange}
                value={direccion}
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

            {loading ? <Spinner /> : <MostrarAlerta />}

            <div className="form-group">
              <button type="submit" className=" btn btn-block btn-primary">
                Registrarme
              </button>
            </div>
          </form>
        
        
          <div className="text-center">
            <Link aria-label="Ingresar" to={"/login"}>
              Iniciar Sesión
            </Link>
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="col-sm text-center">
          <br></br>
          <img
            src="./assets/images/undraw_settings_tab_mgiw.svg"
            width="100%"
            alt="registro"
          />
        </div>
      </div>
    </>
  );
};

export default NuevaCuenta;
