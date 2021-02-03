import React from "react";
import { Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";

import Login from "../pages/login";
import Client from "../pages/client";
import Editor from "../pages/editor";
import Reviser from "../pages/reviser";
import Home from "../pages/home";
import Detail from "../pages/detail";
import ClientForm from "../pages/clientForm";
import Princing from "../pages/pricing";
import Faq from "../pages/faq";
import RegisterForm from "../pages/registerForm";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/pricing" component={Princing} />
    <Route exact path="/faq" component={Faq} />
    <Route exact path="/register" component={RegisterForm} />
    <PrivateRoute exact path="/editor" component={Editor} />
    <PrivateRoute exact path="/client" component={Client} />
    <PrivateRoute exact path="/reviser" component={Reviser} />
    <PrivateRoute exact path="/detail/:id" component={Detail} />
    <PrivateRoute exact path="/client/image" component={ClientForm} />
  </Switch>
);

export default Routes;
