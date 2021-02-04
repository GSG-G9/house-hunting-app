import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFFFFF',
    borderBottom: '3px solid #1D3D59',
    height: '80px',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    '& *': {
      boxSizing: 'border-box',
    },
  },
  toolBar: {
    width: '85%',
  },
  logo: {
    flexGrow: 1,
    color: '#1D3D59',
    fontWeight: 'bold',
  },
}));

export default useStyles;
