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

  const sortByTopRating = (housesData) => {
    const cloningHouse = [...housesData];
    return cloningHouse.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
      return 0;
    });
  };

  const sortByRecentlyAdded = (housesData) => {
    const cloningHouse = [...housesData];
    return cloningHouse.sort((a, b) => {
      if (a.created_at > b.created_at) {
        return -1;
      }
      if (a.created_at < b.created_at) {
        return 1;
      }
      return 0;
    });
  };

  async function fetchingData(source, limit = 6, skip = 0) {
    try {
      const { data } = await axios.get(
        `/api/v1/houses?limit=${limit}&skip=${skip}`,
        {
          cancelToken: source.token,
        }
      );
      return data;
    } catch (error) {
      if (axios.isCancel(error)) {
        return setErrorMsg('axios request cancelled');
      }
      return setErrorMsg(error.message);
    }
  }

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    setLoading(true);
    fetchingData(source)
      .then((res) => res)
      .then(({ data }) => {
        setHouses(data);
        setLoading(false);
      })
      .catch((err) => setErrorMsg(err));
    return () => {
      source.cancel('axios request cancelled');
    };
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
              <CardContainer houses={sortByTopRating(houses) || []} />
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
              <CardContainer houses={sortByRecentlyAdded(houses) || []} />
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
