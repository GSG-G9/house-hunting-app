import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import useStyles from './style';

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
