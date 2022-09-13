import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import { GamesSliderContainer, ArrowBox, Slider } from './styles';

const GamesSlider: React.FC = () => {
  return (
    <GamesSliderContainer>
      <ArrowBox>
        <IoIosArrowBack />
      </ArrowBox>
      <Slider></Slider>
      <ArrowBox>
        <IoIosArrowForward />
      </ArrowBox>
    </GamesSliderContainer>
  );
};

export default GamesSlider;
