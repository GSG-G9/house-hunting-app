import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
  HOME_PAGE,
  LOGIN_PAGE,
  SIGNUP_PAGE,
  HOUSES,
  PROFILE,
  FAVORITE,
  ABOUT_US,
  CONTACT_US,
} from '../Utils/routes.constant';
import theme from './theme';
import Navbar from '../Components/Navbar';

function App() {
  return (
    <Switch>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <h1>welcome form hunting app!</h1> */}
        <Navbar />
      </ThemeProvider>
      <Route exact path={HOME_PAGE} />
      <Route path={LOGIN_PAGE} />
      <Route path={SIGNUP_PAGE} />
      <Route path={HOUSES} />
      <Route path={PROFILE} />
      <Route path={FAVORITE} />
      <Route path={ABOUT_US} />
      <Route path={CONTACT_US} />
      <Route />
    </Switch>
  );
}

export default App;
