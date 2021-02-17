import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import Typography from '@material-ui/core/Typography';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import Loading from '../../../Components/Loading';

import Table from '../../../Components/Table';
import useStyles from './style';

function Houses() {
  const classes = useStyles();

  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState();

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
        setLoading(true);
        const {
          data: { data },
        } = await Axios.get('api/v1/user/houses');
        if (isCurrent) {
          setLoading(false);
          setHouses(data);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    })();
    return () => {
      isCurrent = false;
    };
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      setRefresh(false);
      await Axios.delete(`/api/v1/houses/${id}`);
      setRefresh(true);
      setOpen(true);
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className={classes.root}>
      <Typography variant="h2">My Houses</Typography>
      {loading && <Loading className={classes.spin} />}
      {error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Table
          houses={houses}
          handelDeleteHouse={handleDelete}
          tableType="houses"
        />
      )}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Deleted successfully
        </Alert>
      </Snackbar>
    </div>
  );
}
export default Houses;
