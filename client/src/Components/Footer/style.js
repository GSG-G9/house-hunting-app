import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '60px',
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
