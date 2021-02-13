import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Container,
  Divider,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import CardContainer from '../../../Components/CardContainer';
import useStyles from './style';

function RelatedHouse({ location }) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [houses, setHouses] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchingData = async (isCurrent) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/api/v1/houses/${location}`);
      if (isCurrent) {
        setHouses(data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMsg(error.response.data);
    }
  };

  useEffect(() => {
    let isCurrent = true;
    fetchingData(isCurrent);
    return () => {
      isCurrent = false;
    };
  }, []);

  let renderElm;

  if (isLoading) {
    renderElm = (
      <div className={classes.spinner}>
        <CircularProgress color="primary" />
      </div>
    );
  } else if (errorMsg.message) {
    renderElm = <Alert severity="error">{errorMsg.message}</Alert>;
  } else {
    renderElm = <CardContainer houses={houses} />;
  }

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Divider className={classes.divider} />
      <div className={classes.relatedHouse}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Related
        </Typography>
        {renderElm || 'No result'}
      </div>
    </Container>
  );
}

RelatedHouse.propTypes = {
  location: PropTypes.string.isRequired,
};

export default RelatedHouse;
