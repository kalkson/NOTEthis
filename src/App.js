import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle/GlobalStyle';
import theme from './style/theme/theme';

const App = () => {
  const greeting = 'Hello World!';
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div>{greeting}</div>
      </ThemeProvider>
    </>
  );
};

export default App;
