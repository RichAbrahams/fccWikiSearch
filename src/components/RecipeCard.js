
import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader } from 'material-ui/Card';
import StyledRecipeCard from '../styledComponents/StyledRecipeCard';
import RecipeIngredients from './RecipeIngredients';
import RecipeButtons from './RecipeButtons';

export default class RecipeCard extends React.Component {
  render() {
    return (
      <StyledRecipeCard>
        <CardHeader
          actAsExpander
          showExpandableButton
          title={this.props.recipe.name}
        />
        <RecipeIngredients
          expandable
          {...this.props}
        />
        <RecipeButtons
          expandable
          {...this.props}
        />
      </StyledRecipeCard>
    );
  }
}

RecipeCard.propTypes = {
  recipe: PropTypes.object,
  expanded: PropTypes.array,
  modifyExpanded: PropTypes.func,
  cardIndex: PropTypes.number,
  expandable: PropTypes.bool,
};
