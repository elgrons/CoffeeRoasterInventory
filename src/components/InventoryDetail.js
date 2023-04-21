import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props){
  const { inventory, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h1>Inventory Details</h1><br />
      <h2><strong>Name:</strong> {inventory.name}</h2><br />
      <li><strong>Origin:</strong> {inventory.origin} | <strong>Roast:</strong> {inventory.roast} </li><br />
      <li><strong>Price:</strong> ${inventory.price}</li><br />
      <li><strong>Quantity Available:</strong> {inventory.quantity}</li><hr />
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