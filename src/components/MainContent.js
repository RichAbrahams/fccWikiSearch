import React from 'react';
import PropTypes from 'prop-types';
import MainWrapper from '../styledComponents/MainWrapper';
import RecipeList from './RecipeList';
import EditRecipe from './EditRecipe';
import DeleteRecipe from './DeleteRecipe';
import AddRecipe from './AddRecipe';

const MainContent = (props) => (
  <MainWrapper>
    {props.edit !== null && <EditRecipe {...props} />}
    {props.delete !== null && <DeleteRecipe {...props} />}
    {props.add !== null && <AddRecipe {...props} />}
    {(props.edit === null && props.add === null && props.delete === null) && <RecipeList {...props} /> }
  </MainWrapper>
);

MainContent.propTypes = {
  recipes: PropTypes.array,
  edit: PropTypes.number,
  delete: PropTypes.number,
  add: PropTypes.bool,
};

export default MainContent;
