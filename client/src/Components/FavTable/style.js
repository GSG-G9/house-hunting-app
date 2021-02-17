import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  img: {
    width: 150,
  },
  tableHead: {
    backgroundColor: theme.palette.primary.dark,
    '& tr th': {
      color: '#f5f5f5',
      fontWeight: 'bold',
      textAlign: 'left',
    },
  },
  alertMsg: {
    margin: '0.5em',
  },
  deleteBtn: {
    color: '#757575',
    transition: 'all 0.25s',
    '&:hover': {
      color: '#E51515',
      transition: 'all 0.25s',
    },
  },
}));

export default useStyles;
