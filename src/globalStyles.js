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
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: 500ms ease-in all;
  }
  .fade-leave {
    opacity: 1;
    transition: 500ms ease-in all;
  }
  .fade-leave-active {
    opacity: 0;
  }
  & a:link {
    text-decoration: none;
  }

  & a:visited {
      text-decoration: none;
  }

  & a:hover {
      text-decoration: noe;
  }

  & a:active {
      text-decoration: none;
  }
`;
