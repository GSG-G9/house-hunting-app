import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
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
  const { houseId } = useParams();

  const fetchingData = async (isCurrent) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/api/v1/houses/id/${houseId}`);
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
    fetchingData(isCurrent);

    return () => {
      isCurrent = false;
    };
  }, []);

  const getCityName = (locationId) => {
    const { city } = locations.find(({ id }) => id === locationId);
    return city;
  };

  let renderElm;

  if (errorMsg.message) {
    renderElm = (
      <div className={classes.alertBox}>
        <Alert severity="error">{errorMsg.message}</Alert>
      </div>
    );
  } else if (isLoading) {
    renderElm = <CircularProgress />;
  } else {
    renderElm = (
      <>
        <Grid container>
          <Grid xs="12" sm="12" md="6" lg="6" className={classes.imgSection}>
            <div className={classes.imageBox}>
              <img src={houses.image} alt="house" />
            </div>
          </Grid>
          <Grid xs="12" sm="12" md="6" lg="6" className={classes.desc}>
            <Typography variant="h2">{houses.title}</Typography>
            <Typography className={classes.priceDetails}>
              <span>${houses.price} pm</span>
              <span>
                <LocationOnRoundedIcon />
                <Typography>
                  {getCityName(houses.location_id || 1)}
                </Typography>{' '}
              </span>
            </Typography>
            <Typography className={classes.descDetails}>
              {houses.description}
            </Typography>
            <div className={classes.descAddress}>
              <Typography>
                <AccountCircleIcon />
                {houses.location_id}
              </Typography>
              <Typography>
                <EmailRoundedIcon />
                {houses.email}
              </Typography>
              <Typography>
                <PhoneRoundedIcon />
                {houses.mobile}
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
        <Grid lg="12" container>
          <RelatedHouse location={getCityName(houses.location_id || 1)} />
        </Grid>
      </>
    );
  }

  return (
    <Container maxWidth="lg" className={classes.root}>
      {renderElm}
    </Container>
  );
}

export default DetailsHouse;
