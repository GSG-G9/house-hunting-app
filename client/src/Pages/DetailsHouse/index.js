import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import Add from '@material-ui/icons/Add';
import Alert from '@material-ui/lab/Alert';

import Button from '../../Components/Button';
import useStyles from './style';
import { HOME_PAGE } from '../../Utils/routes.constant';
import RelatedHouse from './RelatedHouse';
import { fakeImage } from '../../Utils/staticData';
import Loading from '../../Components/loading';

function DetailsHouse() {
  const classes = useStyles();
  const [house, setHouse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const { houseId } = useParams();

  const fetchingData = async (isCurrent) => {
    try {
      setIsLoading(true);
      const { data } = await Axios.get(`/api/v1/house/${houseId}`);
      if (isCurrent) {
        setHouse(data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMsg(error.response.data);
    }
  };

  useEffect(() => {
    let isCurrent = true;
    fetchingData(isCurrent);

    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <Container maxWidth="lg" className={classes.root}>
      {isLoading && <Loading size={30} />}
      {errorMsg.message ? (
        <div className={classes.alertBox}>
          <Alert severity="error">{errorMsg.message}</Alert>
        </div>
      ) : (
        <>
          <Grid container>
            <Grid xs="12" sm="12" md="6" lg="6" className={classes.imgSection}>
              <div className={classes.imageBox}>
                <img src={house.image || fakeImage} alt="house" />
              </div>
            </Grid>
            <Grid xs="12" sm="12" md="6" lg="6" className={classes.desc}>
              <Typography variant="h2">{house.title}</Typography>
              <Typography className={classes.priceDetails}>
                <span>${house.price} pm</span>
                <span>
                  <LocationOnRoundedIcon />
                  <Typography>{house.location}</Typography>
                </span>
              </Typography>
              <Typography>house type : {house.category}</Typography>

              <Typography className={classes.descDetails}>
                {house.description}
              </Typography>
              <Typography>room : {house.room_num}</Typography>
              <Typography>bathroom : {house.bathroom_num}</Typography>
              <Typography>area : {house.area}</Typography>

              <div className={classes.descAddress}>
                <Typography>
                  <AccountCircleIcon />
                  {house.location_id}
                </Typography>
                <Typography>
                  <EmailRoundedIcon />
                  {house.email}
                </Typography>
                <Typography>
                  <PhoneRoundedIcon />
                  {house.mobile}
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
            <RelatedHouse location={house.location} />
          </Grid>
        </>
      )}
    </Container>
  );
}

export default DetailsHouse;
