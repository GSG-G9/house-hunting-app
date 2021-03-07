import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  img: {
    width: 120,
    height: 80,
    objectFit: 'fill',
  },

  deleteBtn: {
    color: '#757575',
    transition: 'all 0.25s',
    '&:hover': {
      color: '#E51515',
      transition: 'all 0.25s',
    },
  },
}));

export default useStyles;
