import React from 'react';
import './Poster.css';
import substitute from '../../../images/imdb-substitute.jpg';

// images/imdb-substitute.jpg

function Poster(props) {
  return (
    <div className="poster">
      <img
        src={props.poster !== 'N/A' ? props.poster : substitute}
        alt="OMDB-POSTER"
        className="poster-image-ratings"
      />
    </div>
  );
}

export default Poster;
