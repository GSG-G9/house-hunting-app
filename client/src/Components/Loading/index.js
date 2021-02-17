import React from 'react';
import { PropTypes } from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

function Loading({ size, color, ...rest }) {
  return (
    <Box {...rest}>
      <CircularProgress size={size} color={color} />
    </Box>
  );
}
Loading.defaultProps = {
  size: 30,
  color: 'primary',
};
Loading.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
export default Loading;
