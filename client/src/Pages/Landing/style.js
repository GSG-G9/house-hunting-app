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
  serverError: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4em 0',
    '& span': {
      color: '#d52525',
      fontSize: '2em',
      textShadow:
        '0px 5px 5px #f53535, 0px -5px 10px #f53535, 0px 0px 15px #f53535, 0px 0px 50px #f53535',
    },
    '& h3': {
      margin: '0',
      lineHeight: '0.8em',
      fontSize: '5em',
      fontWeight: 'bolder',
      color: theme.palette.primary.dark,
    },
    '& h4': {
      margin: '0',
      lineHeight: '1.3em',
      fontSize: '4em',
      color: theme.palette.primary.light,
    },
    '& p': {
      fontSize: '2em',
      lineHeight: '0.3em',
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
