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
}));

export default useStyles;
