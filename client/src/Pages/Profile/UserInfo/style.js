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
    '& h2': {
      fontSize: '2.2em',
      padding: '2em 1em',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
  },
  avatar: {
    width: '5em',
    height: '5em',
    margin: '0 auto',
    backgroundColor: '#a52525',
  },
  userData: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3em',
    color: '#757575',
  },
  userDataField: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingBlock: '0.5em',
    borderBottom: '1px solid #c7c7c7',
    justifyContent: 'center',
  },
  userDataFieldLabel: {
    width: '12%',
  },
  btnsBox: {
    marginBlock: '3em',
    display: 'flex',
    justifyContent: 'center',
  },
  editBtn: {
    color: '#F5F5F5',
    marginRight: '1em',
  },
  deleteBtn: {
    borderColor: '#D52525',
    color: '#D52525',
    transition: 'all 0.25s',
    '&:hover': {
      borderColor: 'transparent',
      backgroundColor: '#D52525',
      color: '#F5F5F5',
      transition: 'all 0.25s',
    },
  },
}));

export default useStyles;
