import React from "react";
import wallpaper from "./img/roasted-beans.jpg";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const StyledHeader = styled.header`
width: 100vw;
max-width: 100vw;
height: var(--header-height);
min-height: 72vh;
display: flex;
align-items: center;
padding: 0 2rem;
flex-direction: column;
font-size: calc(8px + 1.2vmin);
justify-content: center;
align-items: center;
`;

function Header() {
  return (
    <React.Fragment>
      <div className="backgroundImg">
      <StyledHeader>
        <a id="home" />
        <div class="styled-navbar">
        <Navbar fixed="top" bg="light" expand="lg">
          <Container>
            <Navbar.Brand mb-0 h1 href="/">
              Coffee Roastery Wholesale Inventory Tracker
            </Navbar.Brand>
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
        </div>
      </StyledHeader>
      </div>
    </React.Fragment>
  );
}

export default Header;
