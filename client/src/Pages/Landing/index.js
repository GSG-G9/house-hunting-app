/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CardContainer from '../../Components/CardContainer';
import useStyles from './style';

function Landing() {
  const classes = useStyles();

  const [houses, setHouses] = useState([]);
  const [topRatingHouses, setTopRatingHouses] = useState([]);
  const [recentlyAddedHouses, setRecentlyAddedHouses] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const sortByTopRating = (housesData) => {
    const cloningHouse = [...housesData];
    const sortingHouse = cloningHouse.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
      return 0;
    });
    setTopRatingHouses(sortingHouse);
  };

  const sortByRecentlyAdded = (housesData) => {
    const cloningHouse = [...housesData];
    const sortingHouse = cloningHouse.sort((a, b) => {
      if (a.created_at > b.created_at) {
        return -1;
      }
      if (a.created_at < b.created_at) {
        return 1;
      }
      return 0;
    });
    setRecentlyAddedHouses(sortingHouse);
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
      if (axios.isCancel(err)) {
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

  useEffect(() => {
    sortByTopRating(houses);
    sortByRecentlyAdded(houses);
  }, [houses]);

  return (
    <div className={classes.root}>
      {errorMsg && <div>{errorMsg}</div>}
      <CardContainer houses={houses} />
      <CardContainer houses={topRatingHouses} />
      <CardContainer houses={recentlyAddedHouses} />
    </div>
  );
}

export default Landing;
