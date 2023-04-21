import React from "react";
import './App.css';
import './styles.css';
import Header from "./Header";
import InventoryControl from "./InventoryControl";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Container>
      <Header />
      <InventoryControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
