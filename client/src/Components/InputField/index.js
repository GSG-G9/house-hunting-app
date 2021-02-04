import React from 'react';
import TextField from '@material-ui/core/TextField';
// import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style';

function InputField() {
  const classes = useStyles();
  return (
    <div>
      <SearchIcon className={classes.icon} />
      <TextField variant="standard" label="Search" />
    </div>
  );
}

export default InputField;
