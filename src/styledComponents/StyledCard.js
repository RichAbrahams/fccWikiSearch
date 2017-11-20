import styled from 'styled-components';
import { Card } from 'material-ui/Card';

const stc = styled(Card)`
  margin: 0em 1em 1em 1em;
  width: 600px;
  @media screen and (max-width: 650px) {
   width: auto;
  }
`;

export default stc;
