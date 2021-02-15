import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from '../../../Components/Button';

function Houses() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState();
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
        setError(err.response.data.message);
        setLoading(false);
      }
    })();
    return () => {
      isCurrent = false;
    };
  }, []);
  return (
    <div>
      <Typography variant="h5">My Houses</Typography>
      <Button> Add new</Button>
      {loading && <CircularProgress size={25} color="primary" />}
      <Table>
        <TableHead>
          <TableRow>
            {houses.map((house) => (
              <TableCell align="right">{house.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
      </Table>
    </div>
  );
}
export default Houses;
