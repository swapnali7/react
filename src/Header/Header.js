import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';

class Header extends Component {
  render() {
    //let brand = <a href='#'>Project Name</a>;
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home"><i className="fa fa-shopping-bag fa-lg"><strong>NeoSTORE</strong></i></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem href="#">
            Home
          </NavItem>
        </Nav>
        <Navbar.Form pullLeft>
          <FormGroup>
          <InputGroup>
            <FormControl type="text" />
            <InputGroup.Addon>
              <i className="fa fa-search"></i>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        </Navbar.Form>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-shopping-bag fa-lg"></i>&nbsp;&nbsp;<span>Cart</span>&nbsp;&nbsp;<span className="badge"></span>
          </NavItem>
          <NavDropdown eventKey={3} title={<span><i className="fa fa-user fa-fw"></i></span>} id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}><i className="fa fa-sign-in fa-fw"></i> Login</MenuItem>
            <MenuItem eventKey={3.2}><i className="fa fa-user-plus fa-fw"></i> Register</MenuItem>
          </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
