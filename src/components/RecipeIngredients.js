import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const RecipeIngredients = (props) => (
  <List>
    <Subheader>Ingredients</Subheader>
    {props.recipe.ingredients.map((ingredient) => (
      <ListItem
        primaryText={ingredient}
        key={shortid.generate()}
        disabled
      />))
    }
  </List>
);


RecipeIngredients.propTypes = {
  recipe: PropTypes.object,
};

export default RecipeIngredients;
