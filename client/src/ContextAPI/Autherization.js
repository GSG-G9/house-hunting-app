import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Autherization() {
  const [id, setId] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const fetchData = () => {
    const {
      data: { data },
    } = Axios('api/v1/isauth');
  };

  return <div>Hello from Autherization component</div>;
}

export default Autherization;
