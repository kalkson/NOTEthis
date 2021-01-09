import Header from 'components/Organisms/Header/Header';
import TilesContainer from 'components/Organisms/TilesContainer/TilesContainter';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle/GlobalStyle';
import theme from './style/theme/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <TilesContainer />
  </ThemeProvider>
);
export default App;
