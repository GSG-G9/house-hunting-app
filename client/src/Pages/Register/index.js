import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ReactComponent as SearchImg } from '../../Utils/images/house_searching.svg';
import useStyles from './style';
import Input from '../../Components/Input';
import CustomButton from '../../Components/Button';

function Register() {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, SetError] = useState('');
  const [open, setOpen] = useState(false);

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
  const values = { username, email, password, confirmPassword, mobile };

  validationSchema.validate(values, { abortEarly: false });

  const clear = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    SetError(null);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('api/v1/signup', {
        username,
        email,
        password,
        confirmPassword,
        mobile,
      });
      setOpen(true);
      clear();
      setLoading(false);
      history.push('/');
    } catch (E) {
      SetError(E.response ? E.response.data.message : 'something error');
      setLoading(false);
    }
  };
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <section className={classes.root}>
      <section className={classes.img}>
        <SearchImg className={classes.logo} />
      </section>
      <section className={classes.formSection}>
        <form className={classes.form}>
          <Input
            value={username}
            className={classes.input}
            variant="outlined"
            type="text"
            onChange={handleUsername}
            label="user name"
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="email"
            onChange={handleEmail}
            value={email}
            label="Email"
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="password"
            onChange={handlePassword}
            value={password}
            label="password"
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="password"
            onChange={handleConfirmPassword}
            value={confirmPassword}
            label="confirm password"
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="tel"
            onChange={handleMobile}
            value={mobile}
            label="mobile"
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
          <CustomButton
            className={classes.button}
            variant="contained"
            color="primary"
            event={(handleClick, handleSubmit)}
          >
            Sign Up
            {loading && <CircularProgress />}
          </CustomButton>
        </form>
      </section>
    </section>
  );
}
export default Register;
