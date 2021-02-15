import React, { useState } from 'react';

import { PropTypes } from 'prop-types';
import Axios from 'axios';
import { Link } from 'react-router-dom';

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

import { fakeImage } from '../../Utils/staticData';

import { HOUSES } from '../../Utils/routes.constant';

import useStyles from './style';

const { shape, string, number } = PropTypes;

export default function CardComponent({
  house: {
    id: houseId,
    img,
    title,
    description,
    category,
    location,
    area,
    username,
    mobile,
    price,
    bdCount,
    baCount,
  },
}) {
  const [favorite, setFavorite] = useState();
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const addedToFavorite = async () => {
    try {
      const { data } = await Axios.get(`api/v1/favorite/${houseId}`);
      setOpen(true);
      setFavorite(data.message);
    } catch (err) {
      setOpen(true);
      setError(err.message);
    }
  };

  return (
    <Card className={classes.root} elevation="0">
      <CardActionArea>
        <CardMedia className={classes.media}>
          <img src={img || fakeImage} alt="house" />
        </CardMedia>
        <CardContent>
          <div className={classes.cardTitle}>
            <Typography gutterBottom variant="h5" component="h2">
              {title.slice(0, 1).toUpperCase() + title.slice(1)}
            </Typography>
            <Typography className={classes.location}>
              <LocationOnIcon className={classes.icon} />
              {location}
            </Typography>
          </div>
          <Typography
            variant="body2"
            component="p"
            className={classes.description}
          >
            {description}
          </Typography>
          <Typography component="p">
            house type: {category.toUpperCase()}
          </Typography>
          <Typography component="p">area: {area}</Typography>

          <div className={classes.iconBox}>
            <Typography>owner name : {username} </Typography>
            <Typography>mobile : {mobile} </Typography>
          </div>

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
        <Link to={`${HOUSES}/${houseId}`} className={classes.detailsLink}>
          more details
        </Link>
        <Button>
          <FavoriteBorderIcon
            className={classes.favIcon}
            id={houseId}
            onClick={addedToFavorite}
          />
        </Button>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={error ? 'error' : 'success'}>
            {error || favorite}
          </Alert>
        </Snackbar>
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
