import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Container, Typography, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import FavTable from '../../Components/FavTable';
import useStyles from './style';
import Loading from '../../Components/Loading';

function Favorite() {
  const classes = useStyles();

  const [houses, setHouses] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    let isCurrent = true;
    (async () => {
      try {
        setIsLoading(true);
        const {
          data: { data },
        } = await Axios.get(`api/v1/favorite`);
        if (isCurrent) {
          setIsLoading(false);
          setHouses(data);
        }
      } catch (err) {
        setErrorMsg(err.response.data.messagee);
        setIsLoading(false);
      }
    })();
    return () => {
      isCurrent = false;
    };
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      setRefresh(false);
      await Axios.delete(`/api/v1/favorite/${id}`);
      setRefresh(true);
      setOpen(true);
    } catch (err) {
      setErrorMsg(err.response.data.message);
    }
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography className={classes.title}>My Favorites House</Typography>
      {isLoading && <Loading color="secondary" />}
      {errorMsg ? (
        <Alert className={classes.alert} severity="error">
          {errorMsg}
        </Alert>
      ) : (
        <>
          <div className={classes.tableContainer}>
            <FavTable houses={houses} handelDeleteHouse={handleDelete} />
          </div>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Deleted successfully
            </Alert>
          </Snackbar>
        </>
      )}
    </Container>
  );
}

export default Favorite;
