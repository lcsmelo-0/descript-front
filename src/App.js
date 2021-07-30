import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import Routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
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
