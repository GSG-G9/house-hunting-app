import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await Axios('api/v1/is-auth');
        setIsAuth(data.isAuth);
      } catch (error) {
        setIsAuth(false);
      }
    })();
  }, [refresh]);

  return (
    <AuthContext.Provider value={{ setRefresh, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
export default AuthProvider;
