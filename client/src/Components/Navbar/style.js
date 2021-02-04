import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFFFFF',
    borderBottom: `3px solid ${theme.palette.primary.dark}`,
    height: '80px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolBar: {
    width: '85%',
    margin: '0 auto',
  },
  logo: {
    flexGrow: 1,
    color: `${theme.palette.primary.dark}`,
    fontWeight: 'bold',
  },
  linkItem: {
    marginLeft: '1.25rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    padding: '1rem',
    textAlign: 'center',
    borderRadius: '3px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
}));

export default useStyles;
