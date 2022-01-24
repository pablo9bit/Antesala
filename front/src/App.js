import {
  Layout,
  ScrollToTop,
  Router,
  Switch,
  Route,
  RutaPrivadaInfo,
  RutaPrivada,
  FirebaseState,
  OrganizacionState,
} from "./components/layout/Imports";

import "./App.css";
import PageError from "./pages/PageError";

import CrearCuenta from "./components/auth/NuevaCuenta";
import Login from "./components/auth/Login";
import Home from "./pages/Home/";
import CompletarRegistro from "./components/auth/CompletarRegistro";
import ResetPassword from "./components/auth/ResetPassword";


import DashboardAdmin from "./components/backoffice/admin/Dashboard";
import DashboardOrg from "./components/backoffice/organizacion/Dashboard";
import FormPerfil from "./components/backoffice/organizacion/perfil/FormPerfil";
import Usuarios from "./components/backoffice/admin/organizacion/Usuarios";


function App() {
  return (
    <FirebaseState>
      <OrganizacionState>
      <Router>
        <Layout>
          <ScrollToTop />
          <Switch>
            <RutaPrivadaInfo exact path="/" component={Home} />

            <Route exact path="/crearCuenta" component={CrearCuenta} />
            <Route exact path="/completarRegistro" component={CompletarRegistro} />

            <Route exact path="/ingresar" component={Login} />
            <Route exact path="/resetpass" component={ResetPassword} />


            <RutaPrivada exact path="/admin" component={DashboardAdmin} />
            <RutaPrivada exact path="/admin/organizaciones" component={Usuarios} />
            <RutaPrivada exact path="/admin/organizaciones/:id" component={FormPerfil} />


            <RutaPrivada exact path="/org" component={DashboardOrg} />
            <RutaPrivada exact path="/org/perfil" component={FormPerfil} />

          </Switch>
        </Layout>
      </Router>
      </OrganizacionState>
    </FirebaseState>
  );
}

export default App;
