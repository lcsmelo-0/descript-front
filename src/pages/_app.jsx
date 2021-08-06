import Header from '../components/Header'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/main.css'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import storeConfig from '../store'

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={storeConfig.store}>
      <PersistGate persistor={storeConfig.persistor}>
        <Header />
        <Component className="App" {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  )
}

export default App
