import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBlock: '5em',
    paddingInline: '2em',
    width: '85%',
    minHeight: '600px',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      maxWidth: '100%',
    },
  },
  aboutUsArticle: {
    paddingInline: '5em',
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
  differentArticle: {
    paddingInline: '5em',
    '& h3': {
      fontSize: '2em',
      paddingBlock: '2em',
      color: theme.palette.secondary.main,
    },
    '& p': {
      fontSize: '1.2em',
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
