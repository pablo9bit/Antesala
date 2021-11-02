import { useState, useContext, useEffect } from "react";
import { AuthContext, useAlerta, Spinner, Link } from "../layout/Imports";
import { LoginConGoogle } from "../layout/FormsElements";

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const { autenticado, iniciarSesion } = authContext;

  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);



  useEffect(() => {
    if (autenticado) {
      // eslint-disable-next-line
      if (sessionStorage.getItem("url")) {
        const url = sessionStorage.getItem("url");
        sessionStorage.removeItem("url");
        props.history.push(url);
      } else {
        props.history.push("/admin");
      }
    }
  }, [autenticado, props.history]);

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
      /*   const api = {
        url: "/auth",
        type: "post",
        datosJson: {
          email,
          password,
        },
        getParams: null,
        funcion: iniciarSesion,
      };

      load(api); */
    }
  };

  return (
    <div
      className="abs-center"
      /* style={{ paddingTop: "10px", paddingBottom: "50px" }} */
    >
      <div className="p-3 form" /* style={{ width: "400px" }} */>
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
          {loadingLocal ? <Spinner /> : <MostrarAlerta />}

          <div className="row" style={{ padding: "10px" }}>
            <button type="submit" className="btn btn-block btn-primary">
              Ingresar
            </button>
          </div>
        </form>

        <LoginConGoogle />

        <div className="text-center">
          <Link aria-label="Obtener Cuenta" to={"/crearcuenta"}>
            Obtener Cuenta
          </Link>{" "}
          -{" "}
          <Link aria-label="Olvide mi Contraseña" to={"/olvide"}>
            Olvide mi Contraseña
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
