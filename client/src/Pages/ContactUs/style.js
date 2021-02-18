import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBlock: '5em',
    paddingInline: '2em',
    width: '85%',
    height: 750,
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      maxWidth: '100%',
    },
  },
  descBox: {
    '& h2': {
      fontSize: '2.2em',
      fontWeight: 'bold',
      paddingBlock: '2em',
      color: theme.palette.primary.dark,
    },
    '& p': {
      fontSize: '1.5em',
      color: theme.palette.primary.main,
    },
  },
  contactDetails: {
    '& h3': {
      fontSize: '1.8em',
      paddingBlock: '2em',
      color: theme.palette.primary.dark,
    },
  },
  contactIconContainer: {
    display: 'flex',
    flexBasis: 'row',
    flexWrap: 'wrap',
    padding: '0.5em',
  },
  contactIconBox: {
    display: 'flex',
    width: '50%',
    flexWrap: 'wrap',
    marginBottom: '0.8em',
    '& p': {
      paddingLeft: '0.8em',
      fontSize: '1em',
      color: theme.palette.primary.main,
    },
    '& svg': {
      color: '#757575',
    },
  },
}));

export default useStyles;
