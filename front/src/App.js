import {
  Layout,
  ScrollToTop,
  Router,
  Switch,
  Route,
  AuthState,
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

function App() {
  return (
    <FirebaseState>
      <AuthState>
        <Router>
          <Layout>
            <ScrollToTop />
            <Switch>
              <RutaPrivadaInfo exact path="/" component={Home} />
              <Route exact path="/crearCuenta" component={CrearCuenta} />
              <Route exact path="/completarRegistro" component={CompletarRegistro} />

              <Route exact path="/ingresar" component={Login} />
            </Switch>
          </Layout>
        </Router>
      </AuthState>
    </FirebaseState>
  );
}

export default App;
