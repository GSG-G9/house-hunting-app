import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';

import useStyles from './style';

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <CopyrightIcon className={classes.copy} />
      <p> 2021 all copyright reserved</p>
    </footer>
  );
}

export default Footer;
