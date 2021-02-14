import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Axios('api/v1/is-auth');
        setIsAuth(true);
      } catch (error) {
        setIsAuth(false);
      }
    })();
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
export default AuthProvider;
