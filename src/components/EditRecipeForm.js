/* eslint import/no-mutable-exports :0 */
/* eslint react/no-array-index-key :0 */
import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field, FieldArray } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { CardActions } from 'material-ui/Card';
import {
  TextField,
} from 'redux-form-material-ui';
import IconButton from 'material-ui/IconButton';
import AddBox from 'material-ui-icons/AddBox';
import RemoveCircle from 'material-ui-icons/RemoveCircle';
import Subheader from 'material-ui/Subheader';
import ErrorText from '../styledComponents/ErrorText';
import Form from '../styledComponents/StyledForm';

const emptyIngredient = (value) => value ? undefined : 'Ingredient cannot be empty';

const emptyName = (value) => value ? undefined : 'Recipe name cannot be empty';

const emptyIngredientsArray = (value) => value && value.length > 0 ? undefined : 'At least one ingredient is required';

const renderIngredients = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <ul>
      {fields.map((ingredient, index) => (
        <li key={index}>
          <Field
            name={`${ingredient}.ingredientName`}
            component={TextField}
            validate={[emptyIngredient]}
          />
          <IconButton tooltip="Remove ingredient" onClick={() => fields.remove(index)}>
            <RemoveCircle />
          </IconButton>
        </li>
      ))}
      <div style={{ width: '248px', display: 'flex', justifyContent: 'center' }}>
        <IconButton className="formAddButton" tooltip="Add ingredient" onClick={() => fields.push({})}>
          <AddBox />
        </IconButton>
      </div>
    </ul>
    {submitFailed && error && <ErrorText>{error}</ErrorText>}
  </div>
);

let EditRecipeForm = (props) => {
  const style = {
    paddingLeft: 0,
    paddingTop: '2em',
  };
  const { handleSubmit, editRecipe } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Subheader style={style}>Recipe name</Subheader>
      <Field
        name="name"
        component={TextField}
        label="Recipe name"
        validate={[emptyName]}
      />
      <Subheader style={style}>Ingredients</Subheader>
      <FieldArray
        name="ingredients"
        component={renderIngredients}
        validate={[emptyIngredientsArray]}
      />
      <CardActions>
        <RaisedButton label="Save" primary type="submit" />
        <RaisedButton label="Cancel" secondary onClick={() => editRecipe(null)} />
      </CardActions>
    </Form>
  );
};

renderIngredients.propTypes = {
  fields: PropTypes.object,
  meta: PropTypes.object,
};


EditRecipeForm.propTypes = {
  handleSubmit: PropTypes.func,
  editRecipe: PropTypes.func,
};

EditRecipeForm = reduxForm({ // eslint-disable-line no-class-assign
  form: 'editRecipe',
})(EditRecipeForm);


export default EditRecipeForm;
