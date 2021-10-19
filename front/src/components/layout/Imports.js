import Swal from "sweetalert2";
import styled from "@emotion/styled";
import ReactGA from "react-ga";
import GoogleAnalytics from "../rutas/GoogleAnalytics";

import AuthContext from "../../context/autenticacion/authContext";
import AuthState from "../../context/autenticacion/authState";
import SubastaContext from "../../context/subasta/SubastaContext";
import SubastaState from "../../context/subasta/SubastaState";
import UsuarioContext from "../../context/usuarios/UsuarioContext";
import UsuarioState from "../../context/usuarios/UsuarioState";

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
import { v4 as uuidv4 } from "uuid";
//import { format, add } from "date-fns";

import useRest from "../../hooks/useRest";
import useAlerta from "../../hooks/useAlerta";
import useUsuarioAutenticado from "../../hooks/useUsuarioAutenticado";
import Spinner from "./Spinner";
import Tabla from "./Tabla/Tabla";
import Portal from "./Portal";

export { ReactGA, GoogleAnalytics };
export { Link, NavLink, useHistory, Router, Switch, Route, Redirect };
export { Swal, uuidv4, styled };
export { clienteAxios, axios };
//export { format, add };
export {
  Tabla,
  Portal,
  Layout,
  ScrollToTop,
  RutaPrivada,
  RutaPrivadaInfo,
  Spinner,
  useRest,
};

// contexts

export {
  AuthContext,
  AuthState,
  SubastaContext,
  SubastaState,
  UsuarioContext,
  UsuarioState,
};

// hooks

export { useUsuarioAutenticado, useAlerta };


