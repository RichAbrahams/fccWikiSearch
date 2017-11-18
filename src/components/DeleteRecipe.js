import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import StyledCard from '../styledComponents/StyledCard';

const DeleteRecipe = (props) => (
  <StyledCard>
    <CardTitle title={`Confirm Delete: ${props.recipeToDelete.name}`} />
    <CardActions>
      <RaisedButton
        label="I'm sure!"
        primary
        onClick={() => props.sendDeleteRecipe()}
      />
      <RaisedButton
        label="Cancel"
        secondary
        onClick={() => props.deleteRecipe(null)}
      />
    </CardActions>
  </StyledCard>
);

DeleteRecipe.propTypes = {
  recipeToDelete: PropTypes.object,
  sendDeleteRecipe: PropTypes.func,
  deleteRecipe: PropTypes.func,
};

export default DeleteRecipe;
