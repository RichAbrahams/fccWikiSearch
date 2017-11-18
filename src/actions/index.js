import {
  SEND_ADD_RECIPE,
  RECEIVE_ADD_RECIPE,
  SEND_EDIT_RECIPE,
  RECEIVE_EDIT_RECIPE,
  SEND_DELETE_RECIPE,
  RECEIVE_DELETE_RECIPE,
  EDIT_RECIPE,
  MODIFY_EXPANDED,
  DELETE_RECIPE,
  ADD_RECIPE,
  LOAD_DATA,
  RECEIVE_INITIAL_DATA,
} from '../constants';


export const editRecipe = (payload) => ({ type: EDIT_RECIPE, payload });
export const deleteRecipe = (payload) => ({ type: DELETE_RECIPE, payload });
export const addRecipe = (payload) => ({ type: ADD_RECIPE, payload });
export const sendAddRecipe = (payload) => ({ type: SEND_ADD_RECIPE, payload });
export const receiveAddRecipe = (payload) => ({ type: RECEIVE_ADD_RECIPE, payload });
export const sendEditRecipe = (payload) => ({ type: SEND_EDIT_RECIPE, payload });
export const receiveEditRecipe = (payload) => ({ type: RECEIVE_EDIT_RECIPE, payload });
export const sendDeleteRecipe = (payload) => ({ type: SEND_DELETE_RECIPE, payload });
export const receiveDeleteRecipe = (payload) => ({ type: RECEIVE_DELETE_RECIPE, payload });
export const modifyExpanded = (payload) => ({ type: MODIFY_EXPANDED, payload });
export const loadData = () => ({ type: LOAD_DATA });
export const receiveInitalData = (payload) => ({ type: RECEIVE_INITIAL_DATA, payload });
