import {
  Layout,
  ScrollToTop,
  Router,
  Switch,
  Route,
  AuthState
} from "./components/layout/Imports";

import './App.css';
import PageError from "./components/pages/PageError";
import CrearCuenta from "./components/auth/NuevaCuenta";


function App() {
  return (
    <AuthState>
    <Router>
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={PageError} />
          <Route exact path="/crearCuenta/:tipo" component={CrearCuenta} />

        </Switch>
      </Layout>
    </Router>
    </AuthState>
  );
}

export default App;
