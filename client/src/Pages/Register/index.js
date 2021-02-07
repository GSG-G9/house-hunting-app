import React from 'react';

import logo from '../../Utils/images/house_searching.svg';
import useStyles from './style';

function Register() {
  const classes = useStyles();
  return (
    <>
      <img src={logo} className={classes.logo} alt="Logo" />;
    </>
  );
}
export default Register;
