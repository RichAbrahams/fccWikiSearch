import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import search from './searchReducer';
const rootReducer = combineReducers({
  search,
  form: formReducer,
});

export default rootReducer;
