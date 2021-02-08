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
import Register from '../Pages/Register';

function App() {
  return (
    <Switch>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <h1>welcome form hunting app!</h1>
          <Route exact path={HOME_PAGE} />
          <Route path={LOGIN_PAGE} />
          <Route path={SIGNUP_PAGE}>
            <Register />
          </Route>
          <Route path={HOUSES} />
          <Route path={PROFILE} />
          <Route path={FAVORITE} />
          <Route path={ABOUT_US} />
          <Route path={CONTACT_US} />
          <Route />
        </Layout>
      </ThemeProvider>
    </Switch>
  );
}

export default App;
