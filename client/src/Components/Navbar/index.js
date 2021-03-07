import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import Button from '../Button';
import LinkItem from '../LinkItem';
import useStyles from './style';
import Loading from '../Loading';

import {
  HOME_PAGE,
  LOGIN_PAGE,
  SIGNUP_PAGE,
  HOUSES,
  PROFILE,
  FAVORITE,
  ABOUT_US,
  CONTACT_US,
} from '../../Utils/routes.constant';
import AuthContext from '../../Context/AuthContext';

function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleClick = async () => {
    try {
      setLoading(true);
      await Axios('api/v1/logout');
      setIsAuth(false);
      setLoading(false);
      setOpen(true);
      history.push(HOME_PAGE);
    } catch (err) {
      setError('Internal server Error');
      setLoading(false);
    }
  };
  return (
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.logo}>
            <LinkItem className={classes.linkItem} linkUrl={HOME_PAGE}>
              House Hunting
            </LinkItem>
          </Typography>
          <LinkItem className={classes.linkItem} linkUrl={HOUSES}>
            Houses
          </LinkItem>
          <LinkItem className={classes.linkItem} linkUrl={CONTACT_US}>
            Contact us
          </LinkItem>
          <LinkItem className={classes.linkItem} linkUrl={ABOUT_US}>
            About us
          </LinkItem>
          {!isAuth ? (
            <>
              <Button
                variant="outlined"
                color="secondary"
                onClick=""
                href={SIGNUP_PAGE}
              >
                SignUp
              </Button>
              <LinkItem className={classes.linkItem} linkUrl={LOGIN_PAGE}>
                Signin
              </LinkItem>
            </>
          ) : (
            <>
              <LinkItem className={classes.linkItem} linkUrl={PROFILE}>
                Profile
              </LinkItem>
              <LinkItem className={classes.linkItem} linkUrl={FAVORITE}>
                Favorite
              </LinkItem>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClick}
              >
                {isLoading ? <Loading /> : 'LogOut'}
              </Button>
            </>
          )}
          <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={error ? 'error' : 'success'}>
              {error || 'LogOut Successfully!'}
            </Alert>
          </Snackbar>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
