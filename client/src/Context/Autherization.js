import React, { useState, useEffect, createContext } from 'react';
import Axios from 'axios';

const ContextApi = createContext();

function Authenticator({ children }) {
  const [id, setId] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchData = async () => {
    try {
      const { data } = await Axios('api/v1/isauth');
      setIsAuth(data.isAuth);
      if (isAuth) {
        setId(data.userId);
      }
    } catch (error) {
      setErrorMsg(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <ContextApi.Provider value={(id, isAuth)}>{children}</ContextApi.Provider>
  );
}

export default Authenticator;
