import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchMovies from '../../../redux/movies/movieActions';
import ItemCard from '../ItemCard/ItemCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../CommonHome.css';
import Slider from 'react-slick';
import { settings } from '../settings';

// /redux/movies/movieActions'
// /ItemCard
// /Common.css

function Movies({ search }) {
  const movieData = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(search));
  }, [search, dispatch]);

  let jsx;

  if (movieData.moviesResponse === 'True') {
    const items = movieData.movies.map((movie) => (
      <ItemCard
        key={movie.imdbID}
        imdbID={movie.imdbID}
        poster={movie.Poster}
        title={movie.Title}
        year={movie.Year}
      />
    ));

    let movieSettings = { ...settings };

    if (items.length < 5) {
      movieSettings.infinite = false;
    }

    jsx = (
      <div className="home-wrapper">
        <h1 className="section-header-home">Featured Movies</h1>
        <h2 className="sub-header">
          <span>Top picks</span>&nbsp;&nbsp;
          <FontAwesomeIcon icon={faChevronRight} className="right-arrow-icon" />
        </h2>
        <p className="brief-text">Movies just for you</p>
        <Slider {...movieSettings}>{items}</Slider>
      </div>
    );
  }

  return <>{jsx}</>;
}

export default Movies;
