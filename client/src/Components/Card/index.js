import React from 'react';
import { shape, string, number } from 'prop-types';

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

import useStyles from './style';

export default function CardComponent({
  house: { img, title, description, location, bdCount, baCount, price },
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media}>
          <img src={img} alt="house" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
            <LocationOnIcon className={classes.icon} /> {location}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
          <Typography>
            ${price}
            <HotelIcon className={classes.icon} /> bd {bdCount}
            <BathtubIcon className={classes.icon} /> ba {baCount}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.border}>more details</Button>
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
