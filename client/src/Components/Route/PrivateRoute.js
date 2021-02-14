import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LOGIN_PAGE } from '../../Utils/routes.constant';

import AuthContext from '../../Context/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuth } = useContext(AuthContext);
  return (
    <Route {...rest}>
      {isAuth ? <Component /> : <Redirect to={{ pathname: LOGIN_PAGE }} />}
    </Route>
  );
}
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
