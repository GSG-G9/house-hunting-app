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
import Layout from '../Pages/Layout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Landing from '../Pages/Landing';
import Favorite from '../Pages/FavoriteList';

function App() {
  return (
    <Switch>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Route exact path={HOME_PAGE}>
            <Landing />
          </Route>
          <Route path={LOGIN_PAGE}>
            <Login />
          </Route>
          <Route path={SIGNUP_PAGE}>
            <Register />
          </Route>
          <Route path={HOUSES} />
          <Route path={PROFILE} />
          <Route path={FAVORITE}>
            <Favorite />
          </Route>
          <Route path={ABOUT_US} />
          <Route path={CONTACT_US} />

          <Route />
        </Layout>
      </ThemeProvider>
    </Switch>
  );
}

export default App;
