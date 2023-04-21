import React from "react";
import PropTypes from "prop-types";

export default function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Coffee Bean Name' /><br />
          <input
          type='text'
          name='origin'
          placeholder='Coffee Bean Origin' /><br />
          <input
          type='text'
          name='roast'
          placeholder='Light, Medium or Dark Roast' /><br />
          <input
          type='number'
          name='price'
          placeholder='1' /><br />
        <input
          type='number'
          name='quantity'
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