import React from "react";
import PropTypes from "prop-types";

function InventoryItem(props){

  function handleClick() {
    return props.onVendInventory(props.id);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.quantity.value);
    return props.onRestockInventory(props.id, parseInt(event.target.quantity.value));
    }

  let inventoryDisplay = null;
  if (props.quantity <= 0) {
    inventoryDisplay = <h4>{props.name} is <strong>Out of Stock</strong></h4>
  } else {
    inventoryDisplay =
    <>
    <h2><strong>Name:</strong> {props.name}</h2><br />
    <li><strong>Origin:</strong> {props.origin} | <strong>Roast:</strong> {props.roast} </li><br />
    <li><strong>Price:</strong> ${props.price}</li><br />
    <li><strong>Quantity Available:</strong> {props.quantity}</li><hr />
    </>
  }

  return (
    <React.Fragment>
      <div onClick={() => props.onInventorySelect(props.id)}>
      {inventoryDisplay}
      </div>
      <button className="btn btn-outline-dark" onClick={handleClick}>Vend Inventory</button>
      <form onSubmit={handleSubmit}>
        <input type="number" required min="1" max="100" name="quantity" placeholder="1" className="form-control"/>
      <button className="btn btn-outline-dark">Restock Inventory</button>
      </form>
    </React.Fragment>
  );
}

InventoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  onVendInventory: PropTypes.func,
  onRestockInventory: PropTypes.func,
  onInventorySelect: PropTypes.func
}

export default InventoryItem;