import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '85%',
    paddingBottom: '3em',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: '5em',
    minHeight: '450px',
    backgroundImage: 'url("./image/hp-hero-desktop.webp")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
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
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    height: '150px',
    borderRadius: '4px',
    backgroundColor: '#15151515',
  },
}));

export default useStyles;
