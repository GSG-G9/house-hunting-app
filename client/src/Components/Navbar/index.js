import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LinkItem from '../LinkItem';
import useStyles from './style';

export default function Navbar() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <AppBar position="static" className={classes.root}>
          <Toolbar className={classes.toolBar}>
            <Typography variant="h6" className={classes.logo}>
              House Hunting
            </Typography>
            <Typography className={classes.linkItem}>
              <LinkItem underline="none" text="Houses" linkUrl="/" />
              <LinkItem underline="none" text="Aboutus" linkUrl="/aboutus" />
              <LinkItem
                underline="none"
                text="Signup"
                bgFilled
                linkUrl="/signup"
              />
              <LinkItem underline="none" text="Signin" linkUrl="/signin" />
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}
