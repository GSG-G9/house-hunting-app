import React from 'react';

import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './style';

function Title({ title, varient }) {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.root} variant={varient}>
        {title}
      </Typography>
    </div>
  );
}
Title.propTypes = {
  title: PropTypes.string.isRequired,
  varient: PropTypes.string.isRequired,
};

export default Title;
