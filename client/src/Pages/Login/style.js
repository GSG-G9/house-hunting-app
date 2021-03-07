import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    boxSizing: 'border-box',
    margin: 'auto',
    width: 1000,
    minHeight: '100vh',
  },
  img: {
    alignSelf: 'center',
    minWidth: '50%',
  },
  logo: {
    width: 400,
  },
  formSection: {
    justifySelf: 'flex-end',
    minWidth: '50%',
    marginTop: 80,
  },
  header: {
    marginBottom: 20,
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
  },
  input: {
    width: 500,
    marginBottom: 30,
  },
  button: {
    width: 500,
    marginBottom: 60,
    marginTop: 20,
  },
  alert: {
    width: 500,
    height: 50,
  },
});
export default useStyles;
