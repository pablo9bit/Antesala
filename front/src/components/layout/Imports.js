import Swal from "sweetalert2";
/* import styled from "@emotion/styled";
import ReactGA from "react-ga";
import GoogleAnalytics from "../rutas/GoogleAnalytics";
 */
 import AuthContext from "../../context/auth/AuthContext";
 import AuthState from "../../context/auth/AuthState";

 /*
import SubastaContext from "../../context/subasta/SubastaContext";
import SubastaState from "../../context/subasta/SubastaState";
import UsuarioContext from "../../context/usuarios/UsuarioContext";
import UsuarioState from "../../context/usuarios/UsuarioState";
 */
import Layout from "./Layout";
import ScrollToTop from "./ScrollToTop";
//import RutaPrivada from "../rutas/RutaPrivada";
//import RutaPrivadaInfo from "../rutas/RutaPrivadaInfo";

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
//import { v4 as uuidv4 } from "uuid";
//import { format, add } from "date-fns";

//import useRest from "../../hooks/useRest";
import useAlerta from "../../hooks/useAlerta";
//import useUsuarioAutenticado from "../../hooks/useUsuarioAutenticado";
import Spinner from "./Spinner/Spinner";
import Tabla from "./Tabla/Tabla";
import Portal from "./Portal";

//export { ReactGA, GoogleAnalytics };
export { Link, NavLink, useHistory, Router, Switch, Route, Redirect };
export { Swal };
export { clienteAxios, axios };
//export { format, add };
export {
  Tabla,
  Portal,
  Layout,
  ScrollToTop,
  Spinner,
};

// contexts

 export {
  AuthContext,
  AuthState,
};

// hooks

//export { useUsuarioAutenticado, useAlerta };
