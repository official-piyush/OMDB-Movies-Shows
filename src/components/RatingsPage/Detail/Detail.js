import React from 'react';
import './Detail.css';

function Detail(props) {
  const classes = `detail ${props.className}`;
  return (
    <div className={classes}>
      <span className="category">{props.category}</span>
      <span className="category-value">{props.categoryValue}</span>
    </div>
  );
}

export default Detail;
