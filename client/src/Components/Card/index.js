import React from 'react';
import { PropTypes } from 'prop-types';
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

import { locations } from '../../Utils/staticData';
import { HOUSES } from '../../Utils/routes.constant';

import useStyles from './style';

const { shape, string, number } = PropTypes;

export default function CardComponent({
  house: {
    id,
    image: img,
    title,
    description,
    location_id: location,
    room_num: bdCount,
    bathroom_num: baCount,
    price,
    username,
    email,
    mobile,
  },
}) {
  const classes = useStyles();

  const getCityName = (locationId) => {
    const { city } = locations.find(({ id: _id }) => _id === locationId);
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
        <Link
          to={{
            pathname: `${HOUSES}/${id}`,
            state: {
              id,
              img,
              title,
              description,
              location,
              bdCount,
              baCount,
              price,
              username,
              email,
              mobile,
            },
          }}
          className={classes.border}
        >
          more details
        </Link>
        <Button>
          <FavoriteBorderIcon className={classes.favIcon} />
        </Button>
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
