import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  body {
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }

  #root {
    background-color: #fdfcff;
    min-height: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

`;
