import { makeStyles } from '@material-ui/core/styles';
import theme from '../../App/theme';

const useStyles = makeStyles({
  root: {
    padding: '0 30px',
  },
  icon: {
    color: theme.palette.primary.light,
  },
});

export default useStyles;
