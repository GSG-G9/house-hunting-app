import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Typography from '@material-ui/core/Typography';

import CardContainer from '../../Components/CardContainer';
import Search from '../../Components/SearchBar';
import Filter from '../../Components/AdvanceSearch';

function SearchPage() {
  const [houses, setHouses] = useState([]);
  const [search, setSearch] = useState();
  const [location, setLocation] = useState();
  const [catagories, setCatagories] = useState();
  const [rooms, setRooms] = useState(0);
  const [price, setPrice] = useState(100);
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'search':
        setSearch(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'catagories':
        setCatagories(value);
        break;
      case 'rooms':
        setRooms(value);
        break;

      default:
    }
  };
  const handlePrice = (event, val) => {
    setPrice(val);
  };
  const handleData = async () => {
    try {
      const {
        data: { data },
      } = await Axios.get(`api/v1/houses/${location}`);
      const filter = data.filter(
        (house) =>
          Math.round(house.price) === price &&
          house.room_num === parseInt(rooms, 10) &&
          house.category === catagories
      );

      setHouses(filter);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    let isCurrent = true;
    handleData(isCurrent);
    return () => {
      isCurrent = false;
    };
  }, [houses]);

  return (
    <div>
      <Typography variant="h5" component="h2">
        {houses.length} houses Available
      </Typography>
      <Search onClick={handleData} value={search} onChange={handleChange} />
      <Filter onChange={handleChange} handlePrice={handlePrice} />
      <CardContainer houses={houses} />
    </div>
  );
}

export default SearchPage;
