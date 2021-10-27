import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "../common/NavBar";
import { Form } from "../../Form";

export const MainRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={NavBar} />
      <Route path="/FormElements" component={Form} />
      {/*<Route path="/page-2" component={PageTwo} />*/}
    </Switch>
  </Router>
);
