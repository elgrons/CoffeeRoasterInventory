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
      <div className="App min-vh-100 d-flex justify-content-center align-items-center">
      <Container>
      <Header />
      <InventoryControl />
      </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
