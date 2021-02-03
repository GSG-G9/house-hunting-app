import React from 'react';
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

export default Container;
