import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import {
  Typography,
  Avatar,
  Grid,
  Paper,
  CircularProgress,
  Modal,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PermMediaIcon from '@material-ui/icons/PermMedia';

import Button from '../../../Components/Button';
import UserAvatar from './UserAvatar';

import useStyles from './style';

function UserInfo({ getUserName }) {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let isCurrent = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get(`api/v1/users`);
        if (isCurrent) {
          setUser(data.data);
          getUserName(data.data.username);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setErrorMsg(error.response.data);
      }
    })();
    return () => {
      isCurrent = false;
      setLoading(false);
    };
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <UserAvatar />
      </Modal>
      <Typography variant="h2">User Information</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Grid lg="false" justify="center">
            <div className={classes.avatarBox}>
              <Avatar className={classes.avatar}>
                {user.username && user.username.slice(0, 1).toUpperCase()}
              </Avatar>
              <PermMediaIcon
                className={classes.avatarBtn}
                onClick={handleOpen}
              />
            </div>
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

UserInfo.propTypes = {
  getUserName: PropTypes.func.isRequired,
};

export default UserInfo;
