import React from 'react';
import Button from '@material-ui/core/Button';

import { PropTypes } from 'prop-types';

export default function CustomButton(props) {
  const { Children } = props;
  return (
    <Button variant="contained" color="primary">
      {Children}
    </Button>
  );
}
CustomButton.propTypes = {
  Children: PropTypes.string.isRequired,
};
