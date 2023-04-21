import React from "react";
import PropTypes from "prop-types";

export default function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          required='required'
          placeholder='Coffee Bean Name' /><br />
          <input
          type='text'
          name='origin'
          required='required'
          placeholder='Coffee Bean Origin' /><br />
          <input
          type='text'
          name='roast'
          required='required'
          placeholder='Light, Medium or Dark Roast' /><br />
          <input
          type='number'
          name='price'
          required='required'
          placeholder='1' /><br />
        <input
          type='number'
          name='quantity'
          required='required'
          placeholder='1' /><br />
        <button className="btn btn-light" type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};