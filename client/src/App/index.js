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

import AuthProvider from '../Context/Authorization';

import theme from './theme';
import Layout from '../Pages/Layout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Landing from '../Pages/Landing';
import DetailsHouse from '../Pages/DetailsHouse';
import Search from '../Pages/Houses';
import Favorite from '../Pages/FavoriteList';
import Profile from '../Pages/Profile';
import ContactUs from '../Pages/ContactUs';
import { PrivateRoute, PublicRoute } from '../Components/Route';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path={HOME_PAGE}>
              <Landing />
            </Route>
            <Route exact path={HOUSES}>
              <Search />
            </Route>
            <Route path={ABOUT_US} />
            <Route path={CONTACT_US}>
              <ContactUs />
            </Route>
            <Route path={`${HOUSES}/:houseId`}>
              <DetailsHouse />
            </Route>
            <PublicRoute path={LOGIN_PAGE} component={Login} />
            <PublicRoute path={SIGNUP_PAGE} component={Register} />
            <PrivateRoute path={PROFILE} component={Profile} />
            <PrivateRoute path={FAVORITE} component={Favorite} />
            <Route />
          </Switch>
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
