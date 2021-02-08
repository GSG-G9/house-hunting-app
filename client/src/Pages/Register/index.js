import React, { useState } from 'react';
import axios from 'axios';

import logo from '../../Utils/images/house_searching.svg';
import useStyles from './style';
import Input from '../../Components/Input';
import CustomButton from '../../Components/Button';

function Register() {
  const classes = useStyles();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('api/v1/signup', {
        username,
        email,
        password,
        confirmPassword,
        mobile,
      });

      return response.data;
    } catch (error) {
      return error;
    }
  };

  return (
    <section className={classes.root}>
      <section className={classes.img}>
        <img src={logo} className={classes.logo} alt="Logo" />
      </section>
      <section>
        <form className={classes.form}>
          <Input
            value={username}
            className={classes.input}
            variant="outlined"
            type="text"
            onChange={handleUsername}
            placeholder="username"
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="email"
            onChange={handleEmail}
            value={email}
            placeholder="Email"
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="password"
            onChange={handlePassword}
            value={password}
            placeholder="password"
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="password"
            onChange={handleConfirmPassword}
            value={confirmPassword}
            placeholder="confirm password"
          />
          <Input
            className={classes.input}
            variant="outlined"
            type="tel"
            onChange={handleMobile}
            value={mobile}
            placeholder="mobile"
          />
          <CustomButton
            variant="contained"
            color="primary"
            event={handleSubmit}
          >
            Sign Up
          </CustomButton>
        </form>
      </section>
    </section>
  );
}
export default Register;
