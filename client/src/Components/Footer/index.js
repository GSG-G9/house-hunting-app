import React from 'react';
import Container from '@material-ui/core/Container';
import CopyrightIcon from '@material-ui/icons/Copyright';
import useStyles from './style';

function Footer() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.footer}>
      <div>
        <CopyrightIcon />
        <p>2021 all copyright reserved</p>
      </div>
    </Container>
  );
}

export default Footer;
