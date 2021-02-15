import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState();
  const [authLoading, setAuthLoading] = useState();

  useEffect(() => {
    (async () => {
      try {
        setAuthLoading(true);
        await Axios('api/v1/is-auth');
        setIsAuth(true);
        setAuthLoading(false);
      } catch (error) {
        setAuthLoading(false);
        setIsAuth(false);
      }
    })();
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
export default AuthProvider;
