import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, useLocation } from 'react-router-dom';

import { CONTACT_US } from '../../Utils/routes.constant';

import { AuthContext } from '../../Context/Autherization';

function PublicRoute({ component: Component, ...rest }) {
  const { isAuth } = useContext(AuthContext);

  const location = useLocation();
  return (
    <Route {...rest}>
      {!isAuth ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: CONTACT_US, state: { from: location } }} />
      )}
    </Route>
  );
}
PublicRoute.propTypes = {
  Component: PropTypes.func,
};

export default PublicRoute;
