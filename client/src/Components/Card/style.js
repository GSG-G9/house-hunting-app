import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '300px',
    width: '30%',
    marginRight: '1%',
    marginLeft: '1%',
    marginBottom: '1rem',
    border: `1px solid ${theme.palette.primary.contrastText}`,
  },
  media: {
    maxHeight: 200,
    height: 200,
    overflow: 'hidden',
    '& img': {
      maxHeight: '200px',
      minWidth: '100%',
      objectFit: 'cover',
    },
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingInline: '1.7em',
  },
  detailsLink: {
    backgroundColor: theme.palette.secondary.main,
    border: '1px solid transparent',
    color: '#f5f5f5',
    textDecoration: 'none',
    width: '60%',
    textAlign: 'center',
    padding: '0.5em',
    borderRadius: '3px',
    transition: 'all 0.25s',
    '&:hover': {
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: '#f5f5f5',
      transition: 'all 0.25s',
    },
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
    justifyContent: 'space-between',
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
  location: {
    fontSize: '12px',
  },
  icon: {
    color: theme.palette.primary.dark,
    marginLeft: '5px',
    verticalAlign: 'middle',
  },
  favIcon: {
    color: '#960C0C',
    cursor: 'pointer',
  },
  houseType: {
    paddingBlock: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& p': {
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
  },
  blueText: {
    fontWeight: 'normal',
    color: theme.palette.primary.light,
    fontSize: '1em',
  },
}));
export default useStyles;
