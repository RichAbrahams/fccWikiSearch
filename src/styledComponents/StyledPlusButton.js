import styled from 'styled-components';

const stc = styled.ul`
  & li & button {
    display: none;
  }
`;

export default stc;
// body > div:nth-child(5) > div > div:nth-child(1) > div > div > div > form > div:nth-child(4) > ul > li:nth-child(1) > button.formAddButton
