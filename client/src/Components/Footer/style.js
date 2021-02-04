import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    '& div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1D3D59',
      width: '100%',
      marginRight: '24px',
      marginLeft: '24px',
    },
    '& *': {
      color: '#EDF2F8',
    },
    '& p': {
      paddingLeft: '5px',
    },
  },
}));

export default useStyles;
