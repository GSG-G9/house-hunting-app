import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
=======
import CircularProgress from '@material-ui/core/CircularProgress';
>>>>>>> eadae087a695774a22908f462b0b06d416428a4e
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

<<<<<<< HEAD
import Loading from '../../../Components/loading';

=======
import Table from '../../../Components/Table';
>>>>>>> eadae087a695774a22908f462b0b06d416428a4e
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
<<<<<<< HEAD
      {loading && <Loading />}
      <Table>
        <TableBody>
          {houses.length > 0 ? (
            houses.map((house) => (
              <TableRow align="right">
                <TableCell>
                  <img className={classes.img} src={house.image} alt="house " />
                </TableCell>
                <TableCell>
                  {house.area} m <sup>2</sup>
                </TableCell>
                <TableCell>{house.price} $ </TableCell>
                <TableCell>{house.created_at.split(' ')[0]}</TableCell>
                <TableCell>
                  <EditIcon color="primary" />
                </TableCell>
                <TableCell>
                  <DeleteIcon color="primary" />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <Alert severity="info"> No houses added yet </Alert>
          )}
        </TableBody>
      </Table>
      {error && <Alert severity="error"> {error}</Alert>}
=======
      {loading && <CircularProgress size={25} color="primary" />}
      {error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Table houses={houses} handelDeleteHouse={handleDelete} />
      )}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Deleted successfully
        </Alert>
      </Snackbar>
>>>>>>> eadae087a695774a22908f462b0b06d416428a4e
    </div>
  );
}
export default Houses;
