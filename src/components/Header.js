import React from "react";
import wallpaper from "./img/wallpaper.jpeg";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <React.Fragment>
      <a id="home" />
      <img src={wallpaper} alt="Geo design for background" className="img-rounded shadow-2-strong"/>
      <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Coffee Roastery Wholesale Inventory Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#inventorylist">Inventory List</Nav.Link>
          <Nav.Link href="#addinventory">Add Inventory</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </React.Fragment>
  );
}

export default Header;