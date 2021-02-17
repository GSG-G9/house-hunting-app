import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '40px',
    backgroundColor: theme.palette.primary.dark,
    '& div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& *': {
      color: theme.palette.primary.contrastText,
    },
    '& p': {
      paddingLeft: '5px',
    },
  },
}));

export default useStyles;
