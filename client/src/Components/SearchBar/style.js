import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
    marginLeft: 10,
    border: `2px solid ${theme.palette.secondary.main}`,
    color: theme.palette.primary.light,
  },
}));
export default useStyles;
