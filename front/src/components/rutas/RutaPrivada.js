import { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useUsuarioAutenticado} from "../shared/Imports";

const RutaPrivada = ({ component: Component, ...props }) => {

    const [data, loading, error, load] = useUsuarioAutenticado();
    const [consultar, setconsultar] = useState(true);

    useEffect(() => {
        if(consultar){
            setconsultar(false);
            load();
        }
    },[consultar, load]);

    if (!loading) {
        if (error) {
            sessionStorage.setItem("path", props.path);
            return (<Route {...props} render={props => <Redirect to="/ingresar" />} />)
        }
        if (data) {
            sessionStorage.removeItem("path");
            return (<Route {...props} render={props => <Component {...props} />} />);            
        }
    }

    return (<div className="loading"></div>)
}

export default RutaPrivada;