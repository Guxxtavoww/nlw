import React from 'react';

import { Content } from './containers';
import { bgGalaxy, nlwLogo } from './assets';
import GlobalStyle, { AppContainer, AppHeader } from './styles/global';

const App: React.FC = () => {
  return (
    <div className="app">
      <img src={bgGalaxy} alt="Bg Image" className="bg-image" />
      <AppContainer className="app_flex">
        <AppHeader>
          <img src={nlwLogo} alt="Logo" />
        </AppHeader>
        <Content />
      </AppContainer>
      <GlobalStyle />
    </div>
  );
};

export default App;
