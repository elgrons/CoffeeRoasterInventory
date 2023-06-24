import React from "react";
import "./App.css";
import "./styles.css";
import Header from "./Header";
import InventoryControl from "./InventoryControl";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import NewInventoryForm from "./NewInventoryForm";
import InventoryList from "./InventoryList";

const StyledHeader = styled.header`
  flex-direction: column;
  font-size: calc(8px + 2vmin);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function App() {
  return (
    <React.Fragment>
      <Router>
        <Container>
          <StyledHeader>
            <Header />
          </StyledHeader>
          <InventoryControl />
            {InventoryList}
            {NewInventoryForm}
        </Container>
        </Router>
    </React.Fragment>
  );
}

export default App;
