import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Axios from 'axios';
import {
  Typography,
  Avatar,
  Grid,
  Paper,
  CircularProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';

import Button from '../../../Components/Button';
import UpdateUser from '../UpdateUserInfo';
import { HOME_PAGE } from '../../../Utils/routes.constant';

import useStyles from './style';
import AuthContext from '../../../Context/AuthContext';

function UserInfo({ getUserName }) {
  const classes = useStyles();
  const history = useHistory();
  const { setIsAuth } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertError, setAlertError] = useState();
  const [setDelErr] = useState();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleDelete = async () => {
    try {
      await Axios.delete('api/v1/users');
      history.push(HOME_PAGE);
      setIsAuth(false);
    } catch (error) {
      setDelErr(error.response ? error.response.data.message : error.errors[0]);
    }
  };

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
        setErrorMsg(error.response.data.message);
      }
    })();
    return () => {
      isCurrent = false;
      setLoading(false);
    };
  }, [isUpdate]);

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
        <UpdateUser
          handleClickAlert={handleClick}
          handleCloseAlert={handleClose}
          setUpdateUser={setIsUpdate}
          setErr={setAlertError}
          userData={{
            username: user.username,
            address: user.address,
            mobile: user.mobile,
          }}
        />
        <Button
          onClick={handleDelete}
          variant="outlined"
          color="secondary"
          className={classes.deleteBtn}
        >
          Delete Account
        </Button>
        <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={alertError ? 'error' : 'success'}
          >
            {alertError || 'User updated successfully'}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  getUserName: PropTypes.func.isRequired,
};

export default UserInfo;
