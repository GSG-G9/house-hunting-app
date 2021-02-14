import React, { useState, useEffect, createContext } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchData = async () => {
    try {
      const { data } = await Axios('api/v1/is-auth');
      setIsAuth(data.isAuth);
    } catch (error) {
      setErrorMsg(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth, errorMsg }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
export default AuthProvider;
