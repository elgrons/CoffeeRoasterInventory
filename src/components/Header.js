import React from "react";
import wallpaper from "./img/wallpaper.jpeg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <React.Fragment>
      <img src={wallpaper} alt="Geo design for background" className="header-img"/>
      <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Coffee Roastery Wholesale Inventory Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Inventory List</Nav.Link>
            <NavDropdown title="Inventory Actions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Add Inventory Item</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                See Inventory Details
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </React.Fragment>
  );
}

export default Header;