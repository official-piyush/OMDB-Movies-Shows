import {
  FETCH_SHOW_REQUEST,
  FETCH_SHOW_SUCCESS,
  FETCH_SHOW_FAILURE,
} from './showTypes';

const initialShowState = {
  showsLoading: false,
  showsResponse: 'init-s',
  shows: [],
  showsError: '',
};

function showReducer(state = initialShowState, action) {
  switch (action.type) {
    case FETCH_SHOW_REQUEST:
      return {
        showsLoading: true,
        showsResponse: 'req-s',
        shows: [],
        showsError: '',
      };

    case FETCH_SHOW_SUCCESS:
      return {
        showsLoading: false,
        showsResponse: action.payLoad.Response,
        shows: action.payLoad.Search,
        showsError: '',
      };

    case FETCH_SHOW_FAILURE:
      return {
        showsLoading: false,
        showsResponse: 'fail-s',
        shows: [],
        showsError: action.payLoad,
      };

    default:
      return state;
  }
}

export default showReducer;
