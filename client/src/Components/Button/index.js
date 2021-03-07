import React from 'react';
import Button from '@material-ui/core/Button';
import { PropTypes } from 'prop-types';

export default function CustomButton({ children, variant, color, ...rest }) {
  return (
    <Button variant={variant} color={color} {...rest}>
      {children}
    </Button>
  );
}
CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
