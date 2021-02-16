import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '85%',
    paddingBottom: '3em',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },
  housesSection: {
    paddingTop: '2em',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bolder',
    color: theme.palette.primary.main,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    width: 200,
    marginLeft: '3em',
  },
  divider: {
    height: 2,
  },
  spinner: {
    width: '100%',
    minHeight: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContainer: {
    marginTop: '2em',
  },
}));

export default useStyles;
