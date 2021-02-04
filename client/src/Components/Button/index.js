import React from 'react';
import Button from '@material-ui/core/Button';
import { PropTypes } from 'prop-types';

export default function CustomButton({
  children,
  variant,
  color,
  event,
  ...rest
}) {
  return (
    <Button variant={variant} color={color} onClick={event} {...rest}>
      {children}
    </Button>
  );
}
CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};
