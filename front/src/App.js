import {
  Layout,
  ScrollToTop,
  Router,
  Switch,
  Route,
  AuthState
} from "./components/layout/Imports";

import PageError from "./components/pages/PageError";


function App() {
  return (
    <AuthState>
    <Router>
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={PageError} />
        </Switch>
      </Layout>
    </Router>
    </AuthState>
  );
}

export default App;
