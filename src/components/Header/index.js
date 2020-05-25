import React, { useState } from "react";
import { excludeData } from "../../services/auth";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, NavbarToggler, Container } from "reactstrap";
import { BrowserRouter } from "react-router-dom";
import Logo from "../icons/Logo";

import logo from '../../assets/img/logo.png'

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>
    setIsOpen(!isOpen);
  return (
    <header className="" id="header-main">

      <nav className="navbar navbar-main navbar-expand-lg navbar-light" id="navbar-main">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-collapse-overlay" id="navbar-main-collapse">
            <div className="position-relative">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover">
                <a className="nav-link" href="/pricing" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Planos e preços</a>
              </li>
              <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover">
                <a className="nav-link" href="/faq" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Como funciona</a>
              </li>
              <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover">
                <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Termos</a>
              </li>
            </ul>
            <ul className="navbar-nav align-items-lg-center d-none d-lg-flex ml-lg-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

  );
};

export default Header;
