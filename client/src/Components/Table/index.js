import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Alert from '@material-ui/lab/Alert';

import useStyles from './style';
import Button from '../Button';

function TableComponent({ houses, handelDeleteHouse, tableType }) {
  const classes = useStyles();
  return (
    <Table>
      {tableType === 'favorite' && (
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Area</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">#Room</TableCell>
            <TableCell align="center">#Bathroom</TableCell>
            <TableCell align="center"> - </TableCell>
          </TableRow>
        </TableHead>
      )}
      <TableBody>
        {houses.length ? (
          houses.map((house, idx) => (
            <TableRow align="right">
              {tableType === 'houses' ? (
                <TableCell>
                  <img className={classes.img} src={house.image} alt="house " />
                </TableCell>
              ) : (
                <TableCell>{idx}</TableCell>
              )}
              {tableType === 'houses' ? null : (
                <TableCell>
                  {house.category.slice(0, 1).toUpperCase() +
                    house.category.slice(1)}
                </TableCell>
              )}
              <TableCell>
                {house.area} m<sup>2</sup>
              </TableCell>
              <TableCell>{house.price} $ </TableCell>
              {tableType === 'houses' ? (
                <TableCell>{house.created_at.split(' ')[0]}</TableCell>
              ) : (
                <TableCell>{house.room_num}</TableCell>
              )}
              {tableType === 'houses' ? null : (
                <TableCell>{house.bathroom_num}</TableCell>
              )}
              {tableType === 'houses' ? (
                <TableCell>
                  <EditIcon color="primary" />
                </TableCell>
              ) : null}
              <TableCell>
                <Button
                  onClick={() => {
                    handelDeleteHouse(house.id);
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
  );
}
TableComponent.propTypes = {
  houses: PropTypes.instanceOf(Array).isRequired,
  handelDeleteHouse: PropTypes.func.isRequired,
  tableType: PropTypes.string.isRequired,
};
export default TableComponent;
