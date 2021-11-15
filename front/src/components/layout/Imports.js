
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";


import FirebaseContext from "../../context/firebase/FirebaseContext";
import FirebaseState from "../../context/firebase/FirebaseState";
import OrganizacionContext from "../../context/organizacion/OrganizacionContext";
import OrganizacionState from "../../context/organizacion/OrganizacionState";
/*
import SubastaContext from "../../context/subasta/SubastaContext";
import SubastaState from "../../context/subasta/SubastaState";
import UsuarioContext from "../../context/usuarios/UsuarioContext";
import UsuarioState from "../../context/usuarios/UsuarioState";
 */
import Layout from "./Layout";
import ScrollToTop from "./ScrollToTop";
import RutaPrivada from "../rutas/RutaPrivada";
import RutaPrivadaInfo from "../rutas/RutaPrivadaInfo";

import {
  useHistory,
  Link,
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import clienteAxios from "../../config/axios";
import axios from "axios";

//import { format, add } from "date-fns";

import useAlerta from "../../hooks/useAlerta";
import useUsuarioAutenticado from "../../hooks/useUsuarioAutenticado";
import Spinner from "./Spinner/Spinner";
import Tabla from "./Tabla/Tabla";
import Portal from "./Portal";

export { Link, NavLink, useHistory, Router, Switch, Route, Redirect ,RutaPrivada, RutaPrivadaInfo, useUsuarioAutenticado };
export { Swal, uuidv4 };
export { clienteAxios, axios };
//export { format, add };
export { Tabla, Portal, Layout, ScrollToTop, Spinner };



// contexts
export { FirebaseContext, FirebaseState, OrganizacionContext, OrganizacionState };


// hooks
export { useAlerta };
//export { useUsuarioAutenticado, useAlerta };
