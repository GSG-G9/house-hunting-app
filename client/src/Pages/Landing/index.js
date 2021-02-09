import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Divider,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import CardContainer from '../../Components/CardContainer';
import useStyles from './style';

function Landing() {
  const classes = useStyles();

  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState({});

  async function fetchingData(source, limit = 6, skip = 0) {
    try {
      const { data } = await axios.get(
        `/api/v1/houses?limit=${limit}&skip=${skip}`
      );
      return data;
    } catch (error) {
      return setErrorMsg(error.message);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchingData()
      .then((res) => res)
      .then(({ data }) => {
        setHouses(data);
        setLoading(false);
      })
      .catch((err) => setErrorMsg(err));
  }, []);

  return (
    <Container maxWidth="lg" className={classes.root}>
      {errorMsg.message ? (
        <div className={classes.alertContainer}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {errorMsg.message}
          </Alert>
        </div>
      ) : (
        <>
          <div className={classes.housesSection}>
            <Typography variant="h2" className={classes.sectionTitle}>
              Top-rated
            </Typography>
            {loading ? (
              <div className={classes.spinner}>
                <CircularProgress color="primary" />
              </div>
            ) : (
              <CardContainer
                houses={houses.sort((a, b) => a.rating - b.rating)}
              />
            )}
          </div>
          <Divider className={classes.divider} />
          <div className={classes.housesSection}>
            <Typography variant="h2" className={classes.sectionTitle}>
              Newest
            </Typography>
            {loading ? (
              <div className={classes.spinner}>
                <CircularProgress color="primary" />
              </div>
            ) : (
              <CardContainer houses={houses.sort((a, b) => a.id - b.id)} />
            )}
          </div>
        </>
      )}
    </Container>
  );
}

export default Landing;
