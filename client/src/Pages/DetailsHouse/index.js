import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import Add from '@material-ui/icons/Add';

import Button from '../../Components/Button';
import useStyles from './style';

function DetailsHouse() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container>
        <Grid xs="12" sm="12" md="6" lg="6" className={classes.imgSection}>
          <div className={classes.imageBox}>
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
              alt="house"
            />
          </div>
        </Grid>
        <Grid xs="12" sm="12" md="6" lg="6" className={classes.desc}>
          <Typography variant="h2">House Tile</Typography>
          <Typography className={classes.priceDetails}>
            <span>$ 100 pm</span>
            <span>
              <LocationOnRoundedIcon />{' '}
              <Typography>Al-rasheed str. Gaza</Typography>{' '}
            </span>
          </Typography>
          <Typography className={classes.descDetails}>
            The apartment is on the seventh floor, contains 3 bedrooms, two
            bathrooms, and a living room, the view from the living room and the
            kitchen overlooks the sea, there is an elevator in the bulding.
            there are a pharmaccy, supermarkets, and a nice coffe near to the
            building.
          </Typography>
          <div className={classes.descAddress}>
            <Typography>
              <AccountCircleIcon />
              Adham Ismail Al-haisami
            </Typography>
            <Typography>
              <EmailRoundedIcon />
              adham.hai@gmail.com
            </Typography>
            <Typography>
              <PhoneRoundedIcon />
              0599556521515251
            </Typography>
          </div>
          <div className={classes.descBtn}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.favriteBtn}
            >
              <Add /> favorite
            </Button>
            <Button variant="outlined" color="primary">
              Back
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DetailsHouse;
