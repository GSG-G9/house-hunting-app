import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import useStyles from './style';

function LinkItem({ children, linkUrl, registerClass }) {
  const classes = useStyles();

  return (
    <Link
      underline="none"
      href={linkUrl}
      className={`${classes.root} ${classes[registerClass]}`}
    >
      {children}
    </Link>
  );
}

LinkItem.propTypes = {
  children: PropTypes.node.isRequired,
  linkUrl: PropTypes.string.isRequired,
  registerClass: PropTypes.string.isRequired,
};

export default LinkItem;
