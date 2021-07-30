import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'

const SidebarDashboard = () => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    console.log('toggle')
    setCollapsed(!collapsed)
  }

  const { loggedIn } = useSelector(state => state.user)
  return (
    <>
      {loggedIn ? (
        <>
          <section className="sidebar">
            <Navbar color="faded" expand="md">
              <NavbarToggler onClick={toggleNavbar} className="mr-2" />
              <Collapse isOpen={!collapsed} navbar>
                <Nav vertical navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default SidebarDashboard
