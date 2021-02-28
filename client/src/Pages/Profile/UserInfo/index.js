import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Typography, Avatar, Grid, Modal } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';
import PermMediaIcon from '@material-ui/icons/PermMedia';

import Button from '../../../Components/Button';
import UpdateUser from '../UpdateUserInfo';
import { HOME_PAGE } from '../../../Utils/routes.constant';
import Loading from '../../../Components/Loading';
import ViewUserInfo from './ViewUserinfo';
import useStyles from './style';
import AuthContext from '../../../Context/AuthContext';
import UserAvatar from './UserAvatar';

function UserInfo({ getUserName }) {
  const classes = useStyles();
  const history = useHistory();
  const { setIsAuth } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [open, setOpen] = useState(false);
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
      await Axios.delete('/api/v1/users');
      history.push(HOME_PAGE);
      setIsAuth(false);
    } catch (error) {
      setDelErr(error.response ? error.response.data.message : error.errors[0]);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    let isCurrent = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get(`/api/v1/users`);
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
  }, [isUpdate, refresh]);

  return (
    <div className={classes.root}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <UserAvatar setRefresh={setRefresh} setOpen={setOpen} />
      </Modal>
      <Typography variant="h2">User Information</Typography>
      {loading ? (
        <Loading className={classes.spin} />
      ) : (
        <>
          <Grid lg="false" justify="center">
            <div className={classes.avatarBox}>
              <Avatar className={classes.avatar} src={user.image && user.image}>
                {!user.image &&
                  user.username &&
                  user.username.slice(0, 1).toUpperCase()}
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
          <Alert onClose={handleClose} severity="success">
            User updated successfully
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
