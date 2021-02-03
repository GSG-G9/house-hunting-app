import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '1.25rem',
    fontWeight: 'bold',
    color: '#2F5C84',
  },
  signupLink: {
    color: '#FFFFFF !important',
    backgroundColor: '#EB9235',
    padding: '1rem',
    textAlign: 'center',
    borderRadius: '3px',
  },
}));

function LinkItem(props) {
  const { text, linkUrl, bgFilled } = props;
  const classes = useStyles();
  return (
    <>
      <Link
        underline="none"
        href={linkUrl}
        className={`${classes.root} ${bgFilled ? classes.signupLink : ''}`}
      >
        {text}
      </Link>
    </>
  );
}

LinkItem.propTypes = {
  text: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  bgFilled: PropTypes.bool.isRequired,
};

export default LinkItem;
