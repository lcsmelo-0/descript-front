import React from 'react';
import { Router } from 'react-router-dom'

import Routes from './_routes'
import history from './_services/history'

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
