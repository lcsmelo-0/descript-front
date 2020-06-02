import React, { useState } from "react"
import logo from '../../assets/img/logo.png'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"

import { excludeData } from "../../services/auth"

const Header = () => {

  //const { user } = useSelector(state => state.user)
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    console.log('toggle')
    setCollapsed(!collapsed)
  }

  const logout = () => {
    excludeData();
    window.location.reload(true);
  };


  return (
    <header className="" id="header-main">
      <nav className="navbar navbar-main navbar-expand-lg navbar-light" id="navbar-main">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} />
          </a>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-collapse-overlay" isOpen={!collapsed} id="navbar-main-collapse">
            <div className="position-relative">
              <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbar-main-collapse" ariaControls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item nav-item-spaced dropdown dropdown-animate" dataToggle="hover">
                <a className="nav-link" href="/pricing" role="button" dataToggle="dropdown" aria-haspopup="true" aria-expanded="false">Planos e preços</a>
              </li>
              <li className="nav-item nav-item-spaced dropdown dropdown-animate" dataToggle="hover">
                <a className="nav-link" href="/faq" role="button" dataToggle="dropdown" aria-haspopup="true" aria-expanded="false">Como funciona</a>
              </li>
              <li className="nav-item nav-item-spaced dropdown dropdown-animate" dataToggle="hover">
                <a className="nav-link" href="#" role="button" dataToggle="dropdown" aria-haspopup="true" aria-expanded="false">Termos</a>
              </li>
            </ul>
            <ul className="navbar-nav align-items-lg-center d-none d-lg-flex ml-lg-auto">
              <li className="nav-item">
                {localStorage.getItem('front-descript') ? (<a onClick={logout}>Logout</a>) : (<a href="/login">Login</a>)}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Navbar color="faded" className="navbar navbar-main container navbar-expand-lg navbar-light" light>
        <NavbarBrand href="/" className="mr-auto"><img alt="logo" src={logo} /></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="navbar-nav ml-lg-auto" navbar>
            <NavItem>
              <NavLink href="/pricing">Planos e preços</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/faq">Como Funciona</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/termos">Termos</NavLink>
            </NavItem>
          </Nav>
          <Nav className="navbar-nav align-items-lg-center d-none d-lg-flex ml-lg-auto">
            <NavItem>
              <>
                {localStorage.getItem('front-descript') ? (<NavLink onClick={logout}>Logout</NavLink>) : (<NavLink href="/login">Login</NavLink>)}
              </>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar> */}
    </header>
  )
}

export default Header
