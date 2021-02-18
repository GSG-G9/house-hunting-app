import React from 'react';

import { Typography, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from '../style';

function ViewUserInfo({ user }) {
  const classes = useStyles();
  return (
    <Paper elevation="0" className={classes.userData}>
      <div className={classes.userDataField}>
        <Typography className={classes.userDataFieldLabel}>
          Username:{' '}
        </Typography>
        <Typography className={classes.userDataFieldValue}>
          {user.username}
        </Typography>
      </div>
      <div className={classes.userDataField}>
        <Typography className={classes.userDataFieldLabel}>Email: </Typography>
        <Typography className={classes.userDataFieldValue}>
          {user.email}
        </Typography>
      </div>
      <div className={classes.userDataField}>
        <Typography className={classes.userDataFieldLabel}>Mobile: </Typography>
        <Typography className={classes.userDataFieldValue}>
          {user.mobile}
        </Typography>
      </div>
      <div className={classes.userDataField}>
        <Typography className={classes.userDataFieldLabel}>
          Address:{' '}
        </Typography>
        <Typography className={classes.userDataFieldValue}>
          {user.address ? user.address : '-'}
        </Typography>
      </div>
    </Paper>
  );
}

ViewUserInfo.propTypes = {
  user: PropTypes.func.isRequired,
};

export default ViewUserInfo;
