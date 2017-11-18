import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import recipes from './recipesReducer';
const rootReducer = combineReducers({
  recipes,
  form: formReducer,
});

export default rootReducer;
