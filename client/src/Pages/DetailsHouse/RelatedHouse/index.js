import React, { useState, useEffect } from 'react';
import {
  Container,
  Divider,
  Typography,
  CircularProgress,
} from '@material-ui/core';

import CardContainer from '../../../Components/CardContainer';
import useStyles from './style';

function RelatedHouse() {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [houses, setHouses] = useState([]);

  const housesArr = [
    {
      id: 1,
      location_id: 3,
      title: 'house with 3 rooms',
      description:
        'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.',
      category: 'appartment',
      availability: true,
      room_num: 3,
      bathroom_num: 2,
      price: '90.00',
      area: '100.00',
      img:
        'https://us.123rf.com/450wm/iriana88w/iriana88w1711/iriana88w171100467/89727643-beautiful-exterior-of-contemporary-home-with-two-car-garage-spaces-at-sunset-northwest-usa.jpg?ver=6',
      rating: 9,
      created_at: '2021-02-06T09:07:27.315Z',
    },
    {
      id: 2,
      location_id: 2,
      title: 'house with 2 rooms',
      description:
        'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.',
      category: 'appartment',
      availability: true,
      room_num: 2,
      bathroom_num: 2,
      price: '95.00',
      area: '100.00',
      img:
        'https://us.123rf.com/450wm/kab3/kab31812/kab3181200009/114260507-house-with-solar-system-in-the-evening.jpg?ver=6',
      rating: 4,
      created_at: '2021-02-06T09:07:27.315Z',
    },
    {
      id: 3,
      location_id: 1,
      title: 'house with 5 rooms',
      description:
        'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.',
      category: 'appartment',
      availability: true,
      room_num: 5,
      bathroom_num: 3,
      price: '150.00',
      area: '200.00',
      img:
        'https://us.123rf.com/450wm/william87/william871601/william87160100066/51614742-street-in-southern-england-with-typical-houses-there-is-a-main-street-in-a-village-with-typical-brit.jpg?ver=6',
      rating: 5,
      created_at: '2021-02-06T09:07:27.315Z',
    },
    {
      id: 4,
      location_id: 3,
      title: 'house with 3 rooms',
      description:
        'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.',
      category: 'appartment',
      availability: true,
      room_num: 3,
      bathroom_num: 2,
      price: '100.00',
      area: '100.00',
      img:
        'https://us.123rf.com/450wm/iriana88w/iriana88w1711/iriana88w171100467/89727643-beautiful-exterior-of-contemporary-home-with-two-car-garage-spaces-at-sunset-northwest-usa.jpg?ver=6',
      rating: 6.5,
      created_at: '2021-02-06T09:07:27.315Z',
    },
    {
      id: 5,
      location_id: 2,
      title: 'house with 2 rooms',
      description:
        'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.',
      category: 'appartment',
      availability: true,
      room_num: 2,
      bathroom_num: 1,
      price: '100.00',
      area: '100.00',
      img:
        'https://us.123rf.com/450wm/kab3/kab31812/kab3181200009/114260507-house-with-solar-system-in-the-evening.jpg?ver=6',
      rating: 8.3,
      created_at: '2021-02-06T09:07:27.315Z',
    },
    {
      id: 6,
      location_id: 1,
      title: 'house with 5 rooms',
      description:
        'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.',
      category: 'appartment',
      availability: true,
      room_num: 6,
      bathroom_num: 3,
      price: '150.00',
      area: '200.00',
      img:
        'https://us.123rf.com/450wm/william87/william871601/william87160100066/51614742-street-in-southern-england-with-typical-houses-there-is-a-main-street-in-a-village-with-typical-brit.jpg?ver=6',
      rating: 7,
      created_at: '2021-02-06T09:07:27.315Z',
    },
  ];

  useEffect(() => {
    setHouses(housesArr);
    setLoading(false);
  }, []);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Divider className={classes.divider} />
      <div className={classes.relatedHouse}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Related
        </Typography>
        {loading ? (
          <div className={classes.spinner}>
            <CircularProgress color="primary" />
          </div>
        ) : (
          <CardContainer houses={houses} />
        )}
      </div>
    </Container>
  );
}

export default RelatedHouse;
