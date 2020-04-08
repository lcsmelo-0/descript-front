import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import  Home  from '../_pages/home'
import login from '../_pages/login'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={login} />
  </Switch>
)
export default Routes