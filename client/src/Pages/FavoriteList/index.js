import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';

import CustomButton from '../../Components/Button';
import columns from './columns';
import useStyles from './style';

function Favorite() {
  const classes = useStyles();

  const [houses, setHouses] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchHouses = async (isCurrent) => {
    try {
      setIsLoading(true);
      const {
        data: { data },
      } = await Axios('api/v1/favorite');
      if (isCurrent) {
        setHouses(data);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    let isCurrent = true;
    fetchHouses(isCurrent);
    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>My Favorites House</Typography>

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
          <div style={{ height: 400 }}>
            <DataGrid
              rows={houses}
              columns={columns}
              pageSize={5}
              checkboxSelection
              loading={isLoading}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorite;
