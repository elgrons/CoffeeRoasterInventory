import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props){
  const { inventory, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h1>Inventory Details</h1><br />
      <h3>Name: {inventory.name}</h3><br />
      <li>Origin: {inventory.origin} | Roast: {inventory.roast} </li><br />
      <li>Price: {inventory.price}</li><br />
      <li>Quantity Available: {inventory.quantity}</li><hr />
      <button className="btn btn-light" onClick={ props.onClickingEdit }>Update Inventory Item Details</button> <br />
      <button className="btn btn-light" onClick={()=> onClickingDelete(inventory.id) }>Delete Inventory Item</button> 
      <hr/>
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default InventoryDetail;