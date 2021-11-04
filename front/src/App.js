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

function App() {
  return (
    <FirebaseState>
      <AuthState>
        <Router>
          <Layout>
            <ScrollToTop />
            <Switch>
              <RutaPrivadaInfo exact path="/" component={Home} />
              <Route exact path="/crearCuenta/:tipo" component={CrearCuenta} />
              <Route exact path="/ingresar" component={Login} />
            </Switch>
          </Layout>
        </Router>
      </AuthState>
    </FirebaseState>
  );
}

export default App;
