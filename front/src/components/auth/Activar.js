import React, { useEffect, useState, useContext } from "react";
import {AuthContext, useAlerta, useRest, Spinner, Link} from "../layout/Imports";

const Activar = (props) => {
  const code = props.match.params.code;

  const authContext = useContext(AuthContext);
  const { activarCuenta, ocultarMensaje, mensaje } = authContext;

  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loading, load] = useRest();
  const [consultar, setConsultar] = useState(true);
  const [inicio, setInicio] = useState(true);
  const [mostrarLink, setMostrarLink] = useState(null);

  useEffect(() => {
    const validar = () => {
      if (consultar) {
        setConsultar(false);
        // eslint-disable-next-line
        ocultarMensaje();

        const api = {
          url: "/auth/activar", type: "get", datosJson: null, 
          getParams: {id: code},
          funcion: activarCuenta,
       };
       //"/auth/activar", "get", null, code, activarCuenta

        /* eslint-disable */
        load(api);
      }
    };
    const alertar = () => {
      if (loading) {
        setAlerta(null);
      }
      if (inicio) {
        // eslint-disable-next-line
        ocultarMensaje();
        setInicio(null);
        setAlerta(null);
      } else {
        if (mensaje.msg && !loading) {
          setAlerta({ msg: mensaje.msg, class: mensaje.class });
          if (mensaje.class === "success") {
            setMostrarLink(true);
          }
        }
      }
    };

    alertar();
    validar();
  }, [consultar, code, loading, inicio, mensaje, activarCuenta, setAlerta, ocultarMensaje]);

  return (
    <div className="center-block">
      <br></br>
      <h2 className="text-center">Activación de Cuenta</h2>
      <br></br>
      <br></br>

      {loading ? <Spinner /> : !inicio ? <MostrarAlerta /> : null}
      <br></br>

      {mostrarLink ? (
        <p className="text-center">
          <Link aria-label="Ingresar" to="/login">Ingresar</Link>
        </p>
      ) : null}

    </div>
  );
};

export default Activar;
