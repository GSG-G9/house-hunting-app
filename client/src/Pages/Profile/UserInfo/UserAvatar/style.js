import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 400,
    backgroundColor: '#F5F5F5',
    border: '1px solid #c7c7c7',
    borderRadius: '4px',
    padding: theme.spacing(2, 4, 3),
    left: 'calc(50% - 200px)',
    top: 'calc(50% - 200px)',
    '& h6': {
      color: theme.palette.primary.dark,
      fontWeight: 'bold',
    },
  },
  formContainer: {
    marginTop: '1rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avtarForm: {
    width: '40%',
    '& label': {
      display: 'inline-block',
      width: '90px',
      height: '35px',
      color: theme.palette.primary.dark,
      backgroundColor: '#F5F5F5',
      border: `1px solid ${theme.palette.primary.dark}`,
      borderRadius: '3px',
      padding: '0.5em',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.25s',
      '&:hover': {
        color: '#F5F5F5',
        backgroundColor: theme.palette.primary.dark,
        border: '1px solid #F5F5F5',
        transition: 'all 0.25s',
      },
    },
  },
  selectFileBtn: {
    visibility: 'hidden',
  },
  imagePreview: {
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100px',
    backgroundColor: '#c7c7c7',
    borderRadius: '5px',
    '& img': {
      width: '150px',
    },
  },
  uploadBtn: {
    color: '#f5f5f5',
    marginTop: '1em',
  },
}));

export default useStyles;
