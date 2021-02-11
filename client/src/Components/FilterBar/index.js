import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { func, string } from 'prop-types';

import Slider from '@material-ui/core/Slider';

import Input from '../Input';

function Filter({ onChange, handlePrice }) {
  return (
    <>
      <InputLabel htmlFor="location">Location </InputLabel>
      <Select
        id="location"
        onChange={onChange}
        name="location"
        label="location"
      >
        <MenuItem value="Gaza" name="Gaza">
          Gaza
        </MenuItem>
        <MenuItem value="Khanyunis">Khanyunis</MenuItem>
        <MenuItem value="ALwosta">ALwosta</MenuItem>
        <MenuItem value="Rafah">Rafah</MenuItem>
        <MenuItem value="North">North</MenuItem>
      </Select>
      <InputLabel htmlFor="catagories"> Catagories </InputLabel>
      <Select id="catagories" onChange={onChange} name="catagories">
        <MenuItem value="Apartment">Apartment</MenuItem>
        <MenuItem value="Roof">Roof</MenuItem>
        <MenuItem value="Classis">Classic</MenuItem>
        <MenuItem value="Studio">Studio</MenuItem>
      </Select>
      <InputLabel>Rooms</InputLabel>
      <Input type="number" name="rooms" onChange={onChange} />
      <InputLabel>Price </InputLabel>
      <Slider
        name="price"
        onChange={onChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={100}
        max={500}
      />
    </>
  );
}
Filter.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
  handlePrice: func.isRequired,
};

export default Filter;
