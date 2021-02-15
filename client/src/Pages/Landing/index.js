import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import {
  Container,
  Divider,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import { HOUSES } from '../../Utils/routes.constant';
import CardContainer from '../../Components/CardContainer';
import Search from '../../Components/SearchBar';

import useStyles from './style';

function Landing() {
  const classes = useStyles();
  const history = useHistory();

  const [houses, setHouses] = useState([]);
  const [newHouses, setNewHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState({});

  const handleSearchBar = () => {
    history.push(HOUSES);
  };
  const fetchingData = async (isCurrent, { url, limit, skip }, cb) => {
    try {
      setLoading(true);
      const { data } = await Axios.get(
        `${url}?limit=${limit || 6}&skip=${skip || 0}`
      );
      if (isCurrent) {
        cb(data.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg('internal server error');
    }
  };

  useEffect(() => {
    let isCurrent = true;
    fetchingData(
      isCurrent,
      { url: '/api/v1/houses', limit: 6, skip: 0 },
      setHouses
    );
    fetchingData(
      isCurrent,
      { url: '/api/v1/newest-houses', limit: 6, skip: 0 },
      setNewHouses
    );
    return () => {
      isCurrent = false;
    };
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
          <div className={classes.header}>
            <Search
              onClick={handleSearchBar}
              onChange={() => {
                handleSearchBar();
              }}
            />
          </div>
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
              <CardContainer houses={newHouses} />
            )}
          </div>
        </>
      )}
    </Container>
  );
}

export default Landing;
