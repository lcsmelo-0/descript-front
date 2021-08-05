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
import HowItWorks from '../pages/HowItWorks'
import RegisterForm from '../pages/RegisterForm'
import PaymentForm from '../pages/Payment'
import WhoWeAre from '../pages/WhoWeAre'
import Terms from '../pages/terms'
import Faq from '../pages/Faq'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/planos-e-precos" component={Princing} />
    <Route exact path="/como-funciona" component={HowItWorks} />
    <Route exact path="/cadastrar" component={RegisterForm} />
    <Route exact path="/quem-somos" component={WhoWeAre} />
    <Route exact path="/checkout" component={PaymentForm} />
    <Route exact path="/termos" component={Terms} />
    <Route exact path="/faq" component={Faq} />
    <PrivateRoute exact path="/editor" component={Editor} />
    <PrivateRoute exact path="/client" component={Client} />
    <PrivateRoute exact path="/reviser" component={Reviser} />
    <PrivateRoute exact path="/detail/:id" component={Detail} />
    <PrivateRoute exact path="/client/image" component={ClientForm} />
  </Switch>
)

export default Routes
