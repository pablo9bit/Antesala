import { useState, useContext, useEffect } from "react";
import {
  useAlerta,
  Spinner,
  Link,
  FirebaseContext,
  useHistory,
} from "../layout/Imports";
import { LoginConGoogle } from "../layout/FormsElements";
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const Login = () => {
  const history = useHistory();
  const authContext = useContext(FirebaseContext);
  const {
    autenticado,
    iniciarSesionRedirect,
    obtenerInfoLogin,
    iniciarSesionEmailAndPass,
  } = authContext;

  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);
  const [DatosForm, LeerForm] = useState({
    email: "",
    password: "",
    generatoken: "si",
  });

  const { email, password } = DatosForm;

  useEffect(() => {
    obtenerInfoLogin(setLoadingLocal, history);
  }, []);

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
    }

    iniciarSesionEmailAndPass(DatosForm, setLoadingLocal, setAlerta, history);
  };

  return (
    <div
      className="abs-center"
      /* style={{ paddingTop: "10px", paddingBottom: "50px" }} */
    >
      <div className="p-3 form" /* style={{ width: "400px" }} */>
        {!autenticado ? (
          <>
            <form onSubmit={onSubmit}>
              <br></br>
              <h2 className="text-center">Ingresar a Antesala</h2>
              <br></br>

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
                <br></br>
              </div>
              {loadingLocal ? <Spinner /> : <MostrarAlerta />}

              <div className="row" style={{ padding: "10px" }}>
                <button type="submit" className="btn btn-block btn-primary">
                  Ingresar
                </button>
              </div>
            </form>

            <LoginConGoogle funcion={iniciarSesionRedirect} />
            <div className="text-center">
              Al ingresar acepta nuestros{" "}
              <Link to="/terminos" target="_blank">
                Terminos y Condiciones
              </Link>
            </div>
            <div className="text-center">
              <Link aria-label="Obtener Cuenta" to={"/crearcuenta"}>
                Obtener Cuenta
              </Link>{" "}
              -{" "}
              <Link aria-label="Olvide mi Contraseña" to={"/resetpass"}>
                Olvide mi Contraseña
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
