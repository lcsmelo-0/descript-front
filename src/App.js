import React from 'react'

import { Router, Route, Redirect } from 'react-router-dom'

import history from './_services/history'
import { Home, Dashboard, Login } from './_pages'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)
const App = () => {
  return (
    <>
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    </>
  )
}

export default App
