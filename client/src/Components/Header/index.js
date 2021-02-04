import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import LinkItem from '../LinkItem';
import useStyles from './style';
import {
  HOME_PAGE,
  LOGIN_PAGE,
  SIGNUP_PAGE,
  HOUSES,
  PROFILE,
  FAVORITE,
  ABOUT_US,
  CONTACT_US,
} from '../../Utils/routes.constant';

export default function index() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.logo}>
            <LinkItem underline="none" linkUrl={HOME_PAGE}>
              House Hunting
            </LinkItem>
          </Typography>
          <Typography className={classes.linkItem}>
            <LinkItem underline="none" linkUrl={HOUSES}>
              Houses
            </LinkItem>
            <LinkItem underline="none" linkUrl={CONTACT_US}>
              Contact us
            </LinkItem>
            <LinkItem underline="none" linkUrl={ABOUT_US}>
              About us
            </LinkItem>
            <LinkItem underline="none" linkUrl={FAVORITE}>
              Favorite
            </LinkItem>
            <LinkItem
              underline="none"
              registerClass="signupLink"
              linkUrl={SIGNUP_PAGE}
            >
              Signup
            </LinkItem>
            <LinkItem underline="none" linkUrl={LOGIN_PAGE}>
              Signin
            </LinkItem>
            <LinkItem underline="none" linkUrl={PROFILE}>
              Profile
            </LinkItem>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
