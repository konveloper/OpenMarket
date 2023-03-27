import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`

${reset};

* {
      box-sizing: border-box;
    }
    :root {
      font-size: 62.5%;
      --main-green: #91ba2d;
      --point-green: #0a6d32;
      --light-green: #dfecab;
      --splash-bg-color: #f4fdcf;
      --main-grey-76: #767676;
      --sub-grey-C4: #c4c4c4;
      --light-grey-F2: #f2f2f2;
      --black: #000;
      --white: #fff;
      --bg-color: #E5E5E5;
    }
    body {
      font-family: 'Spoqa Han Sans Neo', sans-serif;
      font-weight: 400;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
    a:visited {
      text-decoration: none;
      color: inherit;
    }
    img {
      width: 100%;
    }
    button {
      border: none;
      padding: 0;
      background-color: inherit;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }
    input {
      font: inherit;
    }
    textarea {
      border: none;
      overflow: auto;
      outline: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      resize: none;
      font: inherit;
    }
`;
