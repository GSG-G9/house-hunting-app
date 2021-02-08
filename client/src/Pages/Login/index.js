import React, { useState } from 'react';
import axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';

import Input from '../../Components/Input';
import CustomButton from '../../Components/Button';
import { ReactComponent as SearchImg } from '../../Utils/images/house_searching.svg';

import useStyles from './style';

function Login() {
  const classes = useStyles();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const emailVal = (event) => {
    setemail(event.target.value);
  };

  const passwordVal = (event) => {
    setpassword(event.target.value);
  };

  const postRequest = async () => {
    setIsLoading(true);
    try {
      const userData = await axios.post('api/v1/login', {
        email,
        password,
      });
      console.log(userData.data);

      return userData;
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <h1>Sign In {email && email}</h1>
      <form className={classes.root}>
        <Input className="input" variant="outlined" onChange={emailVal} />
        <br />
        <Input className="input" variant="outlined" onChange={passwordVal} />
        <br />
        <CustomButton vairent="contained" color="primary" event={postRequest}>
          LogIN
        </CustomButton>

        {isLoading === true ? (
          <div className={classes.spinner}>
            <CircularProgress />
          </div>
        ) : (
          ''
        )}
      </form>
      <div>
        <SearchImg width="250" />
      </div>
    </div>
  );
}

export default Login;
