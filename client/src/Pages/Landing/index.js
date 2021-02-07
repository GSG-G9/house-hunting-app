/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import CardContainer from '../../Components/CardContainer';

import useStyles from './style';
import housesArr from '../../houseData';

function Landing() {
  const classes = useStyles();

  const [houses, setHouses] = useState([]);
  const [topRatingHouses, setTopRatingHouses] = useState([]);
  const [recentlyAddedHouses, setRecentlyAddedHouses] = useState([]);

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

  useEffect(() => {
    setHouses(housesArr);
    sortByTopRating(houses);
    sortByRecentlyAdded(houses);
  }, [houses]);

  return (
    <div className={classes.root}>
      <CardContainer houses={houses} />
      <CardContainer houses={topRatingHouses} />
      <CardContainer houses={recentlyAddedHouses} />
    </div>
  );
}

export default Landing;
