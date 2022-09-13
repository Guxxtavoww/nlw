import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import { GamesSliderContainer, ArrowBox } from './styles';

const GamesSlider: React.FC = () => {
  return (
    <GamesSliderContainer>
      <ArrowBox isLeft>
        <IoIosArrowBack />
      </ArrowBox>
      <ArrowBox>
        <IoIosArrowForward />
      </ArrowBox>
    </GamesSliderContainer>
  );
};

export default GamesSlider;
