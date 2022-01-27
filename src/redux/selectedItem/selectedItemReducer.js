import {
  FETCH_SELECTEDITEM_REQUEST,
  FETCH_SELECTEDITEM_SUCCESS,
  FETCH_SELECTEDITEM_FAILURE,
  REMOVE_SELECTED_ITEM,
} from './selectedItemTypes.js';

const initialItemState = {
  itemLoading: false,
  itemResponse: '',
  itemData: {},
  itemError: '',
};

function selectedItemReducer(state = initialItemState, action) {
  switch (action.type) {
    case FETCH_SELECTEDITEM_REQUEST:
      return {
        itemLoading: true,
        itemResponse: '',
        itemData: {},
        itemError: '',
      };

    case FETCH_SELECTEDITEM_SUCCESS:
      return {
        itemLoading: false,
        itemResponse: 'True',
        itemData: action.payLoad,
        itemError: '',
      };

    case FETCH_SELECTEDITEM_FAILURE:
      return {
        itemLoading: false,
        itemResponse: '',
        itemData: {},
        itemError: action.payLoad,
      };

    case REMOVE_SELECTED_ITEM:
      return {
        itemLoading: false,
        itemResponse: '',
        itemData: {},
        itemError: '',
      };

    default:
      return state;
  }
}

export default selectedItemReducer;
