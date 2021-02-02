import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    backgroundColor: '#1D3D59',
    '& *': {
      color: '#EDF2F8',
    },
    '& p': {
      paddingLeft: '5px',
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.footer}>
      <CopyrightIcon />
      <p>2021 all copyright reserved</p>
    </Container>
  );
}

export default Footer;
