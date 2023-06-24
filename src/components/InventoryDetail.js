import React from "react";
import PropTypes from "prop-types";
import coffeepouch from "./img/coffeepouch.jpeg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function InventoryDetail(props) {
  const { inventory, onClickingDelete } = props;

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={5}>
            <br />
            <h2>Inventory Details</h2>
            <br />
            <h3>
              <strong> Name:</strong> {inventory.name}
            </h3>
            <br />
            <li>
              <strong>Origin:</strong> {inventory.origin} ☕️{" "}
              <strong>Roast:</strong> {inventory.roast}{" "}
            </li>
            <br />
            <li>
              <strong>Price:</strong> ${inventory.price}
            </li>
            <br />
            <li>
              <strong>Quantity Available:</strong> {inventory.quantity}
            </li>
            <hr />
          </Col>
          <Col sm={7}>
            <img className="coffeePouch" src={coffeepouch} alt=""></img>
          </Col>
          <button className="btn btn-light" onClick={props.onClickingEdit}>
            Update Inventory Item Details
          </button>{" "}
          <br />
          <button
            className="btn btn-light"
            onClick={() => onClickingDelete(inventory.id)}
          >
            Delete Inventory Item
          </button>
          <hr />
        </Row>
      </Container>
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default InventoryDetail;
