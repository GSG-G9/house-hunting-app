import React from 'react';

import PropTypes from 'prop-types';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

function SelectItems({ listItems, label, ...rest }) {
  return (
    <>
      <InputLabel htmlFor={label}> {label} </InputLabel>
      <Select variant="outlined" name={label} label={label} {...rest}>
        {listItems.map((item) => (
          <MenuItem value={item}>{item.toUpperCase()}</MenuItem>
        ))}
      </Select>
    </>
  );
}

SelectItems.propTypes = {
  listItems: PropTypes.instanceOf(Array).isRequired,
  label: PropTypes.string.isRequired,
};

export default SelectItems;
