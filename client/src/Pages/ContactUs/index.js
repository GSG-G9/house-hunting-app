import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { ReactComponent as Image } from '../../Utils/images/contact_us.svg';
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
          <Image width="500" />
        </Grid>
        <Grid item xs="12" sm="12" md="6" lg="6" className={clasess.desc}>
          <div className={clasess.descBox}>
            <Typography variant="h2">We’d love to hear from you</Typography>
            <Typography>
              Whether you have a question about features, trials, pricing, need
              a demo, or anything else, our team is ready to answer all your
              questions
            </Typography>
          </div>
          <div className={clasess.contactDetails}>
            <Typography variant="h3">Get in touch with us</Typography>
            <div className={clasess.contactIconContainer}>
              <div className={clasess.contactIconBox}>
                <GitHubIcon />
                <Typography>house-hunting</Typography>
              </div>
              <div className={clasess.contactIconBox}>
                <TwitterIcon />
                <Typography>@house-hunting</Typography>
              </div>
              <div className={clasess.contactIconBox}>
                <LinkedInIcon />
                <Typography>house-hunting</Typography>
              </div>
              <div className={clasess.contactIconBox}>
                <EmailIcon />
                <Typography>house-hunting@hhunting.com</Typography>
              </div>
              <div className={clasess.contactIconBox}>
                <PhoneIcon />
                <Typography>+9725990000000</Typography>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUs;
