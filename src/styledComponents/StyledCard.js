import styled from 'styled-components';
import { Card } from 'material-ui/Card';

const stc = styled(Card)`
  margin: 2em;
  flex: 1;
  padding: 1em;
  grid-column: 2/3;
  @media screen and (max-width: 800px) {
    grid-column: 1/2;
  }
`;

export default stc;
