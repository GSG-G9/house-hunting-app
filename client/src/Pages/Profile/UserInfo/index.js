import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Typography, Avatar, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';

import Button from '../../../Components/Button';
import UpdateUser from '../UpdateUserInfo';
import { HOME_PAGE } from '../../../Utils/routes.constant';
import Loading from '../../../Components/Loading';
import ViewUserInfo from './ViewUserinfo';
import useStyles from './style';
import AuthContext from '../../../Context/AuthContext';
import DeleteAccount from './DeleteAcount';

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
  const [delErr, setDelErr] = useState();
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
        <Loading className={classes.spin} />
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
              <ViewUserInfo user={user} />
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
        <DeleteAccount
          variant="outlined"
          color="secondary"
          className={classes.deleteBtn}
        />
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
