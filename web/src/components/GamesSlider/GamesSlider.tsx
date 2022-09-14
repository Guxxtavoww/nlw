import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import * as C from './styles';
import { imgGame } from '../../assets';
import GameCard from './GameCard/GameCard';

const GamesSlider: React.FC = () => {
  const handleSlide = (direction: 'right' | 'left') => {
    if (direction === 'right') {
      console.log('direita');
      return;
    }
    console.log('esquerda');
  };

  return (
    <C.GamesSliderContainer>
      <C.ArrowBox onClick={() => handleSlide('left')}>
        <IoIosArrowBack />
      </C.ArrowBox>
      <C.Slider>
        <C.InnerSlider>
          <GameCard
            image={imgGame}
            gameLink="https://www.twitch.tv/search?term=cs%20go"
          />
        </C.InnerSlider>
      </C.Slider>
      <C.ArrowBox onClick={() => handleSlide('right')}>
        <IoIosArrowForward />
      </C.ArrowBox>
    </C.GamesSliderContainer>
  );
};

export default GamesSlider;
