import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Divider, Typography } from '@material-ui/core';

import CardContainer from '../../Components/CardContainer';
import useStyles from './style';

function Landing() {
  const classes = useStyles();

  const [houses, setHouses] = useState([]);
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
    fetchingData(source)
      .then((res) => res)
      .then(({ data }) => {
        setHouses(data);
      })
      .catch((err) => setErrorMsg(err));
    return () => {
      source.cancel('axios request cancelled');
    };
  }, []);

  return (
    <Container maxWidth="lg" className={classes.root}>
      {errorMsg && <div>{errorMsg}</div>}
      <div className={classes.housesSection}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Top-rated
        </Typography>
        <CardContainer houses={sortByTopRating(houses) || []} />
      </div>
      <Divider className={classes.divider} />
      <div className={classes.housesSection}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Newest
        </Typography>
        <CardContainer houses={sortByRecentlyAdded(houses) || []} />
      </div>
    </Container>
  );
}

export default Landing;
