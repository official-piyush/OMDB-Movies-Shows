import axios from 'axios';
import {
  FETCH_SHOW_REQUEST,
  FETCH_SHOW_SUCCESS,
  FETCH_SHOW_FAILURE,
} from './showTypes';

function fetchShowRequest() {
  return {
    type: FETCH_SHOW_REQUEST,
  };
}

function fetchShowSuccess(showData) {
  return {
    type: FETCH_SHOW_SUCCESS,
    payLoad: showData,
  };
}

function fetchShowFailure(error) {
  return {
    type: FETCH_SHOW_FAILURE,
    payLoad: error.message,
  };
}

function fetchShows(show) {
  return function (dispatch) {
    dispatch(fetchShowRequest());
    axios
      .get(
        `https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${show}&type=series`
      )
      .then((response) => {
        const showData = response.data;
        // console.log(showData);
        dispatch(fetchShowSuccess(showData));
      })
      .catch((error) => {
        dispatch(fetchShowFailure(error));
      });
  };
}

export default fetchShows;
