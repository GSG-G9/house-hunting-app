import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
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
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState({});

  const handleSearchBar = () => {
    history.push(HOUSES);
  };

  const fetchingData = async (isCurrent, limit = 6, skip = 0) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/v1/houses?limit=${limit}&skip=${skip}`
      );
      if (isCurrent) {
        setHouses(data.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
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
            <Search onClick={handleSearchBar} />
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
              <CardContainer houses={houses.sort((a, b) => b.id - a.id)} />
            )}
          </div>
        </>
      )}
    </Container>
  );
}

export default Landing;
