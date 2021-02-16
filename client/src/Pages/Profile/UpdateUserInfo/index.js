import React, { useState } from 'react';

import Axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import validationSchema from '../../../Utils/validations/updateUser';
import useStyles from './style';

function UpdateUser({ userData, setUpdateUser }) {
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
    console.log(value);
  };

  const handleSubmit = async () => {
    try {
      setUpdateUser(false);
      setIsLoading(true);
      const user = { username, mobile, address };
      console.log(user);
      await validationSchema.validate(user, { abortEarly: false });
      await Axios.patch('api/v1/users', user);
      setIsLoading(false);
      console.log('Update Successfully');
      setUpdateUser(true);
      handleClose();
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
        onClick={handleClick}
      >
        Update info
      </Button>
      <Dialog open={open} onClose={handleClose} aria-label="update-info">
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
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <Button onClick={(handleClose, handleSubmit)} color="primary">
            {isLoading ? (
              <CircularProgress size={25} color="secondary" />
            ) : (
              'Save'
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UpdateUser;
