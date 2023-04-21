import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditInventoryForm (props) {
  const { inventory } = props;

  function handleEditInventoryFormSubmission(event) {
    event.preventDefault();
    props.onEditInventory({name: event.target.name.value, origin: event.target.origin.value, roast: event.target.roast.value, price: parseInt(event.target.price.value), quantity: parseInt(event.target.quantity.value), id: inventory.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditInventoryFormSubmission} 
        className="btn btn-light" buttonText="Update Inventory Details" />
    </React.Fragment>
  );
}

EditInventoryForm.propTypes = {
  onEditInventory: PropTypes.func,
  inventory: PropTypes.object
};

export default EditInventoryForm;