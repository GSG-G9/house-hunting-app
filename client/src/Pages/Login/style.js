import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    minWidth: '100%',
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
  },
  header: {
    marginBottom: 20,
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
  },
  alert: {
    width: 500,
    height: 50,
  },
});

export default useStyles;
