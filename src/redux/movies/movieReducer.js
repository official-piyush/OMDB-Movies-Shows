import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from './movieTypes';

const initialMovieState = {
  moviesLoading: false,
  moviesResponse: 'init-m',
  movies: [],
  moviesError: '',
};

function movieReducer(state = initialMovieState, action) {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return {
        moviesLoading: true,
        moviesResponse: 'req-m',
        movies: [],
        moviesError: '',
      };

    case FETCH_MOVIE_SUCCESS:
      return {
        moviesLoading: false,
        moviesResponse: action.payLoad.Response,
        movies: action.payLoad.Search,
        moviesError: '',
      };

    case FETCH_MOVIE_FAILURE:
      return {
        moviesLoading: false,
        moviesResponse: 'fail-m',
        movies: [],
        moviesError: action.payLoad,
      };

    default:
      return state;
  }
}

export default movieReducer;
