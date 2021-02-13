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

import AuthProvider from '../Context/Autherization';

import theme from './theme';
import Layout from '../Pages/Layout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Landing from '../Pages/Landing';
import Search from '../Pages/Houses';
import Favorite from '../Pages/FavoriteList';
import Profile from '../Pages/Profile';
import PrivateRoute from '../Components/Route/Private';
import PublicRoute from '../Components/Route/PublicRoute';

function App() {
  return (
    <AuthProvider>
      <Switch>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <PublicRoute exact path={HOME_PAGE}>
              <Landing />
            </PublicRoute>
            <PublicRoute path={LOGIN_PAGE}>
              <Login />
            </PublicRoute>
            <PublicRoute path={SIGNUP_PAGE}>
              <Register />
            </PublicRoute>
            <PublicRoute path={HOUSES}>
              <Search />
            </PublicRoute>
            <PrivateRoute path={PROFILE}>
              <Profile />
            </PrivateRoute>
            <PrivateRoute path={FAVORITE}>
              <Favorite />
            </PrivateRoute>
            <Route path={ABOUT_US} />
            <Route path={CONTACT_US} />
            <Route />
          </Layout>
        </ThemeProvider>
      </Switch>
    </AuthProvider>
  );
}

export default App;
