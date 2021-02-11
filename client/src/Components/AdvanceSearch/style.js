import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 800,
    border: '2px solid #2F5C84',
    padding: 5,
  },
  inputNum: {
    width: 50,
  },
  slider: {
    width: 200,
  },
}));

export default useStyles;
