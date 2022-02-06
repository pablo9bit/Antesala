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
import test from "./components/test";
import Entradas from "./pages/Entradas";
import Somos from "./pages/Somos";
import Cartelera from "./pages/Cartelera";
import Contenidos from "./pages/Contenidos";
import Teatros from "./pages/Teatros";
import Cursos from "./pages/Cursos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <FirebaseState>
      <OrganizacionState>
        <Router>
          <Layout>
            <ScrollToTop />
            <Switch>
              <RutaPrivadaInfo exact path="/" component={Home} />
              <RutaPrivadaInfo exact path="/entradas" component={Entradas} />
              <RutaPrivadaInfo exact path="/somos" component={Somos} />
              <RutaPrivadaInfo exact path="/cartelera" component={Cartelera} />
              <RutaPrivadaInfo exact path="/contenidos" component={Contenidos} />
              <RutaPrivadaInfo exact path="/teatros" component={Teatros} />
              <RutaPrivadaInfo exact path="/cursos" component={Cursos} />
              <RutaPrivadaInfo exact path="/contacto" component={Contacto} />

              <Route exact path="/crearCuenta" component={CrearCuenta} />
              <Route
                exact
                path="/completarRegistro"
                component={CompletarRegistro}
              />

              <Route exact path="/ingresar" component={Login} />
              <Route exact path="/resetpass" component={ResetPassword} />

              <RutaPrivada exact path="/admin" component={DashboardAdmin} />
              <RutaPrivada
                exact
                path="/admin/organizaciones"
                component={Usuarios}
              />
              <RutaPrivada
                exact
                path="/admin/organizaciones/:id"
                component={FormPerfil}
              />

              <RutaPrivada exact path="/org" component={DashboardOrg} />
              <RutaPrivada exact path="/org/perfil" component={FormPerfil} />

              <Route exact path="/test" component={test} />
            </Switch>
          </Layout>
        </Router>
      </OrganizacionState>
    </FirebaseState>
  );
}

export default App;
