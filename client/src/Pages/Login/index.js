import React, { useState } from 'react';

import Input from '../../Components/Input';
import CustomButton from '../../Components/Button';
import { ReactComponent as SearchImg } from '../../Utils/images/house_searching.svg';

import './style.css';

function Login() {
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

  return (
    <div>
      <h1>Sign In</h1>
      <form className="login-form">
        <Input className="input" variant="standard" onChange={emailVal} />
        <Input className="input" variant="standard" onChange={passwordVal} />
        <CustomButton vairent="outlined" color="primary">
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
