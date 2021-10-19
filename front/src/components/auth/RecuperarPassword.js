import React, { useState, useContext, useEffect } from "react";
import { Boton } from "../layout/Estilos";
import {AuthContext, useAlerta, useRest, Spinner, Link} from "../layout/Imports";

const RecuperarPassword = (props) => {
  const code = props.match.params.id;
  const authContext = useContext(AuthContext);
  const { mensaje, ocultarMensaje, CambiarPassword } = authContext;
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
          });
 
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
  });
  const { confirma, password } = DatosForm;

  const onChange = (e) => {
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (confirma.trim() === "" || password.trim() === "" ) {
      setAlerta({ msg: "Todos los campos son obligatorios", class: "danger" });
      return;
    }

    if (password.trim().length < 8) {
      setAlerta({msg: "Password debe tener minimo 8 caracteres", class: "danger" });
      return;
    }

    if (confirma.trim() !== password.trim()) {
      setAlerta({ msg: "Las contraseñas no coinciden", class: "danger" });
      return;
    }

    const api = {
      url: "/auth/cambiar",
      type: "post",
      datosJson: {
        password,
        code
      },
      getParams: null,
      funcion: CambiarPassword,
    };

    load(api);
  };

  return (
    <>
      <br></br>
      <h2 className="text-center">Recuperar Contraseña</h2>
      <br></br>
      <div className="row">
        <div className="col-sm">
          <form onSubmit={onSubmit}>
        
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
          <div className="text-center">
            <Link to={"/login"}>Iniciar Sesión</Link>
          </div>

        </div>
        <div className="col-sm text-center">
          <br></br>
          <img
            src=".././assets/images/undraw_secure_login_pdn4.svg"
            width="100%"
            alt="recuperar"
          />
        </div>
      </div>
    </>
  );
};

export default RecuperarPassword;
