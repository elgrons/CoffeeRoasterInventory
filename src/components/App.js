import React from "react";
import "./App.css";
import "./styles.css";
import Header from "./Header";
import InventoryControl from "./InventoryControl";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import NewInventoryForm from "./NewInventoryForm";
import InventoryList from "./InventoryList";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Container>
            <Header />
          <InventoryControl />
            {InventoryList}
            {NewInventoryForm}
        </Container>
        </Router>
    </React.Fragment>
  );
}

export default App;
