import { useState, useContext } from 'react';
import {AuthContext, clienteAxios} from "../components/layout/Imports";


function useUsuarioAutenticado() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const authContext = useContext(AuthContext);
    const { usuarioAutenticadoData, usuarioAutenticadoError } = authContext;

    function init() {
        setData(null);
        setLoading(true);
        setLoading(false)
    }

    async function load() {
        init();
        setLoading(true);

        //if (localStorage.getItem('token')) {
            try {
                const result = await clienteAxios.get('/auth', ''); 
                setData(result.data.usuario);
                usuarioAutenticadoData(result.data.usuario)
            } catch (e) {
                //console.clear();
                setError(true);
                usuarioAutenticadoError(e);
            }
        //}
        setLoading(false);
    }

    return [data, loading, error, load];
}

export default useUsuarioAutenticado;