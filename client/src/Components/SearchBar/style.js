import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  searchInput: {
    '& input': {
      backgroundColor: '#F5F5F5',
      borderRadius: '4px',
    },
  },
  button: {
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
    marginLeft: 10,
    border: `2px solid ${theme.palette.secondary.main}`,
    color: '#FFFFFF',
    transition: 'all 0.25s',
    '&:hover': {
      color: theme.palette.secondary.main,
      transition: 'all 0.25s',
    },
  },
}));
export default useStyles;
