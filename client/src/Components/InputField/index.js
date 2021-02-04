import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import useStyles from './style';

function InputField({ className, variant, label }) {
  const classes = useStyles();
  return (
    <div>
      <TextField
        className={`${classes.root} ${className}`}
        variant={variant}
        label={label}
      />
    </div>
  );
}
InputField.propTypes = {
  className: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputField;
