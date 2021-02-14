import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';

import validationSchema from '../../Utils/validations/login';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { ReactComponent as SearchImg } from '../../Utils/images/house_searching.svg';
import { HOME_PAGE } from '../../Utils/routes.constant';

import AuthContext from '../../Context/AuthContext';
import useStyles from './style';

function Login() {
  const classes = useStyles();
  const history = useHistory();
  const { setIsAuth } = useContext(AuthContext);

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

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const userData = {
        email,
        password,
      };

      await validationSchema.validate(userData, {
        abortEarly: false,
      });
      await Axios.post('api/v1/login', userData);
      clear();
      setIsLoading(false);
      setIsAuth(true);
      setOpen(true);
      history.push(HOME_PAGE);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.errors[0]);
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.img}>
        <SearchImg className={classes.logo} width="250" />
      </div>
      <div className={classes.formSection}>
        <Typography color="primary" className={classes.header}>
          Sign In
        </Typography>
        <form className={classes.form}>
          <Input
            className={classes.input}
            variant="outlined"
            onChange={handleEmail}
            value={email}
            type="email"
            label="Email"
            required
          />
          <Input
            type="password"
            className={classes.input}
            variant="outlined"
            onChange={handlePassword}
            value={password}
            label="Password"
            required
          />
          <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Login Successfully!
            </Alert>
          </Snackbar>
          {error && (
            <Alert className={classes.alert} severity="error">
              {error}
            </Alert>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            event={handleSubmit}
          >
            {isLoading ? (
              <CircularProgress size={25} color="secondary" />
            ) : (
              'LogIn'
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
