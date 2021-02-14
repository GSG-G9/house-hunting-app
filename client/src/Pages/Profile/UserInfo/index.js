import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Typography,
  Avatar,
  Grid,
  Paper,
  CircularProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import Button from '../../../Components/Button';

import useStyles from './style';

function UserInfo() {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const fetchingData = async (isCurrent) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`api/v1/users`);
      if (isCurrent) {
        setUser(data.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg(error.response.data);
    }
  };

  useEffect(() => {
    let isCurrent = true;
    fetchingData(isCurrent);
    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h2">User Information</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Grid lg="12" justify="center">
            <Avatar className={classes.avatar}>
              {user.username && user.username.slice(0, 1).toUpperCase()}
            </Avatar>
          </Grid>
          <Grid justify="center">
            {errorMsg ? (
              <Alert variant="error">{errorMsg}</Alert>
            ) : (
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
                  <Typography className={classes.userDataFieldLabel}>
                    Email:{' '}
                  </Typography>
                  <Typography className={classes.userDataFieldValue}>
                    {user.email}
                  </Typography>
                </div>
                <div className={classes.userDataField}>
                  <Typography className={classes.userDataFieldLabel}>
                    Mobile:{' '}
                  </Typography>
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
            )}
          </Grid>
        </>
      )}
      <div className={classes.btnsBox}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.editBtn}
        >
          Edit Information
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.deleteBtn}
        >
          Delete Information
        </Button>
      </div>
    </div>
  );
}

export default UserInfo;
