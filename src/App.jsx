import React from "react";
import Login from "./Login";
import Register from "./Register";
import PageNotFound from "./PageNotFound";
import Dashboard from "./Dashboard";
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import Navbar from "./Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Register" component={Register} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
