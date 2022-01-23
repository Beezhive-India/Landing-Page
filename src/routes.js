import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import IndexPage from "./pages";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/terms" component={Terms} />
        </Switch>
      </Router>
    );
  }
}

export default App;
