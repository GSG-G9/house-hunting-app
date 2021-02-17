import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

import useStyles from './style';

function ContactUs() {
  const clasess = useStyles();
  return (
    <Container maxWidth="lg" className={clasess.root}>
      <Grid container justify="center" spacing={5}>
        <Grid
          item
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className={clasess.imageContainer}
        >
          <img src="./image/undraw_best_place_r685.svg" alt="about" />
        </Grid>
        <Grid item lg="false" className={clasess.desc}>
          <article className={clasess.aboutUsArticle}>
            <Typography variant="h2">About Us</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
              ultrices eget amet, aliquam. A, scelerisque habitant congue diam
              sodales ut id. Faucibus amet, tempus urna, ven Lorem ipsum dolor
              sit a m et, consectetur adipiscing elit. ultrices eget amet,
              aliquam. A, scelerisque habitant congue diam sodales ut id.
              Faucibus , tempus urna, ven Lorem ipsum dolor sit amet,
              consectetur adipi sc ing elit. Habitasse ultrices eget amet,
              aliquam. A, scelerisque habitant congue diam sodales ut id.
              Faucibus amet, tempus urna, ven Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Habitasse ultrices eget amet,
              aliquam. A, sceler isque habitant congue diam sodales ut id.
              Faucibus amet, tempus urna, ven
            </Typography>
          </article>
          <article className={clasess.differentArticle}>
            <Typography variant="h3">
              What’s diffrente when you work with us
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
              ultrices eget amet, aliquam. A, scelerisque habitant congue diam
              sodales ut id. Faucibus amet, tempus urna, ven Lorem ipsum dolor
              sit a m et, consectetur adipiscing elit. ultrices eget amet,
              aliquam. A, scelerisque habitant congue diam sodales ut id.
              Faucibus , tempus urna, ven Lorem ipsum dolor sit amet,
              consectetur adipi sc ing elit. Habitasse ultrices eget amet,
              aliquam. A, scelerisque habitant congue diam sodales ut id.
              Faucibus amet, tempus urna, ven Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Habitasse ultrices eget amet,
              aliquam. A, sceler isque habitant congue diam sodales ut id.
              Faucibus amet, tempus urna, ven
            </Typography>
          </article>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUs;
