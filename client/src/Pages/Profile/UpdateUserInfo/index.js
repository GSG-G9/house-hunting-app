import React, { useState } from 'react';

import Axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import validationSchema from '../../../Utils/validations/updateUser';
import useStyles from './style';

function UpdateUser() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const userDate = { username, email, mobile, address };
      await validationSchema.validate(userDate, { abortEarly: false });
      await Axios.patch('api/v1/users', userDate);
      setIsLoading(false);
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="username"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="address"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="mobile"
            label="mobile"
            type="number"
            fullWidth
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
