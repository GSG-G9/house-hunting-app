import React, { useState } from 'react';

import { PropTypes } from 'prop-types';

import Axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import validationSchema from '../../../Utils/validations/register';
import Loading from '../../../Components/Loading';

import useStyles from '../UserInfo/style';

function UpdateUser({ userData, setUpdateUser }) {
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClickDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'mobile':
        setMobile(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
    }
  };

  const handleSubmit = async () => {
    try {
      setUpdateUser(false);
      setIsLoading(true);
      const user = { username, mobile, address };
      await validationSchema.validate(user, { abortEarly: false });
      await Axios.patch('api/v1/users', user);
      setIsLoading(false);
      setUpdateUser(true);
      handleCloseDialog();
      setOpen(false);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.errors[0]);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.editBtn}
        onClick={handleClickDialog}
      >
        Update info
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-label="update-info"
      >
        <DialogTitle>Update informations</DialogTitle>
        <DialogContent>
          <Input
            autoFocus
            margin="dense"
            id="name"
            name="username"
            label="username"
            type="text"
            fullWidth
            value={username}
            defaultValue={userData.username}
            onChange={handleChange}
          />
          <Input
            autoFocus
            margin="dense"
            id="address"
            name="address"
            label="address"
            type="text"
            fullWidth
            value={address}
            defaultValue={userData.address}
            onChange={handleChange}
          />
          <Input
            autoFocus
            margin="dense"
            id="mobile"
            name="mobile"
            label="mobile"
            type="number"
            fullWidth
            value={mobile}
            defaultValue={userData.mobile}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>

          <Button
            onClick={(handleCloseDialog, handleSubmit, handleClick)}
            color="primary"
          >
            {isLoading ? <Loading className={classes.spin} /> : 'Save'}
          </Button>
        </DialogActions>
        <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={error ? 'error' : 'success'}>
            {error || 'Updated Successfully!'}
          </Alert>
        </Snackbar>
      </Dialog>
    </div>
  );
}

UpdateUser.propTypes = {
  setUpdateUser: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    username: PropTypes.string,
    mobile: PropTypes.number,
    address: PropTypes.string,
  }).isRequired,
};

export default UpdateUser;
