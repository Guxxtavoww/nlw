import React from 'react';

import { GamesSlider } from '../../components';
import { ContentContainer, ContentTitle } from './styles';

const Content: React.FC = () => {
  return (
    <ContentContainer>
      <ContentTitle>
        Seu <span>duo</span> está aqui.
      </ContentTitle>
      <GamesSlider />
    </ContentContainer>
  );
};

export default Content;
