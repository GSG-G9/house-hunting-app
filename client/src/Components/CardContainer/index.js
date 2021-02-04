import React from 'react';
import PropTypes from 'prop-types';
import CardComponent from '../Card';
//
function CardContainer({ houses }) {
  return (
    <div className="rapper">
      {houses.map((elm) => (
        <CardComponent house={elm} />
      ))}
    </div>
  );
}
CardContainer.propTypes = {
  houses: PropTypes.instanceOf(Array).isRequired,
};

export default CardContainer;
