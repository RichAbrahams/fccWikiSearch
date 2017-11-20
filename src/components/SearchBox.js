/* eslint import/no-mutable-exports :0 */
/* eslint react/no-array-index-key :0 */

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import Search from 'material-ui-icons/Search';
import {
  TextField,
} from 'redux-form-material-ui';
import Form from '../styledComponents/StyledForm';
import SearchControlsWrapper from '../styledComponents/SearchControlsWrapper';
import SearchControls from '../styledComponents/SearchControls';
import ErrorText from '../styledComponents/ErrorText';
import ErrorWrapper from '../styledComponents/ErrorWrapper';

const emptySearch = (value) => value ? undefined : "You haven't entered a search term";

let SearchForm = (props) => {
  const style = {
    margin: '3px 0px 0px 10px',
  };
  const { handleSubmit, connectError } = props;
  return (
    <SearchControlsWrapper>
      <Form onSubmit={handleSubmit}>
        <SearchControls>
          <Field
            name="search"
            component={TextField}
            validate={[emptySearch]}
          />
          <RaisedButton
            type="submit"
            style={style}
            icon={<Search />}
          />
        </SearchControls>
      </Form>
      {connectError && <ErrorWrapper><ErrorText>{connectError}</ErrorText></ErrorWrapper>}
    </SearchControlsWrapper>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
};

SearchForm = reduxForm({ // eslint-disable-line no-class-assign
  form: 'searchForm',
})(SearchForm);


export default SearchForm;
