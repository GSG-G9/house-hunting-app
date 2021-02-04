import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LinkItem({ className, children, linkUrl, ...rest }) {
  return (
    <Link to={linkUrl} className={className} {...rest}>
      {children}
    </Link>
  );
}

LinkItem.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default LinkItem;
