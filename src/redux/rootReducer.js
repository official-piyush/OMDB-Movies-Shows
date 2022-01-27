import { combineReducers } from 'redux';
import movieReducer from './movies/movieReducer';
import showReducer from './shows/showReducer';
import selectedItemReducer from './selectedItem/selectedItemReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  show: showReducer,
  selectedItem: selectedItemReducer,
});

export default rootReducer;
