import { useState, useContext } from "react";
import {
  FirebaseContext
} from "../components/layout/Imports";

function useUsuarioAutenticado() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const authContext = useContext(FirebaseContext);
  const {usuarioAutenticado} = authContext;

  function init() {
    setData(null);
    //setLoading(true);
    setLoading(false);
    setError(false);
  }

  async function load() {
    init();
    usuarioAutenticado(setLoading, setData, setError);
  }

  return [data, loading, error, load];
}

export default useUsuarioAutenticado;
