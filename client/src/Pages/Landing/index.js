import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import axios from 'axios';
import {
  Container,
  Divider,
  Typography,
  CircularProgress,
} from '@material-ui/core';

import CardContainer from '../../Components/CardContainer';
import useStyles from './style';

function ServerError({ className }) {
  return (
    <div className={className}>
      <h3>
        Oops <span>!</span>
      </h3>
      <h4>500</h4>
      <p>Internal Server Error</p>
    </div>
  );
}

function Landing() {
  const classes = useStyles();

  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

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
      {errorMsg ? (
        <ServerError errMsg={errorMsg} className={classes.serverError} />
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
      ;
    </Container>
  );
}

ServerError.propTypes = {
  className: Proptypes.string.isRequired,
};

export default Landing;
