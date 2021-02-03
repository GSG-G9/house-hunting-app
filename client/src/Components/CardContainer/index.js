import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './style.css';

function CardContainer({ houses }) {
  return <div className="rapper" />;
}
CardContainer.propTypes = {
  houses: PropTypes.instanceOf(Array).isRequired,
};

export default CardContainer;
