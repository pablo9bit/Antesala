import React, { useState, useEffect } from "react";
import {Boton} from '../layout/Estilos';
import {GoogleAnalytics, Spinner, useAlerta, useRest} from "../layout/Imports";


const Contacto = () => {
  GoogleAnalytics();
  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [inicio, setInicio] = useState(true);
  const [loading, load] = useRest();

  useEffect(() => {
    const alertar = () => {
     
    
      if (inicio) {
       // ocultarMensaje();
        setInicio(null);
        setAlerta(null);
      }
    };

    alertar();
  }, [loading, inicio, setAlerta]);

  const [DatosForm, LeerForm] = useState({
    email: "",
    asunto: "",
    mensaje: "",
    telefono: "",
  });

  const { email, asunto, mensaje, telefono } = DatosForm;

  const onChange = (e) => {
    LeerForm({
      ...DatosForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      email.trim() === "" ||
      asunto.trim() === "" ||
      mensaje.trim() === "" 
      ) {
      setAlerta({msg: "Email, Asunto y Mensaje son campos obligatorios", class: "danger"});
      return;
    }

  
    const api = {
      url: "/actions/email", type: "post", 
      datosJson: {email, asunto, mensaje, telefono}, 
      getParams: null,
      funcion: null,
    };

    load(api);
    setAlerta({msg: "Su Mensaje fue Enviado con Exito", class: "success"});
    //console.log('enviado');
  };

  return (
    <>
      <br></br>

      <h2 className="text-center">Contactanos</h2>
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
              <label htmlFor="asunto">Asunto</label>
              <input
                type="text"
                name="asunto"
                className="form-control"
                id="asunto"
                aria-describedby="emailHelp"
                placeholder="Ingrese el Asunto"
                onChange={onChange}
                value={asunto}
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
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                type="text"
                id="mensaje"
                name="mensaje"
                placeholder="Escriba su Mensaje"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={onChange}
                value={mensaje}
                rows="3"
              ></textarea>
            </div>

            {loading ? <Spinner /> : <MostrarAlerta />}

            <div className="form-group">
              <Boton type="submit" className=" btn btn-block btn-primary">
                Enviar Mensaje
              </Boton>
            </div>
          </form>
          <br></br>
          <br></br>
        </div>
        <div className="col-sm text-center">
          <br></br>
          <img
            src="./assets/images/flyerContactanos.PNG"
            width="70%"
            alt="contacto"
          />
        </div>
      </div>
    </>
  );
};

export default Contacto;
