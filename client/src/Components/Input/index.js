import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

function Input({ className, variant, type, onChange, ...rest }) {
  return (
    <TextField
      className={className}
      variant={variant}
      type={type}
      onChange={onChange}
      {...rest}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
