import Header from 'components/Organisms/Header/Header';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle/GlobalStyle';
import theme from './style/theme/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
  </ThemeProvider>
);
export default App;
