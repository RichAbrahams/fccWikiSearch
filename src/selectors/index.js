import { createSelector } from 'reselect';


const selectSearchDomain = (state) => state.search;

const selectResults = () => createSelector(
  selectSearchDomain,
  (substate) => substate.results
);

const selectError = () => createSelector(
  selectSearchDomain,
  (substate) => substate.error
);

export {
  selectResults,
  selectError,
};
