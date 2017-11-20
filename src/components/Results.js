import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import TransitionGroup from 'react-addons-css-transition-group';
import ResultsWrapper from '../styledComponents/ResultsWrapper';
import ResultCard from './ResultCard';

const Results = (props) => {
  const { results } = props;
  return (
    <ResultsWrapper>
      <TransitionGroup
        transitionName="fade"
        transitionEnterTimeout="500"
        transitionLeaveTimeout="500"
      >
        {results && results.map((result) => <ResultCard key={shortid.generate()} result={result} />)}
      </TransitionGroup>
    </ResultsWrapper>
  );
};

Results.propTypes = {
  results: PropTypes.array,
};

export default Results;
