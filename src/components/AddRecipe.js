import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle } from 'material-ui/Card';
import StyledCard from '../styledComponents/StyledCard';
import AddRecipeForm from './AddRecipeForm';

const EditRecipe = (props) => (
  <StyledCard>
    <CardTitle title="Add Recipe" />
    <AddRecipeForm
      {...props}
      onSubmit={(values) => props.sendAddRecipe(values)}
    />
  </StyledCard>
);

EditRecipe.propTypes = {
  sendAddRecipe: PropTypes.func,
};

export default EditRecipe;
