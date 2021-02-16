import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Axios from 'axios';

import useStyles from './style';

export default [
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'category', headerName: 'Type', width: 130 },

  {
    field: 'room_num',
    headerName: 'rooms',
    type: 'number',
    width: 100,
  },
  {
    field: 'bathroom_num',
    headerName: 'Bathrooms',
    type: 'number',
    width: 130,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 100,
  },
  {
    field: 'area',
    headerName: 'Area',
    type: 'number',
    width: 100,
  },
  {
    field: '',
    headerName: '',
    sortable: false,
    disableClickEventBubbling: true,
    width: 100,
    renderCell: (params) => {
      const classes = useStyles();
      const handleDelete = async () => {
        const { row } = params;
        await Axios.delete(`/api/v1/favorite/${row.id}`);
      };

      return (
        <DeleteIcon onClick={handleDelete} className={classes.trashIcon} />
      );
    },
  },
];
