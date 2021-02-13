import React, { useContext } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

import { LOGIN_PAGE } from '../../Utils/routes.constant';

import { AuthContext } from '../../Context/Autherization';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuth } = useContext(AuthContext);

  const location = useLocation();
  return (
    <Route {...rest}>
      {isAuth ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: LOGIN_PAGE, state: { from: location } }} />
      )}
    </Route>
  );
}

export default PrivateRoute;
