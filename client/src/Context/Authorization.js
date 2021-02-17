import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState();
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        setAuthLoading(true);
        await Axios('/api/v1/is-auth');
        setIsAuth(true);
        setAuthLoading(false);
      } catch (err) {
        setAuthLoading(false);
        if (err.response.status === 401) {
          setIsAuth(false);
        } else {
          setError(
            err.response ? err.response.data.message : 'internal server error'
          );
        }
      }
    })();
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth, authLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
export default AuthProvider;
