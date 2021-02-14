import React, { useState } from 'react';

import { PropTypes } from 'prop-types';
import Axios from 'axios';

import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { locations } from '../../Utils/staticData';

import useStyles from './style';

const { shape, string, number } = PropTypes;

export default function CardComponent({
  house: {
    id: houseId,
    image: img,
    title,
    description,
    location_id: location,
    room_num: bdCount,
    bathroom_num: baCount,
    price,
  },
}) {
  const [fav, setFav] = useState();
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const addToFav = async () => {
    try {
      const { data } = await Axios.get(`api/v1/favorite/${houseId}`);
      setOpen(true);
      setFav(data);
    } catch (err) {
      setOpen(true);
      setError(err.message);
    }
  };

  const getCityName = (locationId) => {
    const { city } = locations.find(({ id }) => id === locationId);
    return city;
  };

  return (
    <Card className={classes.root} elevation="0">
      <CardActionArea>
        <CardMedia className={classes.media}>
          <img
            src={
              img ||
              'https://us.123rf.com/450wm/iriana88w/iriana88w1711/iriana88w171100467/89727643-beautiful-exterior-of-contemporary-home-with-two-car-garage-spaces-at-sunset-northwest-usa.jpg?ver=6'
            }
            alt="house"
          />
        </CardMedia>
        <CardContent>
          <div className={classes.cardTitle}>
            <Typography gutterBottom variant="h5" component="h2">
              {title.slice(0, 1).toUpperCase() + title.slice(1)}
            </Typography>
            <Typography className={classes.location}>
              <LocationOnIcon className={classes.icon} />
              {getCityName(location)}
            </Typography>
          </div>
          <Typography
            variant="body2"
            component="p"
            className={classes.description}
          >
            {description.split(' ').splice(0, 10).join(' ')}
          </Typography>
          <div className={classes.cardDetails}>
            <Typography variant="h6">${price}</Typography>
            <div className={classes.iconBox}>
              <Typography>{bdCount} bd </Typography>
              <HotelIcon className={classes.icon} />
            </div>
            <div className={classes.iconBox}>
              <Typography>{baCount} ba </Typography>
              <BathtubIcon className={classes.icon} />
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button className={classes.border}>more details</Button>
        <Button>
          <FavoriteBorderIcon
            className={classes.favIcon}
            id={houseId}
            onClick={addToFav}
          />
        </Button>
        {fav && (
          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              {fav.message}
            </Alert>
          </Snackbar>
        )}
        {error && (
          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              {error}
            </Alert>
          </Snackbar>
        )}
      </CardActions>
    </Card>
  );
}

CardComponent.propTypes = {
  house: shape({
    img: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    location: string.isRequired,
    bdCount: number.isRequired,
    baCount: number.isRequired,
    price: number.isRequired,
  }).isRequired,
};
