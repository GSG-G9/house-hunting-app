import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import * as yup from 'yup';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { ReactComponent as SearchImg } from '../../Utils/images/house_searching.svg';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { LOGIN_PAGE } from '../../Utils/routes.constant';

import useStyles from './style';

function Register() {
  const classes = useStyles();
  const history = useHistory();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const clear = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
  };

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'username':
        setUsername(value);
        break;

      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'mobile':
        setMobile(value);
        break;
      default:
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const userDate = {
        username,
        email,
        password,
        confirmPassword,
        mobile,
      };
      const validationSchema = yup.object({
        username: yup.string().required(),
        email: yup.string().email().required(),
        password: yup
          .string()
          .min(8, 'password must be at least 8 char')
          .required('password is required'),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password'), null], 'passwords must match'),
        mobile: yup.number().min(9).required(),
      });
      await validationSchema.validate(userDate, {
        abortEarly: false,
      });
      await Axios.post('api/v1/signup', userDate);
      setOpen(true);
      clear();
      setLoading(false);
      history.push(LOGIN_PAGE);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.errors[0]);
      setLoading(false);
    }
  };

  return (
    <section className={classes.root}>
      <section className={classes.img}>
        <SearchImg className={classes.logo} />
      </section>
      <section className={classes.formSection}>
        <Typography
          variant="h3"
          component="h2"
          color="primary"
          className={classes.header}
        >
          Sign Up
        </Typography>
        <form className={classes.form}>
          <Input
            value={username}
            className={classes.input}
            variant="outlined"
            type="text"
            onChange={handleChange}
            label="user name"
            name="username"
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="email"
            onChange={handleChange}
            value={email}
            label="Email"
            name="email"
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="password"
            onChange={handleChange}
            value={password}
            label="password"
            name="password"
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="password"
            onChange={handleChange}
            value={confirmPassword}
            label="confirm password"
            name="confirmPassword"
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="tel"
            onChange={handleChange}
            value={mobile}
            label="mobile"
            name="mobile"
          />
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              This is a success message!
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
            Sign Up
            {loading && <CircularProgress />}
          </Button>
        </form>
      </section>
    </section>
  );
}
export default Register;
