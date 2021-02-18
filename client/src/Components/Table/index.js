import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Alert from '@material-ui/lab/Alert';

import useStyles from './style';
import Button from '../Button';

function TableComponent({ houses, handelDeleteHouse }) {
  const classes = useStyles();
  return (
    <Table>
      <TableBody>
        {houses.length ? (
          houses.map((house) => (
            <TableRow align="right">
              <TableCell>
                <img className={classes.img} src={house.image} alt="house " />
              </TableCell>
              <TableCell>{house.title}</TableCell>
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
                    handelDeleteHouse(house.id);
                  }}
                  color="primary"
                >
                  <DeleteIcon className={classes.deleteBtn} />
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
};
export default TableComponent;
