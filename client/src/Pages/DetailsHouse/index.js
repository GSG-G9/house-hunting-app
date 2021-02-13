import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import Add from '@material-ui/icons/Add';
import Alert from '@material-ui/lab/Alert';

import Button from '../../Components/Button';
import RelatedHouse from './RelatedHouse';
import useStyles from './style';
import { locations } from '../../Utils/staticData';
import { HOME_PAGE } from '../../Utils/routes.constant';

function DetailsHouse() {
  const classes = useStyles();
  const [houses, setHouses] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const { pathname, state } = useLocation();

  const houseId = pathname.split('/')[2];

  const houseData = {
    img: '',
    title: '',
    description: '',
    price: '',
    username: '',
    email: '',
    mobile: '',
  };
  if (state) {
    console.log(state);
    houseData.img = state.img;
    houseData.title = state.title;
    houseData.description = state.description;
    houseData.locationId = state.location;
    houseData.price = state.price;
    houseData.username = state.username;
    houseData.email = state.email;
    houseData.mobile = state.mobile;
    setIsLoading(false);
  }

  const fetchingData = async (isCurrent) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/api/v1/houses/${houseId}`);
      console.log(data);
      if (isCurrent) {
        setHouses(data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMsg(error.response.data);
    }
  };

  useEffect(() => {
    let isCurrent = true;
    window.scrollTo(0, 0);
    if (!state) {
      fetchingData(isCurrent);
    }

    return () => {
      isCurrent = false;
    };
  }, []);

  const getCityName = (_locationId) => {
    console.log(_locationId);
    const { city } = locations.find(({ id: _id }) => _id === _locationId);
    return city;
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container>
        <Grid xs="12" sm="12" md="6" lg="6" className={classes.imgSection}>
          <div className={classes.imageBox}>
            <img src={houseData.img || houses.image} alt="house" />
          </div>
        </Grid>
        <Grid xs="12" sm="12" md="6" lg="6" className={classes.desc}>
          {errorMsg && <Alert />}
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Typography variant="h2">
                {houseData.title || houses.title}
              </Typography>
              <Typography className={classes.priceDetails}>
                <span>${houseData.price || houses.price} pm</span>
                <span>
                  <LocationOnRoundedIcon />
                  <Typography>
                    {getCityName(houseData.locationId || houseId)}
                  </Typography>{' '}
                </span>
              </Typography>
              <Typography className={classes.descDetails}>
                {houseData.description || houses.description}
              </Typography>
              <div className={classes.descAddress}>
                <Typography>
                  <AccountCircleIcon />
                  {houseData.username || houses.location_id}
                </Typography>
                <Typography>
                  <EmailRoundedIcon />
                  {houseData.email || houses.email}
                </Typography>
                <Typography>
                  <PhoneRoundedIcon />
                  {houseData.mobile || houses.mobile}
                </Typography>
              </div>
            </>
          )}
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
