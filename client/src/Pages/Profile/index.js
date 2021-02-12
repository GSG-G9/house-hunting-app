import React from 'react';

import { Container } from '@material-ui/core';

import SideBar from './SideBar';
import useStyles from './style';

function UserProfile() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <SideBar />
    </Container>
  );
}

export default UserProfile;
