import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFFFFF',
    borderBottom: '3px solid #1D3D59',
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
          <Toolbar>
            <Typography variant="h6" className={classes.logo}>
              House Hunting
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}
