import {
  Layout,
  ScrollToTop,
  Router,
  Switch,
  Route,
  AuthState,
} from "./components/layout/Imports";
import { useState, useEffect } from "react";
import "./App.css";
import PageError from "./components/pages/PageError";
import CrearCuenta from "./components/auth/NuevaCuenta";
import Login from "./components/auth/Login";
import { onAuthStateChange } from "./config/firebase";

function App() {

  const [user, setUser] = useState({ loggedIn: false });
  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

  
  return (
      <AuthState>
        <Router>
          <Layout>
            <ScrollToTop />
            <Switch>
              <Route exact path="/" component={PageError} />
              <Route exact path="/crearCuenta/:tipo" component={CrearCuenta} />
              <Route exact path="/ingresar" component={Login} />
            </Switch>
          </Layout>
        </Router>
      </AuthState>
  );
}

export default App;
