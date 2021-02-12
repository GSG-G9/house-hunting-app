import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import Add from '@material-ui/icons/Add';

import Button from '../../Components/Button';
import RelatedHouse from './RelatedHouse';
import useStyles from './style';
import { locations } from '../../Utils/staticData';
import { HOME_PAGE } from '../../Utils/routes.constant';

function DetailsHouse() {
  const classes = useStyles();
  const {
    state: {
      img,
      title,
      description,
      location,
      price,
      username,
      email,
      mobile,
    },
  } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getCityName = (locationId) => {
    const { city } = locations.find(({ id: _id }) => _id === locationId);
    return city;
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container>
        <Grid xs="12" sm="12" md="6" lg="6" className={classes.imgSection}>
          <div className={classes.imageBox}>
            <img src={img} alt="house" />
          </div>
        </Grid>
        <Grid xs="12" sm="12" md="6" lg="6" className={classes.desc}>
          <Typography variant="h2">{title}</Typography>
          <Typography className={classes.priceDetails}>
            <span>${price} pm</span>
            <span>
              <LocationOnRoundedIcon />
              <Typography>{getCityName(location)}</Typography>{' '}
            </span>
          </Typography>
          <Typography className={classes.descDetails}>{description}</Typography>
          <div className={classes.descAddress}>
            <Typography>
              <AccountCircleIcon />
              {username}
            </Typography>
            <Typography>
              <EmailRoundedIcon />
              {email}
            </Typography>
            <Typography>
              <PhoneRoundedIcon />
              {mobile}
            </Typography>
          </div>
          <div className={classes.descBtn}>
            <Button
              variant="contained"
              color="primary"
              className={classes.favriteBtn}
            >
              <Add /> favorite
            </Button>
            <Link to={`${HOME_PAGE}`} className={classes.backLink}>
              Back
            </Link>
          </div>
        </Grid>
      </Grid>
      <Grid lg="12">
        <RelatedHouse />
      </Grid>
    </Container>
  );
}

export default DetailsHouse;
