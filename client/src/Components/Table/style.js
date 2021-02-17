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
}));

export default useStyles;
