import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import { func, number, string } from 'prop-types';

import Slider from '@material-ui/core/Slider';

import SelectItems from '../Select';
import { categoryFilter, locationFilter } from '../../Utils/staticData';
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
      <SelectItems
        listItems={locationFilter}
        label="location"
        onChange={onChange}
        value={locationValue}
        className={classes.input}
      />

      <SelectItems
        listItems={categoryFilter}
        label="category"
        onChange={onChange}
        value={catValue}
        className={classes.input}
      />

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
