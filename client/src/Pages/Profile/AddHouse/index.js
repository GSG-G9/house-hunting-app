import React, { useState } from 'react';
import Axios from 'axios';

import {
  Typography,
  MenuItem,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import validationSchema from '../../../Utils/validations/addNewHouse';
import { locations, categories } from './staticData';

import useStyles from './style';

function AddHouse() {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [locationId, setLocationId] = useState();
  const [category, setCategory] = useState('');
  const [rooms, setRooms] = useState(1);
  const [bathrooms, setBathRooms] = useState(1);
  const [price, setPrice] = useState(0);
  const [area, setArea] = useState(10);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const clear = () => {
    setLoading(false);
    setTitle('');
    setDescription('');
    setRooms(1);
    setBathRooms(1);
    setPrice(0);
    setArea(0);
    setImage('');
  };

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'description':
        setDescription(value);
        break;
      case 'rooms':
        setRooms(value);
        break;
      case 'location':
        setLocationId(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'bathrooms':
        setBathRooms(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'area':
        setArea(value);
        break;
      case 'image':
        setImage(value);
        break;
      default:
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const houseData = {
        title,
        description,
        locationId,
        category,
        rooms,
        bathrooms,
        price,
        area,
        image,
      };

      setLoading(true);

      await validationSchema.validate(houseData, { abortEarly: false });

      await Axios.post(`api/v1/houses`, houseData);

      setOpen(true);
      clear();
      setLoading(false);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.errors[0]);
      setLoading(false);
    }
  };
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error ? 'error' : 'success'}>
          {error || 'houses added successfully'}
        </Alert>
      </Snackbar>
      <Typography
        variant="h3"
        component="h2"
        color="primary"
        className={classes.header}
      >
        Add New House
      </Typography>
      <form className={classes.form}>
        <Input
          value={title}
          className={classes.input}
          variant="outlined"
          type="text"
          onChange={handleChange}
          label="Title"
          name="title"
          required
        />
        <Input
          className={classes.input}
          variant="outlined"
          type="text"
          onChange={handleChange}
          value={description}
          label="Description"
          name="description"
          required
        />

        <FormControl className={classes.input}>
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={locationId}
            onChange={handleChange}
            label="Location"
            name="location"
          >
            {locations.map(({ value, city }) => (
              <MenuItem key={value} value={value}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.input}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={handleChange}
            label="Category"
            name="category"
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className={classes.numberInputBox}>
          <Input
            className={classes.numberInput}
            variant="outlined"
            type="number"
            onChange={handleChange}
            value={rooms}
            label="Rooms"
            name="rooms"
            required
          />
          <Input
            className={classes.numberInput}
            variant="outlined"
            type="number"
            onChange={handleChange}
            value={bathrooms}
            label="Bathrooms"
            name="bathrooms"
            required
          />
          <Input
            className={classes.numberInput}
            variant="outlined"
            type="text"
            onChange={handleChange}
            value={area}
            label="Area"
            name="area"
            required
          />
          <Input
            className={classes.numberInput}
            variant="outlined"
            type="text"
            onChange={handleChange}
            value={price}
            label="Price"
            name="price"
            required
          />
        </div>
        <Input
          className={classes.input}
          variant="outlined"
          type="text"
          onChange={handleChange}
          value={image}
          label="Image"
          name="image"
          required
        />
        {error && (
          <Alert className={classes.alert} severity="error">
            {error}
          </Alert>
        )}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          event={handleSubmit}
        >
          {loading ? <CircularProgress size={25} /> : 'Add'}
        </Button>
      </form>
    </div>
  );
}

export default AddHouse;
