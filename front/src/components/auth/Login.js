import { useState, useContext, useEffect } from "react";
import {AuthContext, useAlerta, useRest, Spinner, Link} from "../layout/Imports";


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const {autenticado,iniciarSesion,enviarActivarCuenta,ocultarMensaje,mensaje  } = authContext;

  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loading, load] = useRest();
  const [inicio, setInicio] = useState(true);
  const [mostrarReenviar, setMostrarReenviar] = useState(null);


  useEffect(() => {
    if (autenticado) {
      ocultarMensaje();
      // eslint-disable-next-line
      
      if(sessionStorage.getItem('iditem')){
        const id = sessionStorage.getItem('iditem');
        sessionStorage.removeItem('iditem');
        props.history.push("/subasta/"+id);
      }else{
        props.history.push("/admin");
      }
    }

    const alertar = () => {
      
      if (loading) {
        setAlerta(null);
        setMostrarReenviar(null);
      }
      if (inicio) {
        // eslint-disable-next-line
        ocultarMensaje();
        setInicio(null);
        setAlerta(null);
        setMostrarReenviar(null);
      }else{
        if (mensaje.msg && !loading) {
          setAlerta({ msg: mensaje.msg, class: mensaje.class });
          if(mensaje.msg==='Debe validar su dirección de correo'){
            setMostrarReenviar(true);
          }
        }
      }
    
    };

    alertar();
  }, [autenticado, mensaje, loading, inicio, setAlerta, props.history, ocultarMensaje]);

  const [DatosForm, LeerForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = DatosForm;

  const onChange = (e) => {
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setAlerta({ msg: "Todos los campos son obligatorios", class: "danger" });
      return;
    } else {

      const api = {
        url: "/auth", type: "post", 
        datosJson: {
          email,
          password,
        }, 
        getParams: null,
        funcion: iniciarSesion,
      };

      load(api);
    }
  };

  const onClickEnviarActivarCuenta = () => {
    if (email.trim() === "") {
      setAlerta({ msg: "El Email es Obligatorio", class: "danger" });
      return;
    } else {
      setAlerta(null);

      const api = {
        url: "/auth/enviaractivar", type: "post", 
        datosJson: {email}, 
        getParams: null,
        funcion: enviarActivarCuenta,
      };

      load(api);
    }
  };

  return (
    <>
      <br></br>
      <h2 className="text-center">Iniciar Sesion</h2>

      <div className="row">
        <div className="col-sm">
          <form onSubmit={onSubmit}>
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
                id="password"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Ingrese su Contraseña"
                onChange={onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <p className="text-center">
                Al ingresar acepta nuestros{" "}
                <Link to="/terminos" target="_blank">Terminos y Condiciones</Link>
              </p>
            </div>

            {loading ? (
              <Spinner />
            ) : (
              <>
                <MostrarAlerta />
                
                  {mostrarReenviar ? (
                    <p className="text-center">
                    <Link to="#" onClick={onClickEnviarActivarCuenta}>
                      Re-Enviar Email de Activación de Cuenta
                    </Link>
                    </p>
                  ) : null} 
                
              </>
            )}

            <div className="form-group">
              <button type="submit" className="btn btn-block btn-primary">
                Ingresar
              </button>
            </div>
          
          </form>
          <div className="text-center">
              <Link aria-label="Obtener Cuenta" to={"/crearcuenta"}>Obtener Cuenta</Link> -{" "}
              <Link aria-label="Olvide mi Contraseña" to={"/olvide"}>Olvide mi Contraseña</Link>
            </div>
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

export default Login;
