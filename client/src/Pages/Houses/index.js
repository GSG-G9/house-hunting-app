import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import Input from '../../Components/Input';

function SearchPage() {
  const [price, setPrice] = useState(0);
  const handleSliderPrice = (event, value) => {
    setPrice(value);
  };
  return (
    <>
      <Typography variant="h5" component="h2">
        houses available
      </Typography>
      <Input type="search" label="search house" />
      <SearchIcon color="secondary" /> <br /> <br />
      <InputLabel htmlFor="location">Location </InputLabel>
      <Select id="location" defaultValue="">
        <MenuItem value={1}>Gaza</MenuItem>
        <MenuItem value={2}>Khanyunis</MenuItem>
        <MenuItem value={3}>ALwosta</MenuItem>
        <MenuItem value={4}>Rafah</MenuItem>
        <MenuItem value={5}>North</MenuItem>
      </Select>
      <InputLabel htmlFor="catagories"> Catagories </InputLabel>
      <Select id="catagories" defaultValue="">
        <MenuItem value={1}>apartment</MenuItem>
        <MenuItem value={2}>Roof</MenuItem>
        <MenuItem value={3}>classic</MenuItem>
        <MenuItem value={4}>Studio</MenuItem>
      </Select>
      <InputLabel>Rooms</InputLabel>
      <Input type="number" />
      <InputLabel>Price </InputLabel>
      <Slider
        value={price}
        onChange={handleSliderPrice}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={100}
        max={500}
      />
    </>
  );
}

export default SearchPage;
