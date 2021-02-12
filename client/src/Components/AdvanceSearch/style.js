import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 1000,
    marginTop: 20,
  },
  inputNum: {
    width: 80,
  },
  slider: {
    width: 200,
  },
  input: {
    width: 160,
  },
}));

export default useStyles;
