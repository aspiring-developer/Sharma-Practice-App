import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home";
import TestPage from "./pages/testpage";

const Routes = () => {
  return (
    <>
      <h5> Routes page </h5>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" />
          <Redirect to="/home" />
          <Route exact path="/test" component={TestPage} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
