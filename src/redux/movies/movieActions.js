import axios from 'axios';
import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from './movieTypes';

function fetchMovieRequest() {
  return {
    type: FETCH_MOVIE_REQUEST,
  };
}

function fetchMovieSuccess(movieData) {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payLoad: movieData,
  };
}

function fetchMovieFailure(error) {
  return {
    type: FETCH_MOVIE_FAILURE,
    payLoad: error.message,
  };
}

function fetchMovies(movie) {
  return function (dispatch) {
    dispatch(fetchMovieRequest());
    axios
      .get(
        `https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${movie}&type=movie`
      )
      .then((response) => {
        const movieData = response.data;
        // console.log(movieData);
        dispatch(fetchMovieSuccess(movieData));
      })
      .catch((error) => {
        dispatch(fetchMovieFailure(error));
      });
  };
}

export default fetchMovies;
