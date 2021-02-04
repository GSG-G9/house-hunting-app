import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '1.25rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    padding: '1rem',
    textAlign: 'center',
    borderRadius: '3px',
  },
  signupLink: {
    color: `${theme.palette.primary.contrastText} !important`,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default useStyles;
