import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'

import Login from '../pages/login'
import Client from '../pages/client'
import Editor from '../pages/editor'
import Reviser from '../pages/reviser'
import Home from '../pages/home'
import Detail from '../pages/detail'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <PrivateRoute exact path='/editor' component={Editor} />
    <PrivateRoute exact path='/client' component={Client} />
    <PrivateRoute exact path='/reviser' component={Reviser} />
    <PrivateRoute exact path='/detail/:id' component={Detail} />
  </Switch>
)

export default Routes