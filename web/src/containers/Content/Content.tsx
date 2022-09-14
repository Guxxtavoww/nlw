import React from 'react';

import { ContentContainer, ContentTitle } from './styles';
import { GamesSlider, PublishBox } from '../../components';

const Content: React.FC = () => {
  return (
    <ContentContainer>
      <ContentTitle>
        Seu <span>duo</span> está aqui.
      </ContentTitle>
      <GamesSlider />
      <PublishBox />
    </ContentContainer>
  );
};

export default Content;
