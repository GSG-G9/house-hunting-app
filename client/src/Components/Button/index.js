import React from 'react';
import Button from '@material-ui/core/Button';
import { PropTypes } from 'prop-types';

export default function CustomButton({ children, variant, event, ...rest }) {
  return (
    <Button variant={variant} onClick={event} {...rest}>
      {children}
    </Button>
  );
}
CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};
