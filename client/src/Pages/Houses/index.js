import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import CardContainer from '../../Components/CardContainer';
import Search from '../../Components/SearchBar';
import Filter from '../../Components/AdvanceSearch';
import useStyles from './style';

function SearchPage() {
  const classes = useStyles();

  const [houses, setHouses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('Gaza');
  const [category, setCategory] = useState('apartment');
  const [rooms, setRooms] = useState(2);
  const [price, setPrice] = useState(100);
  const [clear, setClear] = useState(true);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'search':
        setSearch(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'category':
        setCategory(value);
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
  const handleClick = () => {
    setClear(false);

    const filterHouses = houses
      .filter((house) => (price ? Math.round(house.price) >= price : true))
      .filter((house) => (rooms ? house.room_num === +rooms : true))
      .filter((house) => (category ? house.category === category : true))
      .filter((house) =>
        search
          ? house.description
              .toLowerCase()
              .includes(search.toLowerCase().trim()) ||
            house.title.toLowerCase().includes(search.toLowerCase().trim())
          : true
      );
    console.log(filterHouses, 111);
    setFiltered(filterHouses);
  };

  useEffect(() => {
    setClear(true);
    let isCurrent = true;
    (async () => {
      try {
        setLoading(true);
        const {
          data: { data },
        } = await Axios.get(`api/v1/houses/${location}`);
        if (isCurrent) {
          setLoading(false);
          console.log(data);
          setHouses(data);
        }
      } catch (err) {
        setError(err.response.data.message);
        setLoading(false);
      }
    })();
    return () => {
      isCurrent = false;
    };
  }, [location]);

  return (
    <Container maxWidth="lg" className={classes.header}>
      <Search onClick={handleClick} value={search} onChange={handleChange} />
      {loading && <CircularProgress size={25} color="primary" />}

      <Filter
        onChange={handleChange}
        handlePrice={handlePrice}
        priceValue={price}
        catValue={category}
        roomValue={rooms}
        locationValue={location}
      />
      {error ? (
        <Alert severity="error"> Internal server Error : 500 </Alert>
      ) : (
        <div className={classes.container}>
          <Typography variant="h5" component="h4" color="primary">
            {clear ? houses.length : filtered.length} houses Available on
            {location}
          </Typography>
          <CardContainer houses={clear ? houses : filtered} />
        </div>
      )}
    </Container>
  );
}

export default SearchPage;
