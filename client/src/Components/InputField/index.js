import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import useStyles from './style';

function InputField({ className, variant, label, component }) {
  const classes = useStyles();
  return (
    <div>
      <TextField
        className={className}
        variant={variant}
        label={label}
        component={component}
      />
    </div>
  );
}
InputField.propTypes = {
  className: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
};

export default InputField;
