import React from 'react';

import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';

import CustomButton from '../../Components/Button';

function Favorite() {
  return (
    <div>
      <Typography>Hello From favorite page</Typography>
      <CustomButton>Compare</CustomButton>
    </div>
  );
}

export default Favorite;
