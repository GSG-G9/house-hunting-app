import React from 'react';

import { useHistory } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import { ReactComponent as Image } from '../../Utils/images/notFound.svg';

import { HOME_PAGE } from '../../Utils/routes.constant';

import Button from '../../Components/Button';

import useStyles from './style';

function NotFound() {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(HOME_PAGE);
  };
  return (
    <div className={classes.root}>
      <Typography color="primary" className={classes.num}>
        404
      </Typography>
      <Typography className={classes.text} color="primary">
        OOPS! PAGE NOT FOUND
      </Typography>
      <Image className={classes.img} />
      <Button
        className={classes.button}
        variant="outlined"
        color="secondary"
        onClick={handleClick}
      >
        BACK TO HOME
      </Button>
    </div>
  );
}

export default NotFound;
