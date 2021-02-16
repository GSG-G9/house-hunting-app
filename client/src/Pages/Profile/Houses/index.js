import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Alert from '@material-ui/lab/Alert';

import Button from '../../../Components/Button';
import useStyles from './style';

function Houses() {
  const classes = useStyles();

  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState();

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
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className={classes.root}>
      <Typography variant="h2">My Houses</Typography>
      {loading && <CircularProgress size={25} color="primary" />}
      {error && <Alert severity="error">{error}</Alert>}
      <Table>
        <TableBody>
          {houses.length ? (
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
                  <Button
                    onClick={() => {
                      handleDelete(house.id);
                    }}
                    color="primary"
                  >
                    <DeleteIcon color="primary" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <Alert severity="info">no houses added yet </Alert>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
export default Houses;
