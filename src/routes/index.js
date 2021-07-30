import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'

import Login from '../pages/login'
import Client from '../pages/client'
import Editor from '../pages/editor'
import Reviser from '../pages/reviser'
import Home from '../pages/home'
import Detail from '../pages/detail'
import ClientForm from '../pages/clientForm'
import Princing from '../pages/pricing'
import Faq from '../pages/faq'
import RegisterForm from '../pages/registerForm'
import PaymentForm from '../pages/payment'
import Whoami from '../pages/whoami'
import Terms from '../pages/terms'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/planos-e-precos" component={Princing} />
    <Route exact path="/como-funciona" component={Faq} />
    <Route exact path="/cadastrar" component={RegisterForm} />
    <Route exact path="/quem-somos" component={Whoami} />
    <Route exact path="/checkout" component={PaymentForm} />
    <Route exact path="/termos" component={Terms} />
    <PrivateRoute exact path="/editor" component={Editor} />
    <PrivateRoute exact path="/client" component={Client} />
    <PrivateRoute exact path="/reviser" component={Reviser} />
    <PrivateRoute exact path="/detail/:id" component={Detail} />
    <PrivateRoute exact path="/client/image" component={ClientForm} />
  </Switch>
)

export default Routes
