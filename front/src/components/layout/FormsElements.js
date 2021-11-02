import "./FormsElements.css";
import {signInWithGooglePopup, signInWithGoogleRedirect} from "../layout/Imports";

export const Input = ({ sets, onChange }) => {
  const { label, type, name, placeholder, valor } = sets;

  return (
    <div className="form-group row ">
      <div className="col-sm-3">
        <label style={{ fontSize: "small" }} htmlFor={name}>
          {label}
        </label>
        <br></br>
      </div>
      <div className="col-sm-9">
        <input
          type={type}
          name={name}
          className="form-control form-control-sm"
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          value={valor}
        />
      </div>
    </div>
  );
};

export const InputSinLabel = ({ sets, onChange }) => {
  const { type, name, placeholder, valor, disabled, requerido } = sets;
  return (
    <div className="form-group row p-2">
      <input
        disabled={disabled}
        type={type}
        name={name}
        className={`form-control  ${!valor && requerido ? "is-invalid" : null}`}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={valor}
        style={{ borderRadius: "5px" }}
      />
    </div>
  );
};

export const Select = ({ sets, onChange }) => {
  const { label, name, valor, opciones } = sets;

  return (
    <div className="form-group row">
      <div className="col-sm-3">
        <label style={{ fontSize: "small" }} htmlFor={name}>
          {label}
        </label>
        <br></br>
      </div>
      <div className="col-sm-9">
        <select
          name={name}
          className="form-control"
          id={name}
          onChange={onChange}
          value={valor}
        >
          <option value="">Seleccione..</option>
          {opciones.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export const ElementForm = ({ sets, onChange }) => {
  const { label, type, name, placeholder, valor, opciones } = sets;

  if (!opciones)
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          className="form-control"
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          value={valor}
        />
      </div>
    );

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        className="form-control"
        id={name}
        onChange={onChange}
        value={valor}
      >
        {opciones.map((opcion) => (
          <option key={opcion.value} value={opcion.value}>
            {opcion.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const BotonSubmit = ({ label }) => {
  return (
    <div className="col-sm d-grid gap-2">
      <button type="submit" className="btn btn-block btn-primary">
        {label}
      </button>
    </div>
  );
};

export const BotoneraForm = ({ funcionCancelar, valorfuncion }) => {
  return (
    <div className="row">
      <BotonSubmit label="Guardar" />

      <div className="col-sm d-grid gap-2">
        <button
          type="button"
          className="btn btn-block btn-secondary"
          onClick={() => {
            funcionCancelar(valorfuncion);
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export const BotonEditar = ({ editar, item }) => {
  return (
    <button
      className="btn btn-info btn-sm"
      type="button"
      onClick={() => {
        editar(item);
      }}
    >
      <i className="fa fa-edit" style={{ color: "white" }}></i>
    </button>
  );
};

export const BotonEliminar = ({ eliminar, item }) => {
  return (
    <button
      className="btn btn-danger btn-sm"
      type="button"
      onClick={() => {
        eliminar(item);
      }}
    >
      <i className="fa fa-trash"></i>
    </button>
  );
};

export const BotonVer = ({ editar, item }) => {
  return (
    <button
      className="btn btn-info btn-sm"
      type="button"
      onClick={() => {
        editar(item);
      }}
    >
      <i className="fa fa-edit" style={{ color: "white" }}></i>
    </button>
  );
};

export const BotonAprobar = ({ editar, item }) => {
  return (
    <button
      className="btn btn-info btn-sm"
      type="button"
      onClick={() => {
        editar(item);
      }}
    >
      <i className="fa fa-check" style={{ color: "white" }}></i>Aprobar
    </button>
  );
};

export const BotonCancel = ({ editar, item }) => {
  return (
    <button
      style={{ backgroundColor: "red", borderColor: "red" }}
      className="btn btn-info btn-sm"
      type="button"
      onClick={() => {
        editar(item);
      }}
    >
      <i className="fa fa-remove" style={{ color: "white" }}></i>Cancel
    </button>
  );
};

export const BotonTituloTabla = ({
  label,
  funcion,
  param,
  campoOrden,
  tipoOrden,
}) => {
  return (
    <>
      <button
        className="bg-transparent BotonTransparente"
        onClick={() => {
          funcion(param);
        }}
      >
        {label}
      </button>
      {campoOrden === param ? (
        <i
          className={`fa fa-angle-${
            tipoOrden === "desc" ? "up" : "down"
          } fa-2x`}
        ></i>
      ) : null}
    </>
  );
};

export const SelectSinLabel = ({ sets, onChange }) => {
  const { label, name, valor, opciones, disabled, requerido } = sets;

  return (
    <div className="form-group row p-2">
      <select
        disabled={disabled}
        name={name}
        className={` form-control ${
          (valor === "" || valor === "0") && requerido ? "is-invalid" : null
        }`}
        id={name}
        onChange={onChange}
        value={valor}
        style={{ padding: "0px" }}
      >
        <option value="">{label}</option>
        {opciones ? (
          <>
            {opciones.map((opcion) => (
              <option key={opcion.value} value={opcion.value}>
                {opcion.label}
              </option>
            ))}
          </>
        ) : null}
      </select>
    </div>
  );
};

export const TextArea = ({ sets, onChange }) => {
  const { label, name, placeholder, valor, rows, cols, disabled } = sets;

  return (
    <div className="form-group row p-2">
      <div className="col-sm-3">
        <label style={{ fontSize: "small" }} htmlFor={name}>
          {label}
        </label>
        <br></br>
      </div>
      <div className="col-sm-9">
        <textarea
          rows={rows}
          cols={cols}
          name={name}
          disabled={disabled}
          /*  className={`from-control ${
            !valor && requerido ? "is-invalid" : null
          }`} */
          className="form-control"
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          value={valor}
          style={{ borderRadius: "15px" }}
        ></textarea>
      </div>
    </div>
  );
};

export const LoginConGoogle = () => {
  return (
    <div className="row" style={{ padding: "10px" }}>
      <a
        className="btn btn-outline-dark"
        role="button"
        style={{ textTransform: "none" }}
        onClick={()=>signInWithGoogleRedirect()}
      >
        <img
          width="20px"
          style={{ marginBottom: "3px", marginRight: "5px" }}
          alt="Google sign-in"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
        />
        Login with Google
      </a>
    </div>
  );
};
