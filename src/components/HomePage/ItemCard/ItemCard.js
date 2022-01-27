import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import substitute from '../../../images/imdb-substitute.jpg';
import './ItemCard.css';

// images/imdb-substitute.jpg

function ItemCard(props) {
  return (
    <div className="item-card">
      <div className="image-container">
        <img
          src={props.poster !== 'N/A' ? props.poster : substitute}
          alt={props.title}
          className="poster-image-home"
        />
      </div>

      <div className="details-container">
        <div className="release">
          <FontAwesomeIcon icon={faStar} color="gold" />
          <span className="release-year">{props.year}</span>
        </div>

        <div className="movie-title-home">{props.title}</div>

        <Link to={`/ratings/${props.imdbID}`} className="visit-link">
          <span>Checkout</span>
          <FontAwesomeIcon
            icon={faInfoCircle}
            color="white"
            className="icon-info"
          />
        </Link>
      </div>
    </div>
  );
}

export default ItemCard;
