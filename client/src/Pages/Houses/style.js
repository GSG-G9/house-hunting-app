import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
    flexFlow: 'wrap',
    marginTop: 20,
  },
  container: {
    marginTop: 60,
  },

  divider: {
    width: 1000,
    height: '2px',
  },
}));

export default useStyles;
