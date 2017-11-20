import styled from 'styled-components';

const Footer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
background-color: #1A237E;
color: white;
padding: 1em;
height: 3em;
& :first-child {
  margin-right: 1em;
}
& a {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default Footer;
