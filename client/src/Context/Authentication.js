/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, createContext } from 'react';
import Axios from 'axios';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [id, setId] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchData = async () => {
    try {
      const { data } = await Axios('api/v1/is-auth');
      setIsAuth(data.isAuth);
      setId(data.userId);
    } catch (error) {
      setErrorMsg(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
