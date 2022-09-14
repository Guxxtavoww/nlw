import React from 'react';

import * as C from './styles';

interface IGameCardProps {
  image?: string;
  gameLink?: string;
}

const GameCard: React.FC<IGameCardProps> = ({ image, gameLink }) => {
  return (
    <C.GameCardContainer
      href={gameLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <C.GameCardImg src={image} />
      <C.GameCardInnerWrapper>
        <C.GameContent>
          <C.GameTitle>Cs</C.GameTitle>
          <C.GameAds className="light-text">4 ads</C.GameAds>
        </C.GameContent>
      </C.GameCardInnerWrapper>
    </C.GameCardContainer>
  );
};

export default GameCard;
