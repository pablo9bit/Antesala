import { useEffect, useState, useContext } from "react";
import { Route } from "react-router-dom";
import { AppContext } from "../shared/Imports";


const RutaPrivadaInfo = ({ component: Component, ...props }) => {
  const [consultar, setconsultar] = useState(true);
  const appContext = useContext(AppContext);
  const { usuarioAutenticado } = appContext;
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const [loadingLocal, setLoadingLocal] = useState(null);

  useEffect(() => {
    if (consultar) {
      setconsultar(false);
      usuarioAutenticado(setLoadingLocal, setData, setError);
    }
  }, [consultar]);

  if (!loadingLocal) {
    return <Route {...props} render={(props) => <Component {...props} />} />;
  }

  return <div className="loading"></div>;
};

export default RutaPrivadaInfo;
