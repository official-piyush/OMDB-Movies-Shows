import React from 'react';
import './IMDBCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function IMDBCard(props) {
  let votes;
  if (props.imdbVotes === 'N/A') {
    votes = '50';
  } else {
    votes = Math.floor(parseInt(props.imdbVotes.replace(/,/g, ''), 10) / 1000);
  }
  return (
    <>
      <div className="imdb-card">
        <div className="imdb-text">IMDb RATING</div>
        <div className="imdb-card-bottom">
          <div className="star-icon">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div>
            <div>
              <span className="imdb-rating">
                {props.imdbRating !== 'N/A' ? props.imdbRating : '5'}
              </span>
              <span className="imdb-overall"> / 10</span>
            </div>
            <div className="imdb-votes">{votes}K</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IMDBCard;
