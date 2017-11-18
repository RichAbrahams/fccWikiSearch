import React from 'react';
import PropTypes from 'prop-types';
import StyledButtonWrapper from '../styledComponents/StyledButtonWrapper';
import StyledButton from '../styledComponents/StyledButton';

const RecipeButtons = (props) => (
  <StyledButtonWrapper>
    <StyledButton primary label="Edit" onClick={() => props.editRecipe(props.cardIndex)} />
    <StyledButton primary label="Delete" onClick={() => props.deleteRecipe(props.cardIndex)} />
  </StyledButtonWrapper>
);

RecipeButtons.propTypes = {
  editRecipe: PropTypes.func,
  deleteRecipe: PropTypes.func,
  cardIndex: PropTypes.number,
};

export default RecipeButtons;
