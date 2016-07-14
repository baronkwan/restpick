import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap'

const Header = React.createClass({

  render () {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/"><span>Restpick</span></LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="about">
              <NavItem eventKey={1}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="lists">
              <NavItem eventKey={2}>Your Lists</NavItem>
            </LinkContainer>
            <LinkContainer to="users">
              <NavItem eventKey={3}>All Users</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">SignUp</NavItem>
            <NavItem eventKey={2} href="#">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

})

module.exports = Header
