import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewInventoryForm(props){

  function handleNewInventoryFormSubmission(event) {
    event.preventDefault();
    props.onNewInventoryCreation({name: event.target.name.value, origin: event.target.origin.value, roast: event.target.roast.value, price: parseInt(event.target.price.value), quantity: parseInt(event.target.quantity.value), id: v4()});
  }

  return (
    <React.Fragment>
      <a id="addinventory" />
      <ReusableForm 
        formSubmissionHandler={handleNewInventoryFormSubmission}
        className="btn btn-light" buttonText="Save" />
    </React.Fragment>
  );
}

NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default NewInventoryForm;