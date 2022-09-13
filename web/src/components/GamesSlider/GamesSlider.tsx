import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import * as C from './styles';

const GamesSlider: React.FC = () => {
  return (
    <C.GamesSliderContainer>
      <C.ArrowBox>
        <IoIosArrowBack />
      </C.ArrowBox>
      <C.Slider>
        <C.InnerSlider>
          
        </C.InnerSlider>
      </C.Slider>
      <C.ArrowBox>
        <IoIosArrowForward />
      </C.ArrowBox>
    </C.GamesSliderContainer>
  );
};

export default GamesSlider;
