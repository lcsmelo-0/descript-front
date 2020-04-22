import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './config/reactotron'
import storeConfig from './store'
import App from './App'

ReactDOM.render(
  <Provider store={storeConfig.store}>
    <PersistGate persistor={storeConfig.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

