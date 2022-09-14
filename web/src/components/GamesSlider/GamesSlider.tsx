import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import * as C from './styles';
import { imgGame } from '../../assets';
import GameCard from './GameCard/GameCard';

const GamesSlider: React.FC = () => {
  return (
    <C.GamesSliderContainer>
      <C.ArrowBox>
        <IoIosArrowBack />
      </C.ArrowBox>
      <C.Slider>
        <C.InnerSlider>
          <GameCard image={imgGame} gameLink="https://www.twitch.tv/search?term=cs%20go" />
        </C.InnerSlider>
      </C.Slider>
      <C.ArrowBox>
        <IoIosArrowForward />
      </C.ArrowBox>
    </C.GamesSliderContainer>
  );
};

export default GamesSlider;
