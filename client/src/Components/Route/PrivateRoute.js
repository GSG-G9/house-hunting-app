import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../../Context/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuth, authLoading } = useContext(AuthContext);
  return <Route {...rest}>{isAuth && !authLoading && <Component />}</Route>;
}
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
