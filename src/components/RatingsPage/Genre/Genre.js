import React from 'react';
import './Genre.css';

function Genre(props) {
  return (
    <>
      <span className="genre">
        {props.genre !== 'N/A' ? props.genre : 'Genre Unvailable'}
      </span>
    </>
  );
}

export default Genre;
