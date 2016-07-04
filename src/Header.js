import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'

const Header = (props) => (
  <Navbar inverse saticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Restpick</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Text>
        Signed in as: <Navbar.Link href="#">Baron Kwan</Navbar.Link>
      </Navbar.Text>
      <Nav pullRight>
        <Nav>
          <NavItem eventKey={1} href="#">Account</NavItem>
          <NavItem eventKey={2} href="#">Your Lists</NavItem>
          <NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Contact us</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

module.exports = Header
