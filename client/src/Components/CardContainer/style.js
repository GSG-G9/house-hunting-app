import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: '0 30px',
  },
  housesContainer: {
    display: 'flex',
    padding: '3em',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
