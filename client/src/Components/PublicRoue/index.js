import React, { useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';
import { LOGIN_PAGE } from '../../Utils/routes.constant';

import { AuthContext } from '../../Context/Authentication';

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Route {...rest}>
      {!isAuth && restricted ? <Component /> : <Redirect tp={LOGIN_PAGE} />}
    </Route>
  );
};

export default PublicRoute;
