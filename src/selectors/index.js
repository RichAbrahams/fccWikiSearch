import { createSelector } from 'reselect';


const selectRecipesDomain = (state) => state.recipes;

const selectRecipes = () => createSelector(
  selectRecipesDomain,
  (substate) => substate.recipes
);

const selectEdit = () => createSelector(
  selectRecipesDomain,
  (substate) => substate.edit
);

const selectAdd = () => createSelector(
  selectRecipesDomain,
  (substate) => substate.add
);

const selectDelete = () => createSelector(
  selectRecipesDomain,
  (substate) => substate.delete
);


const selectRecipeToEdit = () => createSelector(
  selectRecipesDomain,
  (substate) => {
    if (substate.edit === null) {
      return null;
    }
    return substate.recipes[substate.edit];
  }
);

const selectRecipeToDelete = () => createSelector(
  selectRecipesDomain,
  (substate) => {
    if (substate.delete === null) {
      return null;
    }
    return substate.recipes[substate.delete];
  }
);

const selectExpanded = () => createSelector(
  selectRecipesDomain,
  (substate) => substate.expanded
);

export {
  selectRecipes,
  selectEdit,
  selectAdd,
  selectDelete,
  selectRecipeToEdit,
  selectRecipeToDelete,
  selectExpanded,
};
