import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    backgroundColor: theme.palette.primary.dark,
    position: 'absolute',
    bottom: 0,
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
