import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Roboto', sans-serif;
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
    
    button { 
        cursor: pointer;
        padding: 0;
    }
`;

export default GlobalStyle;
