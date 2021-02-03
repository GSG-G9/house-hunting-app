import React from 'react';
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
import house from '../../Utils/images/card/house.png';

import useStyles from './style';

export default function CardComponent() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media}>
          <img src={house} alt="house" />
        </CardMedia>
        <CardContent>
          <Typography>
            <HotelIcon className={classes.icon} /> bd 3
            <BathtubIcon className={classes.icon} /> ba 2
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Multi Family home
          </Typography>
          <Typography variant="body2" component="p">
            available May 1st.has private backyard
          </Typography>
          <Typography>
            $300
            <LocationOnIcon className={classes.icon} /> Gaza-Al-jalaa
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
