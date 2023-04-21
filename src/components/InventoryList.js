import React from "react";
import InventoryItem from "./InventoryItem";
import PropTypes from "prop-types";

function InventoryList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.inventoryList.map((inventory) =>
        <InventoryItem
          name={inventory.name}
          origin={inventory.origin}
          roast={inventory.roast}
          price={inventory.price}
          quantity={inventory.quantity}
          onVendInventory={props.onVendInventory}
          onRestockInventory={props.onRestockInventory}
          onInventorySelect={props.onInventorySelect}
          id={inventory.id}
          key={inventory.id}/>
      )}
    </React.Fragment>
  );
}

InventoryList.propTypes = {
  inventoryList: PropTypes.array,
  onVendInventory: PropTypes.func,
  onRestockInventory: PropTypes.func,
  onInventorySelect: PropTypes.func
};

export default InventoryList;