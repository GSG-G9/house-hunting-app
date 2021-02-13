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
  alertBox: {
    marginBlock: '3em',
    width: '400px',
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
    margin: '4em auto',
    marginBottom: '0',
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%',
    flexWrap: 'wrap',
    '& button': {
      fontWeight: 'bold',
    },
  },
  backLink: {
    backgroundColor: '#F5F5F5',
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    textDecoration: 'none',
    textAlign: 'center',
    width: '120px',
    lineHeight: '27px',
    padding: '0.5em',
    borderRadius: '3px',
    fontWeight: 'bold',
    transition: 'all 0.25s',
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    '&:hover': {
      color: '#F5F5F5',
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.primary.main,
      transition: 'all 0.25s',
    },
  },
}));
export default useStyles;
