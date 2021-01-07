import LinkButton from 'components/Atoms/LinkButton/LinkButton';
import Logo from 'components/Atoms/Logo/Logo';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle/GlobalStyle';
import theme from './style/theme/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  </ThemeProvider>
);
export default App;
