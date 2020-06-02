import React from "react"
import { Router } from "react-router-dom"

import history from "./services/history"
import Routes from "./routes"

//import "./assets/scss/black-dashboard-react.scss"
// import "./assets/demo/demo.css"
// import "./assets/css/nucleo-icons.css"
import "./assets/css/main.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {

  return (
    <>
      <Header />
      <Router history={history}>
        <Routes />
      </Router>
      <Footer />
    </>
  )
}

export default App
