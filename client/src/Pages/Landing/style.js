import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '85%',
    paddingBottom: '3em',
  },
  housesSection: {
    paddingTop: '2em',
  },
  sectionTitle: {
    fontSize: '22px',
    fontWeight: 'bolder',
    color: theme.palette.primary.main,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    width: '200px',
    marginLeft: '3em',
  },
  divider: {
    height: '2px',
  },
  spinner: {
    width: '100%',
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContainer: {
    marginTop: '2em',
  },
}));

export default useStyles;
