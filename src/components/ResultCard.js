import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader, CardText } from 'material-ui/Card';
import StyledCard from '../styledComponents/StyledCard';

const ResultCard = (props) => {
  const { result } = props;
  return (
    <div>
      <StyledCard>
        <CardHeader
          title={result.title}
        />
        <CardText>
          {result.description}
        </CardText>
        <CardText>
          <a href={result.link} target="_blank">
            view article
          </a>
        </CardText>
      </StyledCard>
    </div>
  );
};

ResultCard.propTypes = {
  result: PropTypes.object,
};

export default ResultCard;
