import React from 'react';
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import house from '../../Utils/images/card/house.png';

export default function CardComponent() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia title="Contemplative Reptile" />
        <img src={house} alt="house" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Multi Family home
          </Typography>
          <Typography variant="body2" component="p" />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>more details</Button>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
  );
}
