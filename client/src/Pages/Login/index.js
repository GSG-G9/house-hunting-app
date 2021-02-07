import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../Components/Input';
import CustomButton from '../../Components/Button';
import { ReactComponent as SearchImg } from '../../Utils/images/house_searching.svg';

import useStyles from './style';

function Login() {
  const classes = useStyles();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const emailVal = (event) => {
    setemail(event.target.value);
    console.log(email);
  };

  const passwordVal = (event) => {
    setpassword(event.target.value);
    console.log(password);
  };

  const postRequest = async () => {
    try {
      const userData = await axios.post('api/v1/login', {
        email,
        password,
      });
      console.log('request has sended', userData);
      return userData;
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form className={classes.root}>
        <Input className="input" variant="outlined" onChange={emailVal} />
        <br />
        <Input className="input" variant="outlined" onChange={passwordVal} />
        <br />
        <CustomButton vairent="contained" color="primary" event={postRequest}>
          LogIN
        </CustomButton>
      </form>
      <div>
        <SearchImg width="250" />
      </div>
    </div>
  );
}

export default Login;
