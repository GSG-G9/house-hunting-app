import React from 'react';
import Container from '@material-ui/core/Container';
import CopyrightIcon from '@material-ui/icons/Copyright';

import useStyles from './style';

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <CopyrightIcon />
        <p>2021 all copyright reserved</p>
      </Container>
    </footer>
  );
}

export default Footer;
