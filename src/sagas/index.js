import { put, takeEvery, fork, call } from 'redux-saga/effects';
import { SEARCH } from '../constants';
import * as actions from '../actions';

async function fetchResult(search) {
  try {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${search}&origin=*`);
    const results = await response.json();
    return results;
  } catch (e) {
    return { error: 'An error prevented your search being completed' };
  }
}

export function* updateResults({ payload }) {
  const results = yield call(fetchResult, payload.search);
  if (results.error) {
    yield put(actions.searchError(results));
    return;
  }
  const transformedResults = results[1].map((result, index) => ({
    title: result,
    description: results[2][index],
    link: results[3][index],
  }));
  yield put(actions.searchResults(transformedResults));
}

export default function* watchIncrementAsync() {
  yield fork(takeEvery, SEARCH, updateResults);
}
