import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LinkItem from '../LinkItem';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFFFFF',
    borderBottom: '3px solid #1D3D59',
    height: '80px',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    '& *': {
      boxSizing: 'border-box',
    },
  },
  toolBar: {
    width: '85%',
  },
  logo: {
    flexGrow: 1,
    color: '#1D3D59',
    fontWeight: 'bold',
  },
}));

export default function index() {
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
