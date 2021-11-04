import React, { useState, useContext, useEffect } from "react";
import { Spinner, useAlerta } from "../../layout/Imports";

const Home = () => {
  const [setAlerta, MostrarAlerta] = useAlerta(null);
  const [loadingLocal, setLoadingLocal] = useState(null);
  const [consultar, setConsultar] = useState(true);

  const [buscador, guardarBuscador] = useState({
    texto: "",
    idrubro: "",
  });

  return <div className="justify-content-center">home</div>;
};

export default Home;
