import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle } from 'material-ui/Card';
import StyledCard from '../styledComponents/StyledCard';
import EditRecipeForm from './EditRecipeForm';


const initValues = (recipe) => {
  const transformedIngredients = recipe.ingredients.map((ingredient) => ({ ingredientName: ingredient }));
  const tr = {
    name: recipe.name,
    ingredients: transformedIngredients,
  };
  return tr;
};

const EditRecipe = (props) => (
  <StyledCard>
    <CardTitle title={`Edit: ${props.recipeToEdit.name}`} />
    <EditRecipeForm
      {...props}
      onSubmit={(values) => props.sendEditRecipe(values)}
      initialValues={initValues(props.recipeToEdit)}
    />
  </StyledCard>
);

EditRecipe.propTypes = {
  sendEditRecipe: PropTypes.func,
  recipeToEdit: PropTypes.object,
};

export default EditRecipe;
