import React, { useCallback, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import dark from './styles/theme/dark';
import { Content } from './containers';
import light from './styles/theme/light';
import { bgGalaxy, nlwLogo } from './assets';
import GlobalStyle, { AppContainer, AppHeader, ThemeButton } from './styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const handleTheme = useCallback(() => {
    setTheme(prevState => prevState.title === 'light' ? dark : light);
  }, []);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <ThemeButton onClick={handleTheme}>Tema</ThemeButton>
        <img src={bgGalaxy} alt="Bg Image" className="bg-image" />
        <AppContainer className="app_flex">
          <AppHeader>
            <img src={nlwLogo} alt="Logo" />
          </AppHeader>
          <Content />
        </AppContainer>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

export default App;
