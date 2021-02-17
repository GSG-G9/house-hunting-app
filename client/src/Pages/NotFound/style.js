import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    margin: 'auto',
  },
  img: {
    alignSelf: 'center',
    minWidth: '50%',
    height: 350,
  },
  button: {
    width: 500,
    marginBottom: 20,
    marginTop: 40,
  },
  text: {
    marginBottom: 40,
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  num: {
    fontSize: '5rem',
  },
});
export default useStyles;
