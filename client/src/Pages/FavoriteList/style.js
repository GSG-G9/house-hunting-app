import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bolder',
    color: theme.palette.primary.main,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    width: '200px',
    marginTop: '3rem',

    marginRight: '30em',
  },
  button: {
    width: 200,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 700,
    color: 'white',
  },
  table: {
    alignSelf: 'center',
  },
}));

export default useStyles;
