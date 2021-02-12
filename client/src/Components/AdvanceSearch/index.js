import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { func, number, string } from 'prop-types';

import Slider from '@material-ui/core/Slider';

import Input from '../Input';
import useStyles from './style';

function Filter({
  onChange,
  handlePrice,
  priceValue,
  catValue,
  roomValue,
  locationValue,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputLabel htmlFor="location">Location </InputLabel>
      <Select
        id="location"
        onChange={onChange}
        name="location"
        label="location"
        value={locationValue}
        variant="outlined"
        className={classes.input}
      >
        <MenuItem value="Gaza">Gaza</MenuItem>
        <MenuItem value="Khanyunis">Khanyunis</MenuItem>
        <MenuItem value="ALwosta">ALwosta</MenuItem>
        <MenuItem value="Rafah">Rafah</MenuItem>
        <MenuItem value="North">North</MenuItem>
      </Select>
      <InputLabel htmlFor="category"> category </InputLabel>
      <Select
        id="category"
        onChange={onChange}
        name="category"
        labelId="category"
        value={catValue}
        variant="outlined"
        className={classes.input}
      >
        <MenuItem value="apartment">Apartment</MenuItem>
        <MenuItem value="roof">Roof</MenuItem>
        <MenuItem value="classis">Classic</MenuItem>
        <MenuItem value="studio">Studio</MenuItem>
      </Select>
      <InputLabel>Rooms</InputLabel>
      <Input
        className={classes.inputNum}
        type="number"
        name="rooms"
        onChange={onChange}
        value={roomValue}
        variant="outlined"
      />
      <InputLabel>Price </InputLabel>
      <Slider
        className={classes.slider}
        name="price"
        onChange={handlePrice}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        value={priceValue}
        min={50}
        max={900}
        variant="outlined"
      />
    </div>
  );
}
Filter.propTypes = {
  onChange: func.isRequired,
  handlePrice: func.isRequired,
  priceValue: number.isRequired,
  catValue: string.isRequired,
  roomValue: number.isRequired,
  locationValue: string.isRequired,
};

export default Filter;
