import React from 'react';
import { CardTitle } from 'material-ui/Card';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RecipeCard from './RecipeCard';
import StyledCard from '../styledComponents/StyledCard';
const RecipeList = (props) => (
  <StyledCard>
    <CardTitle
      title="My Recipes"
      style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2em' }}
    >
      <FloatingActionButton
        mini
        onClick={() => props.addRecipe()}
      >
        <ContentAdd />
      </FloatingActionButton>
    </CardTitle>
    {props.recipes.map((recipe, index) => (
      <RecipeCard
        key={shortid.generate()}
        {...props}
        cardIndex={index}
        recipe={recipe}
      />))
    }
  </StyledCard>
);


RecipeList.propTypes = {
  recipes: PropTypes.array,
  addRecipe: PropTypes.func,
};

export default RecipeList;
