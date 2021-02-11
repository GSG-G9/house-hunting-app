import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Alert from '@material-ui/lab/Alert';

import CardContainer from '../../Components/CardContainer';
import Search from '../../Components/SearchBar';
import Filter from '../../Components/AdvanceSearch';
import useStyles from './style';

function SearchPage() {
  const classes = useStyles();

  const [houses, setHouses] = useState([]);
  const [search, setSearch] = useState('');
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
  const handleData = async (isCurrent) => {
    try {
      const {
        data: { data },
      } = await Axios.get(`api/v1/houses/${location}`);
      const filter = data.filter(
        (house) =>
          Math.round(house.price) === price &&
          house.room_num === parseInt(rooms, 10) &&
          house.category === catagories &&
          (house.description
            .toLowerCase()
            .includes(search.toLowerCase().trim()) ||
            house.title.toLowerCase().includes(search.toLowerCase().trim()))
      );

      if (isCurrent) {
        setHouses(filter);
      }
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
    <div className={classes.header}>
      <Search onClick={handleData} value={search} onChange={handleChange} />
      <Filter onChange={handleChange} handlePrice={handlePrice} />
      <div className={classes.container}>
        <Divider className={classes.divider} />
        <Typography variant="h5" component="h2" color="primary">
          {houses.length} houses Available
        </Typography>
        {houses.length > 0 ? (
          <CardContainer houses={houses} />
        ) : (
          <Alert severity="info">No Houses Available </Alert>
        )}
        {error && <Alert severity="error">{error} </Alert>}
      </div>
    </div>
  );
}

export default SearchPage;
