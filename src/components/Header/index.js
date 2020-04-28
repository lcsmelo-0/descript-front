import React, { useState } from "react";
import { excludeData } from "../../services/auth";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { BrowserRouter } from "react-router-dom";

const Header = props => {
  const logout = () => {
    excludeData();
    window.location.reload(true);
  };
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink
              onClick={() => {
                logout();
              }}
            >
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
