import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Typography, Snackbar, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import CustomButton from '../../Components/Button';
import Table from '../../Components/Table';
import useStyles from './style';

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
        } = await Axios.get('api/v1/favorite');
        if (isCurrent) {
          setIsLoading(false);
          setHouses(data);
        }
      } catch (err) {
        setErrorMsg(err.message);
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
      setErrorMsg(err);
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>My Favorites House</Typography>
      {isLoading && <CircularProgress size={25} color="primary" />}
      {errorMsg ? (
        <Alert className={classes.alert} severity="error">
          {errorMsg}
        </Alert>
      ) : (
        <div>
          <CustomButton
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Compare
          </CustomButton>
          <div className={classes.tableContainer}>
            <Table
              houses={houses}
              handelDeleteHouse={handleDelete}
              tableType="favorite"
            />
          </div>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Deleted successfully
            </Alert>
          </Snackbar>
        </div>
      )}
    </div>
  );
}

export default Favorite;
