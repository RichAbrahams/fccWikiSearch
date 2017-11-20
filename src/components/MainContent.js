import React from 'react';
import PropTypes from 'prop-types';
import MainWrapper from '../styledComponents/MainWrapper';
import SearchBox from './SearchBox';
import Results from './Results';

const MainContent = (props) => (
  <MainWrapper>
    <SearchBox onSubmit={(e) => props.search(e)} connectError={props.error} />
    <Results {...props} />
  </MainWrapper>
);

MainContent.propTypes = {
  search: PropTypes.func,
};

export default MainContent;
