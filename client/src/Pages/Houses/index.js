import React, { useState } from 'react';
import Axios from 'axios';

import CardContainer from '../../Components/CardContainer';
import Search from '../../Components/SearchBar';

function SearchPage() {
  const [houses, setHouses] = useState([]);
  const [error, setError] = useState();
  const handleData = async () => {
    try {
      const location = 'Gaza';
      const {
        data: { data },
      } = await Axios.get(`api/v1/houses/${location}`);

      setHouses(data);
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div>
      <Search onClick={handleData} />
      <CardContainer houses={houses} />
    </div>
  );
}

export default SearchPage;
