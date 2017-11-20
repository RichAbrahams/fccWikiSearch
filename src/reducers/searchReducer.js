import {
  SEARCH_RESULTS, SEARCH_ERROR,
} from '../constants';

const initialState = {
  results: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULTS: {
      return {
        ...state,
        error: null,
        results: action.payload,
      };
    }
    case SEARCH_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        results: null,
      };
    }
    default:
      return state;
  }
};
