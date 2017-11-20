import {
  SEARCH,
  SEARCH_RESULTS,
  SEARCH_ERROR,
} from '../constants';

export const search = (payload) => ({ type: SEARCH, payload });
export const searchResults = (payload) => ({ type: SEARCH_RESULTS, payload });
export const searchError = (payload) => ({ type: SEARCH_ERROR, payload });
