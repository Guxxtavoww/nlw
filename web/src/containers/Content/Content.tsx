import React from 'react';

import { GamesSlider } from '../../components';
import { ContentContainer, ContentTitle, PublishBox } from './styles';

const Content: React.FC = () => {
  return (
    <ContentContainer>
      <ContentTitle>
        Seu <span>duo</span> está aqui.
      </ContentTitle>
      <GamesSlider />
      <PublishBox className="light-bg">
        
      </PublishBox>
    </ContentContainer>
  );
};

export default Content;
