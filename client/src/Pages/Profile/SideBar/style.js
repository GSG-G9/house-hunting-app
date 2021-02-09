import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '700px',
    backgroundColor: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      display: 'block',
    },
  },
  horTabs: {
    backgroundColor: theme.palette.primary.main,
    '& button': {
      color: '#F5F5F5',
      '& span': {
        color: '#f5f5f5',
        fontSize: '1.2em',
      },
    },
    [theme.breakpoints.down('md')]: {
      flexGrow: 1,
      display: 'flex',
      height: '72px',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('lg')]: {
      display: 'block',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  tabs: {
    backgroundColor: theme.palette.primary.main,
    maxWidth: '235px',
    [theme.breakpoints.down('md')]: {
      flexGrow: 1,
      display: 'none',
    },
    [theme.breakpoints.down('lg')]: {
      flexGrow: 1,
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      flexGrow: 1,
      display: 'flex',
    },
  },
  userAvatar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '3em',
    '& h3': {
      paddingTop: '1.5em',
      paddingBottom: '1.8em',
      fontSize: '1.5em',
      color: '#f5f5f5',
    },
  },
  avatar: {
    width: '3em',
    height: '3em',
    backgroundColor: '#a52525',
  },
  tab: {
    textAlign: 'left',
    display: 'flex',
    textTransform: 'none',
    minHeight: '2em',
    borderBottom: '1px solid #f5f5f5',
    '& span': {
      display: 'inline',
      color: '#f5f5f5',
      fontSize: '1em',
      padding: '0em 1.2em',
      '& svg': {
        marginBottom: '-6px !important',
        width: '1.2em',
        height: '1.2em',
        marginRight: '10px',
      },
    },
  },
}));

export default useStyles;
