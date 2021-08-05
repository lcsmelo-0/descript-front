import React from 'react'
import Routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'

const App = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  )
}

export default App
