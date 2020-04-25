import React from 'react'
import { Router } from 'react-router-dom'

import history from './services/history'
import Routes from './routes'

import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import "./assets/css/custom.css"

function App() {
  return (
    <>
    <Router history={history}>
      <Routes />
    </Router>

   </>
  );
}

export default App;
