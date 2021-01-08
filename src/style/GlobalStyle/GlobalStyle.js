import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Roboto';
        color: ${({ theme }) => theme.colors.primary};
    }

    html,
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        overflow-y: hidden;
        padding: 75px 200px;
        background-color: ${({ theme }) => theme.colors.starter};
        max-height: 100vh;
    }

    /* a {
        text-decoration: none;
        color: inherit;
    } */

    button {
        cursor: pointer;
        padding: 0;
    }

    /* h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    } */

/* roboto-regular- latin */
/* @font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), url('../../../../fonts/Roboto-Regular.woff2') format('woff2');
}

/* roboto-italic - latin */
/* @font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  src: local('Roboto'), url('../../../../fonts/Roboto-Italic.woff2') format('woff2');
} */

/* roboto-700 - latin */
/* @font-face {
  font-family: 'Roboto';
  font-style: bold;
  font-weight: 700;
  src: local('Roboto'), url('../../../../fonts/Roboto-Bold.woff2') format('woff2');
}  */

`;

export default GlobalStyle;
