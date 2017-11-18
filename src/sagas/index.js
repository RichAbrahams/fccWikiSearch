import { put, takeEvery, fork, select, call } from 'redux-saga/effects';
import { SEND_ADD_RECIPE, SEND_EDIT_RECIPE, SEND_DELETE_RECIPE, LOAD_DATA } from '../constants';
import * as actions from '../actions';
import * as selectors from '../selectors';


const exampleRecipes = [
  {
    name: 'Example - Beans on Toast',
    ingredients: [
      'butter', 'bread', 'baked beans',
    ],
  },
  {
    name: 'Example - Pot Noodle',
    ingredients: [
      'pot noodle', ' boiling water',
    ],
  },
  {
    name: 'Example - Boiled Eggs',
    ingredients: [
      'eggs',
    ],
  },
];

export function* retrieveLocalStorage() {
  let recipes;
  const retreivedRecipes = yield localStorage.getItem('recipes');
  if (!retreivedRecipes) {
    recipes = exampleRecipes;
  } else {
    recipes = JSON.parse(retreivedRecipes);
  }
  yield put(actions.receiveInitalData(recipes));
}

async function setLocalStorage(payload) {
  const data = JSON.stringify(payload);
  await localStorage.setItem('recipes', data);
}

const transformIngredients = (payload) => {
  const transformedIngredients = payload.ingredients
    .map((ingredient) => ingredient.ingredientName);
  return {
    name: payload.name,
    ingredients: transformedIngredients,
  };
};

export function* sendAddRecipe({ payload }) {
  const recipes = yield select(selectors.selectRecipes());
  const nextRecipes = [...recipes, transformIngredients(payload)];
  yield call(setLocalStorage, nextRecipes);
  yield put(actions.receiveAddRecipe(nextRecipes));
}

export function* sendEditRecipe({ payload }) {
  const recipes = yield select(selectors.selectRecipes());
  const index = yield select(selectors.selectEdit());
  const nextRecipes = [...recipes];
  nextRecipes.splice(index, 1, transformIngredients(payload));
  yield call(setLocalStorage, nextRecipes);
  yield put(actions.receiveEditRecipe(nextRecipes));
}

export function* sendDeleteRecipe() {
  const recipes = yield select(selectors.selectRecipes());
  const index = yield select(selectors.selectDelete());
  const expanded = yield select(selectors.selectExpanded);
  const nextRecipes = [...recipes];
  nextRecipes.splice(index, 1);
  const nextExpanded = [...expanded];
  const expandedIndex = nextExpanded.indexOf(index);
  nextExpanded.splice(expandedIndex, 1);
  yield call(setLocalStorage, nextRecipes);
  yield put(actions.receiveDeleteRecipe({ recipes: nextRecipes, expanded: nextExpanded }));
}

export default function* watchIncrementAsync() {
  yield fork(takeEvery, SEND_ADD_RECIPE, sendAddRecipe);
  yield fork(takeEvery, SEND_EDIT_RECIPE, sendEditRecipe);
  yield fork(takeEvery, SEND_DELETE_RECIPE, sendDeleteRecipe);
  yield fork(takeEvery, LOAD_DATA, retrieveLocalStorage);
}
