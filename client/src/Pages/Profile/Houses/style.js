import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100%',
    border: '1px solid #c7c7c7',
    borderRadius: '5px',
    height: 800,
    '& h2': {
      fontSize: '2.2em',
      padding: '2em 1em',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
