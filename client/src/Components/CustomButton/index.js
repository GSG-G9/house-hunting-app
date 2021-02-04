import React from 'react';
import Button from '@material-ui/core/Button';
import { PropTypes } from 'prop-types';

export default function CustomButton({ Children, variant, color, event }) {
  return (
    <Button variant={variant} color={color} onClick={event}>
      {Children}
    </Button>
  );
}
CustomButton.propTypes = {
  Children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};
