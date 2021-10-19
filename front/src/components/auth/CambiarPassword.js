import React, { useState, useContext, useEffect } from "react";
import { Boton } from "../layout/Estilos";
import {AuthContext, useAlerta, useRest, Spinner} from "../layout/Imports";

const CambiarPassword = (props) => {
  const authContext = useContext(AuthContext);
  const { mensaje, ocultarMensaje, CambiarPassword, cerrarSesion } = authContext;
  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loading, load] = useRest();
  const [inicio, setInicio] = useState(true);

  useEffect(() => {
    const alertar = () => {
      if (mensaje.msg) {

        setAlerta({ msg: mensaje.msg, class: mensaje.class });

        if (mensaje.class === "success") {
          LeerForm({
            password: "",
            confirma: "",
            actual: ""
          });

         setTimeout(() => {
            cerrarSesion();
            props.history.push("/login");
          }, 2000);
          
          
        }
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
  }, [mensaje, loading]);

  const [DatosForm, LeerForm] = useState({
    confirma: "",
    password: "",
    actual: ""
  });
  const { confirma, password, actual } = DatosForm;

  const onChange = (e) => {
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (confirma.trim() === "" || password.trim() === "" || actual.trim() === "") {
      setAlerta({ msg: "Todos los campos son obligatorios", class: "danger" });
      return;
    }

    if (actual.trim() === password.trim()) {
      setAlerta({ msg: "La contraseña actual no puede ser la misma que la nueva contrasena", class: "danger" });
      return;
    }

    if (password.trim().length < 8) {
      setAlerta({
        msg: "Password debe tener minimo 8 caracteres", class: "danger" });
      return;
    }

    if (confirma.trim() !== password.trim()) {
      setAlerta({ msg: "Las contraseñas no coinciden", class: "danger" });
      return;
    }

    const api = {
      url: "/users",
      type: "put",
      datosJson: {
        password: actual,
        newpassword: password
      },
      getParams: null,
      funcion: CambiarPassword,
    };

    load(api);
  };

  return (
    <>
      <br></br>
      <h2 className="text-center">Cambiar Contraseña</h2>
      <br></br>
      <div>Cuando presione el Boton Cambiar Contrasena, se realizará el cambio y luego, por su seguridad, se cerrará la sesión.</div><br></br>
      <div className="row">
        <div className="col-sm">
          <form onSubmit={onSubmit}>
          <div className="form-group">
              <label htmlFor="password">Contraseña Actual</label>
              <input
                type="password"
                name="actual"
                className="form-control"
                id="actual"
                aria-describedby="emailHelp"
                placeholder="Ingrese su Contraseña Actual"
                onChange={onChange}
                value={actual}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="password">Nueva Contraseña</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                aria-describedby="emailHelp"
                placeholder="Ingrese su Nueva Contraseña"
                onChange={onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirma">Repita la Nueva Contraseña</label>
              <input
                type="password"
                name="confirma"
                id="confirma"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Ingrese su Nueva Contraseña"
                onChange={onChange}
                value={confirma}
              />
            </div>

            {loading ? <Spinner /> : <MostrarAlerta />}

            <div className="form-group">
              <Boton type="submit" className="btn btn-block btn-primary">
                Cambiar Contraseña
              </Boton>
            </div>
          </form>
        </div>
        <div className="col-sm text-center">
          <br></br>
          <img
            src="./assets/images/undraw_mobile_login_ikmv.svg"
            width="100%"
            alt="login"
          />
        </div>
      </div>
    </>
  );
};

export default CambiarPassword;
