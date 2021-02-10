import React from 'react';
import { func } from 'prop-types';

import SearchIcon from '@material-ui/icons/SearchSharp';

import Input from '../Input';
import Button from '../Button';

import useStyles from './style';

function SearchBar({ onClick }) {
  const classes = useStyles();
  return (
    <>
      <Input type="email" variant="outlined" size="small" label="search " />

      <Button className={classes.button} color="secondary" onClick={onClick}>
        <SearchIcon />
      </Button>
    </>
  );
}
SearchBar.propTypes = {
  onClick: func.isRequired,
};

export default SearchBar;
