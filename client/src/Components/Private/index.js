import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const location = useLocation();
  return (
    <Route {...rest}>
      <Component />
      <Redirect to={{ pathname: '/login', state: { from: location } }} />
    </Route>
  );
}

export default PrivateRoute;
