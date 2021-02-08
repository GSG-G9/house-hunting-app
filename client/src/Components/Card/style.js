import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '300px',
    width: '30%',
    marginRight: '1%',
    marginLeft: '1%',
    marginBottom: '1rem',
    border: '1px solid #c7c7c7',
  },
  media: {
    maxHeight: '200px',
    overflow: 'hidden',
    '& img': {
      maxHeight: '200px',
      minWidth: '100%',
    },
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  border: {
    backgroundColor: '#EB9235',
  },
  cardTitle: {
    color: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& h2': {
      fontSize: '18px',
    },
  },
  description: {
    fontSize: '14px',
  },
  cardDetails: {
    paddingTop: '1em',
    color: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    '& h6': {
      fontWeight: 'bold',
    },
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& p': {
      paddingTop: '6px',
    },
  },
  icon: {
    color: '#1D3D59',
    marginLeft: '5px',
  },
  favIcon: {
    color: '#960C0C',
  },
}));
export default useStyles;
