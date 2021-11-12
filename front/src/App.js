import {
  Layout,
  ScrollToTop,
  Router,
  Switch,
  Route,
  RutaPrivadaInfo,
  RutaPrivada,
  FirebaseState,
} from "./components/layout/Imports";

import "./App.css";
import PageError from "./components/pages/PageError";

import CrearCuenta from "./components/auth/NuevaCuenta";
import Login from "./components/auth/Login";
import Home from "./components/pages/Home/Home";
import CompletarRegistro from "./components/auth/CompletarRegistro";
import ResetPassword from "./components/auth/ResetPassword";


import DashboardAdmin from "./components/backoffice/admin/Dashboard";
import DashboardOrg from "./components/backoffice/organizacion/Dashboard";



function App() {
  return (
    <FirebaseState>
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
            <RutaPrivada exact path="/org" component={DashboardOrg} />
          </Switch>
        </Layout>
      </Router>
    </FirebaseState>
  );
}

export default App;
