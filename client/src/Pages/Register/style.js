import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
  },
  img: {
    alignSelf: 'center',
    minWidth: '50%',
  },
  logo: {
    width: 400,
  },
  form: {
    justifySelf: 'flex-end',
    minWidth: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
  },
  input: {
    width: 500,
  },
});
export default useStyles;
