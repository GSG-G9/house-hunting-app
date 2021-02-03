import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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
  linkItem: {
    '& > a': {
      marginLeft: '1.25rem',
      fontWeight: 'bold',
      color: '#2F5C84',
    },
  },
  signupLik: {
    color: '#FFFFFF !important',
    backgroundColor: '#EB9235',
    padding: '1rem',
    textAlign: 'center',
    borderRadius: '3px',
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
              <Link underline="none" href="/">
                Houses
              </Link>
              <Link underline="none" href="/aboutus">
                Aboutus
              </Link>
              <Link
                underline="none"
                href="/signup"
                className={classes.signupLik}
              >
                Signup
              </Link>
              <Link underline="none" href="/signin">
                Signin
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}
