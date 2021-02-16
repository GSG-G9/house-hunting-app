import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';

import validationSchema from '../../Utils/validations/register';
import { ReactComponent as SearchImg } from '../../Utils/images/house_searching.svg';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { HOME_PAGE } from '../../Utils/routes.constant';
import Loading from '../../Components/loading';

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

      await validationSchema.validate(userDate, {
        abortEarly: false,
      });
      await Axios.post('api/v1/signup', userDate);
      setOpen(true);
      clear();
      setLoading(false);
      history.push(HOME_PAGE);
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
            required
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="email"
            onChange={handleChange}
            value={email}
            label="Email"
            name="email"
            required
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="password"
            onChange={handleChange}
            value={password}
            label="password"
            name="password"
            required
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="password"
            onChange={handleChange}
            value={confirmPassword}
            label="confirm password"
            name="confirmPassword"
            required
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="tel"
            onChange={handleChange}
            value={mobile}
            label="mobile"
            name="mobile"
            required
          />
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Congrats! Signed up Successfully
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
            onClick={handleSubmit}
          >
            {loading ? <Loading /> : 'Sign Up'}
          </Button>
        </form>
      </section>
    </section>
  );
}
export default Register;
