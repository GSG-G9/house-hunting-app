import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import Input from '../../Components/Input';
import CustomButton from '../../Components/Button';
import { ReactComponent as SearchImg } from '../../Utils/images/house_searching.svg';

import useStyles from './style';

function Login() {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);

  const clear = () => {
    setEmail('');
    setPassword('');
    setError(null);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const userData = {
        email,
        password,
      };
      const validationSchema = yup.object({
        email: yup.string().email().required(),
        password: yup
          .string()
          .min(8, 'password must be at least 8 char')
          .required('password is required'),
      });
      await validationSchema.validate(userData, {
        abortEarly: false,
      });
      await axios.post('api/v1/login', userData);
      setOpen(true);
      setIsLoading(false);
      clear();
      history.push('/ggg');
    } catch (err) {
      setError(err.response ? e.response.data.message : 'somthing went wrong');
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.img}>
        <SearchImg className={classes.logo} width="250" />
      </div>
      <div className={classes.formSection}>
        <h1 className={classes.header}>Sign In</h1>
        <form className={classes.form}>
          <Input
            className={classes.input}
            variant="outlined"
            onChange={handleEmail}
            value={email}
            type="email"
            label="Email"
          />
          <br />
          <Input
            className={classes.input}
            variant="outlined"
            onChange={handlePassword}
            value={password}
            label="Password"
          />
          <br />

          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Login Successfully!
            </Alert>
          </Snackbar>
          {error && (
            <Alert className={classes.alert} severity="error">
              {' '}
              {error}{' '}
            </Alert>
          )}
          <CustomButton
            className={classes.button}
            vairent="contained"
            color="primary"
            event={handleSubmit}
          >
            LogIN
            {isLoading && (
              <div className={classes.spinner}>
                <CircularProgress />
              </div>
            )}
          </CustomButton>
        </form>
      </div>
    </div>
  );
}

export default Login;
