import React from 'react';
import PropTypes from 'prop-types';


function TextInput (props) {

  //if there is an error in props it would be red and handled by bootstrap 
  // has-error class
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
}

  return (
    <div className={wrapperClass}>
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <input
            id={props.id}
            type="text"
            onChange={props.onChange}
            name={props.name}
            className="form-control"
            value={props.value}          />
        </div>
        {props.error && <div className="alert alert-danger">{props.error} </div>}
    </div>
  ); 
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

TextInput.defaultProps = {
  error: ""
};

export default TextInput;