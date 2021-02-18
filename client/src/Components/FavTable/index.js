import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './style';
import Button from '../Button';

function TableComponent({ houses, handelDeleteHouse }) {
  const classes = useStyles();
  return (
    <Table>
      <TableHead className={classes.tableHead}>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell align="center">Category</TableCell>
          <TableCell align="center">Area</TableCell>
          <TableCell align="center">Price</TableCell>
          <TableCell align="center">#Room</TableCell>
          <TableCell align="center">#Bathroom</TableCell>
          <TableCell align="center"> Action </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {houses.length !== 0 &&
          houses.map((house, idx) => (
            <TableRow align="right">
              <TableCell>{idx}</TableCell>
              <TableCell>
                {house.category.slice(0, 1).toUpperCase() +
                  house.category.slice(1)}
              </TableCell>
              <TableCell>
                {house.area} m<sup>2</sup>
              </TableCell>
              <TableCell>{house.price} $ </TableCell>
              <TableCell>{house.room_num}</TableCell>
              <TableCell>{house.bathroom_num}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    handelDeleteHouse(house.id);
                  }}
                  color="primary"
                >
                  <DeleteIcon className={classes.deleteBtn} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
TableComponent.propTypes = {
  houses: PropTypes.instanceOf(Array).isRequired,
  handelDeleteHouse: PropTypes.func.isRequired,
};
export default TableComponent;
