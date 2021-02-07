/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import CardContainer from '../../Components/CardContainer';

import useStyles from './style';

function Landing() {
  const classes = useStyles();

  const [houses, setHouses] = useState([]);
  const [topRatingHouses, setTopRatingHouses] = useState([]);

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

  useEffect(() => {
    setHouses(housesArr);
    sortByTopRating(houses);
  }, [houses]);

  return (
    <div className={classes.root}>
      <CardContainer houses={houses} />
      <CardContainer houses={topRatingHouses} />
    </div>
  );
}

export default Landing;
