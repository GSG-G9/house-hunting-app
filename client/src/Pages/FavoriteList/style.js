import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    minHeight: '600px',
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
  dataGrid: {
    width: '100%',
  },
  trashIcon: {
    color: '#757575',
    cursor: 'pointer',
    transition: 'all 0.25s',
    '&:hover': {
      color: '#E52515',
      transition: 'all 0.25s',
    },
  },
  tableContainer: {
    border: '1px solid #c7c7c7',
    marginBlock: '4em',
    width: '80%',
    marginInline: '4em',
    '& td': {
      padding: '7px 16px',
    },
    '& tbody tr:hover': {
      backgroundColor: '#E5E5E5',
    },
    '& tbody tr:last-child': {
      border: 'none',
    },
  },
}));

export default useStyles;
