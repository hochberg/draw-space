import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "../HomePage";
import Easel from "../Easel";

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/easel">
          <Easel />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
