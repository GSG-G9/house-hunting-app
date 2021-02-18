import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginBottom: 0,
    marginTop: 90,
    width: '100%',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
