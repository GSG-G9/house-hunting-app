import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import LinkItem from '../LinkItem';
import useStyles from './style';

export default function index() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.logo}>
            House Hunting
          </Typography>
          <Typography className={classes.linkItem}>
            <LinkItem underline="none" linkUrl="/">
              Houses
            </LinkItem>
            <LinkItem underline="none" linkUrl="/aboutus">
              Aboutus
            </LinkItem>
            <LinkItem
              underline="none"
              registerClass="signupLink"
              linkUrl="/signup"
            >
              Signup
            </LinkItem>
            <LinkItem underline="none" linkUrl="/signin">
              Signin
            </LinkItem>
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
