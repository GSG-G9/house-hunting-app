import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

function Input({ variant, type, onChange, ...rest }) {
  return (
    <TextField variant={variant} type={type} onChange={onChange} {...rest} />
  );
}

Input.propTypes = {
  variant: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
