import React from 'react';
import { Container } from '@material-ui/core';

import useStyles from './style';

function RelatedHouse() {
  const classes = useStyles();

  return <Container maxWidth="lg" className={classes.root} />;
}

export default RelatedHouse;
