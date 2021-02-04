import React from 'react';

import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './style';

function Title({ className, title, varient, component }) {
  return (
    <div>
      <Typography className={className} variant={varient} component={component}>
        {title}
      </Typography>
    </div>
  );
}
Title.propTypes = {
  className: PropTypes.string.isRequired,
  varient: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
