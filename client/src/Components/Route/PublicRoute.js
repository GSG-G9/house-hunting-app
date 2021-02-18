import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HOME_PAGE } from '../../Utils/routes.constant';

import AuthContext from '../../Context/AuthContext';

function PublicRoute({ component: Component, ...rest }) {
  const { isAuth, authLoading } = useContext(AuthContext);
  return (
    <Route {...rest}>
      {!isAuth && !authLoading ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: HOME_PAGE }} />
      )}
    </Route>
  );
}
PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
