import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: 200,
    color: theme.palette.primary.main,
  },
  img: {
    width: 150,
  },
}));

export default useStyles;
