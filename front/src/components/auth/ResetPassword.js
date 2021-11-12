import { useState, useContext, useEffect } from "react";
import {
  useAlerta,
  Spinner,
  Link,
  FirebaseContext,
  useHistory,
} from "../layout/Imports";

const ResetPassword = () => {
  const history = useHistory();
  const authContext = useContext(FirebaseContext);
  const {
    resetPassword
  } = authContext;

  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);
  const [DatosForm, LeerForm] = useState({
    email: "",
  });

  const { email } = DatosForm;

  const onChange = (e) => {
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setAlerta({ msg: "Debe ingresar el Email con el que esta registrado.", class: "danger" });
      return;
    }

    resetPassword(DatosForm, setLoadingLocal, setAlerta, history);
  };

  return (
    <div
      className="abs-center"
      /* style={{ paddingTop: "10px", paddingBottom: "50px" }} */
    >
      <div className="p-3 form" /* style={{ width: "400px" }} */>
        
            <form onSubmit={onSubmit}>
              <br></br>
              <h2 className="text-center">Recuperar Contraseña</h2>
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
                <br></br>
              </div>

              {loadingLocal ? <Spinner /> : <MostrarAlerta />}

              <div className="row" style={{ padding: "10px" }}>
                <button type="submit" className="btn btn-block btn-primary">
                  Ingresar
                </button>
              </div>
            </form>

      </div>
    </div>
  );
};

export default ResetPassword;
