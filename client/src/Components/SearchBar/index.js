import React from 'react';
import { func, string } from 'prop-types';

import SearchIcon from '@material-ui/icons/SearchSharp';

import Input from '../Input';
import Button from '../Button';

import useStyles from './style';

function SearchBar({ onClick, value, onChange, ...rest }) {
  const classes = useStyles();
  return (
    <div {...rest}>
      <Input
        type="search"
        variant="outlined"
        size="small"
        label="search "
        value={value}
        onChange={onChange}
        name="search"
        className={classes.searchInput}
      />

      <Button className={classes.button} onClick={onClick}>
        <SearchIcon />
      </Button>
    </div>
  );
}
SearchBar.propTypes = {
  onClick: func.isRequired,
  onChange: func.isRequired,
  value: string.isRequired,
};

export default SearchBar;
