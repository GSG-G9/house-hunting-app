import React from 'react';

import { Container } from '@material-ui/core';

import PropTypes from 'prop-types';

import Card from '../Card';

import useStyles from './style';

function CardContainer({ houses }) {
  const classes = useStyles();

  return (
    <Container className={classes.housesContainer}>
      {houses.map((house) => (
        <Card house={house} />
      ))}
    </Container>
  );
}

CardContainer.propTypes = {
  houses: PropTypes.instanceOf(Array).isRequired,
};

export default CardContainer;
