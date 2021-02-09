import React, { useState } from 'react';
import Axios from 'axios';

import Button from '../../Components/Button';
import CardContainer from '../../Components/CardContainer';

function SearchPage() {
  const [houses, setHouses] = useState([]);
  const [error, setError] = useState();
  const handleData = async () => {
    try {
      const location = 'Rafah';
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
      Hello from search page {handleData}
      <Button onClick={handleData}>hi</Button>
      <CardContainer houses={houses} />
    </div>
  );
}

export default SearchPage;
