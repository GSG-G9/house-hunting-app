import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../App/theme';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    border: '1px solid #c7c7c7',
    borderRadius: '5px',
    '& h2': {
      padding: '1em 2em',
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
  numberInputBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 500,
  },
  numberInput: {
    justifyContent: 'start',
    marginBottom: 30,
    width: '48%',
    '& div': {
      width: '100%',
    },
  },
  button: {
    width: 500,
    marginBottom: 60,
    height: 45,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: theme.palette.secondary.dark,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  alert: {
    width: 500,
    height: 50,
  },
  spin: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
  },
});
export default useStyles;
