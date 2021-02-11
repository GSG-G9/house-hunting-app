import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '3em auto',
    color: theme.palette.primary.main,
    width: '80%',
    padding: '0',
    border: '1px solid #c7c7c7',
  },
  imgSection: {
    display: 'flex',
    alignItems: 'center',
  },
  imageBox: {
    padding: '0.5em',
    borderRadius: '0.3em',
    overflow: 'hidden',
    '& img': {
      maxWidth: '100%',
    },
  },
  desc: {
    padding: '3em',
    color: '#7D7D7D',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    '& h2': {
      fontSize: '2em',
      paddingTop: '1em',
      paddingBottom: '1em',
      color: theme.palette.primary.main,
    },
  },
  priceDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: '1em',
    width: '70%',
    '& span': {
      display: 'flex',
    },
  },
  descDetails: {
    padding: '1em 0',
    width: '85%',
  },
  descAddress: {
    '& p': {
      paddingTop: '10px',
    },
    '& svg': {
      marginRight: '10px',
      verticalAlign: 'middle',
    },
  },
  descBtn: {
    marginTop: '4em',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0 auto',
    ' & button': {
      height: '45px',
      marginRight: '2em',
    },
    ' & button:last-of-type': {
      marginRight: '0em',
    },
  },
  favriteBtn: {
    color: '#F5F5F5',
  },
}));
export default useStyles;
