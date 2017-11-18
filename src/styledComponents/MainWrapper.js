import styled from 'styled-components';

const stc = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  flex-grow: 1;
  min-width: 450px;
  background: #f9f9f9;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 0.5fr 1fr 0.5fr;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 0.25fr 1.5fr 0.25fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;


export default stc;
