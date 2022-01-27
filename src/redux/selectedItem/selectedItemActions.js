import axios from 'axios';
import {
  FETCH_SELECTEDITEM_REQUEST,
  FETCH_SELECTEDITEM_SUCCESS,
  FETCH_SELECTEDITEM_FAILURE,
  REMOVE_SELECTED_ITEM,
} from './selectedItemTypes.js';

function fetchSelectedItemRequest() {
  return {
    type: FETCH_SELECTEDITEM_REQUEST,
  };
}

function fetchSelectedItemSuccess(itemData) {
  return {
    type: FETCH_SELECTEDITEM_SUCCESS,
    payLoad: itemData,
  };
}

function fetchSelectedItemFailure(error) {
  return {
    type: FETCH_SELECTEDITEM_FAILURE,
    payLoad: error.message,
  };
}

function fetchSelectedItem(imdbID) {
  return function (dispatch) {
    dispatch(fetchSelectedItemRequest());
    axios
      .get(
        `https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbID}&plot=full`
      )
      .then((response) => {
        // console.log(response.data);
        const itemData = response.data;
        dispatch(fetchSelectedItemSuccess(itemData));
      })
      .catch((error) => dispatch(fetchSelectedItemFailure(error)));
  };
}

export function removeSelectedItem() {
  return {
    type: REMOVE_SELECTED_ITEM,
  };
}

export default fetchSelectedItem;
