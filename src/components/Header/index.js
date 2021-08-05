import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import { Link, HashRouter } from 'react-router-dom'
import { excludeData } from '../../services/auth'

const Header = () => {
  //const { user } = useSelector(state => state.user)
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    console.log('toggle')
    setCollapsed(!collapsed)
  }

  const logout = () => {
    excludeData()
    window.location.reload(true)
  }

  return (
    <HashRouter>
      <header className="" id="header-main">
        <nav className="navbar navbar-main navbar-expand-lg navbar-light" id="navbar-main">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo do descript" />
            </Link>
            <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navbar-collapse-overlay"
              isOpen={!collapsed}
              id="navbar-main-collapse"
            >
              <div className="position-relative">
                <button
                  className="navbar-toggler"
                  type="button"
                  dataToggle="collapse"
                  dataTarget="#navbar-main-collapse"
                  ariaControls="navbar-main-collapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <ul className="navbar-nav ml-lg-auto">
                <li className="nav-item nav-item-spaced dropdown dropdown-animate" dataToggle="hover">
                  <Link
                    className="nav-link"
                    to="/planos-e-precos"
                    role="button"
                    dataToggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Planos e preços
                  </Link>
                </li>
                <li className="nav-item nav-item-spaced dropdown dropdown-animate" dataToggle="hover">
                  <Link
                    className="nav-link"
                    to="/como-funciona"
                    role="button"
                    dataToggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Como funciona
                  </Link>
                </li>
                <li className="nav-item nav-item-spaced dropdown dropdown-animate" dataToggle="hover">
                  <Link
                    className="nav-link"
                    to="/quem-somos"
                    role="button"
                    dataToggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Quem somos
                  </Link>
                </li>
                <li className="nav-item nav-item-spaced dropdown dropdown-animate" dataToggle="hover">
                  <Link
                    className="nav-link"
                    to="/termos"
                    role="button"
                    dataToggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Termos
                  </Link>
                </li>
                <li className="nav-item nav-item-spaced dropdown dropdown-animate" dataToggle="hover">
                  <Link
                    className="nav-link"
                    to="/faq"
                    role="button"
                    dataToggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Perguntas frequentes
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav align-items-lg-center d-none d-lg-flex ml-lg-auto">
                <li className="nav-item">
                  {localStorage.getItem('front-descript') ? (
                    <Link to="/logout" onClick={logout}>
                      Logout
                    </Link>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </HashRouter>
  )
}

export default Header
