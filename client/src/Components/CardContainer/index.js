import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Container({ houses }) {
  return (
    <ul className="rapper">
      {houses.map((elm) => (
        <div className="card">{elm}</div>
      ))}
    </ul>
  );
}
Container.PropTypes = {
  houses: PropTypes.array,
};

export default Container;
