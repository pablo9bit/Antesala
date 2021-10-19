import React, { useState, useContext, useEffect } from "react";
import {Boton} from '../layout/Estilos';
import {AuthContext, useAlerta, useRest, Spinner, Link} from "../layout/Imports";


const ForgotPassword = () => {

  const authContext = useContext(AuthContext);
  const { mensaje, ocultarMensaje, OlvidePassword } = authContext;
  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loading, load] = useRest();
  const [inicio, setInicio] = useState(true);

  useEffect(() => {
    const alertar = () => {
      if (mensaje.msg) {

        setAlerta({ msg: mensaje.msg, class: mensaje.class });

        if (mensaje.class === "success") {
          LeerForm({email:""});
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



  const [DatosForm, LeerForm] = useState({email: ""});
  const { email } = DatosForm;

  const onSubmit = (e) => {
  e.preventDefault();

    if (email.trim() ==="") {
      setAlerta({ msg: "Debe ingresar una dirección de Email", class: "danger" });
      return;
    }

    const api = {
      url: "/auth/recuperar",
      type: "post",
      datosJson: {
        email
      },
      getParams: null,
      funcion: OlvidePassword,
    };

    load(api);

  };

  const onChange = (e) => {
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <br></br>
      <h2 className="text-center">Olvide Mi Contraseña</h2>

      <div className="row">
        <div className="col-sm">
          <br></br> <br></br>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Ingrese el email"
                onChange={onChange}
                value={email}
              />
            </div>

            {loading ? <Spinner /> : <MostrarAlerta />}

            <div className="form-group">
              <Boton type="submit" className="btn btn-block btn-primary">
                Solicitar Recuperación
              </Boton>
            </div>
          </form>
          <p className="justify-content-center text-center">
            Ingrese la dirección de Email, con la que se registro. Luego
            presione el botón "Solicitar Recuperación", esta acción realizará el
            envio de un email con un link para que ingrese una nueva Contraseña.{" "}
          </p>
          <div className="text-center">
            <br></br>
            <Link aria-label="Obtener Cuenta" to={"/crearcuenta"}>Obtener Cuenta</Link> -{" "}
            <Link aria-label="Ingresar" to={"/login"}>Ingresar</Link>
          </div>
        </div>
        <div className="col-sm text-center">
          <br></br>
          <img
            src="./assets/images/undraw_forgot_password_gi2d.svg"
            width="100%"
            alt="login"
          />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
