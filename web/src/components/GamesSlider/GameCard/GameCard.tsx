import React from 'react';

import * as C from './styles';

interface IGameCardProps {
  title: string;
  image?: string;
}

const GameCard: React.FC<IGameCardProps> = ({ image, title }) => {
  return (
    <C.GameCardContainer
      href={`https://twitch.tv/${title}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <C.GameCardImg src={image} />
      <C.GameCardInnerWrapper>
        <C.GameContent>
          <C.GameTitle>{title}</C.GameTitle>
          <C.GameAds className="light-text">Não funfa</C.GameAds>
        </C.GameContent>
      </C.GameCardInnerWrapper>
    </C.GameCardContainer>
  );
};

export default GameCard;
