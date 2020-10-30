import React from 'react';
import {
  Navbar, Nav, Form, Button,
} from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand>Type-speed</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Game</Nav.Link>
          <Nav.Link>Leaderboard</Nav.Link>
          <Nav.Link>About</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-success" className="mr-2">Sign In</Button>
          <Button variant="outline-success">Register</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;
