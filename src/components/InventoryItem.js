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
    <h3>Name: {props.name}</h3><br />
    <li>Origin: {props.origin} | Roast: {props.roast} </li><br />
    <li>Price: {props.price}</li><br />
    <li>Quantity Available: {props.quantity}</li>
    <button className="btn btn-block btn-lg btn-dark" onClick={handleClick}>Vend Inventory</button>
    </>
  }

  return (
    <React.Fragment>
      <div onClick={() => props.onInventorySelect(props.id)}>
      {inventoryDisplay}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="number" min="1" max="100" name="quantity" className="form-control"/>
      <button className="btn btn-outline-dark">Restock Inventory</button>
      </form>
    </React.Fragment>
  );
}

InventoryItem.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  onVendInventory: PropTypes.func,
  onRestockInventory: PropTypes.func,
  onInventorySelect: PropTypes.func
}

export default InventoryItem;