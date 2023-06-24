import React from "react";
import PropTypes from "prop-types";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

export default function ReusableForm(props) {
  return (
    <React.Fragment>
      <Row>
          <Col>
      <form onSubmit={props.formSubmissionHandler}>
        <Form.Control
          type='text'
          name='name'
          required='required'
          placeholder='Coffee Bean Name' /><br />
          <Form.Control
          type='text'
          name='origin'
          required='required'
          placeholder='Coffee Bean Origin' /><br />
          <Form.Control
          type='text'
          name='roast'
          required='required'
          placeholder='Light, Medium or Dark Roast' /><br />
          <Form.Control
          type='number'
          name='price'
          required='required'
          placeholder='Price: $14' /><br />
        <Form.Control
          type='number'
          name='quantity'
          required='required'
          placeholder='Quantity: 12' /><br />
        <button className="btn btn-light" type='submit'>{props.buttonText}</button>
      </form>
      </Col>
      </Row>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};