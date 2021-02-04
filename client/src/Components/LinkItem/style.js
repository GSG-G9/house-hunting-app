import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
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
