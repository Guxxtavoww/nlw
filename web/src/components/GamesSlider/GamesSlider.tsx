import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import React, { useLayoutEffect, useState, useCallback } from 'react';

import * as C from './styles';
import { IApiGame } from '../../types';
import { baseRequest } from '../../api';
import GameCard from './GameCard/GameCard';

const GamesSlider: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState<IApiGame[]>([]);

  const handleSlide = (direction: 'right' | 'left') => {
    if (direction === 'right') {
      console.log('direita');
      return;
    }
    console.log('esquerda');
  };

  const getApiGames = useCallback(() => {
    setIsLoading(true);
    baseRequest
      .get('/games')
      .then(({ data, request }) => {
        setIsLoading(false);
        if (request.status !== 200) {
          console.log(request);

          return;
        }
        setGames(data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  useLayoutEffect(() => {
    getApiGames();
  }, [getApiGames]);

  return (
    <C.GamesSliderContainer>
      <C.ArrowBox onClick={() => handleSlide('left')}>
        <IoIosArrowBack />
      </C.ArrowBox>
      <C.Slider>
        <C.InnerSlider>
          {isLoading ? (
            <C.Loading>Carregando</C.Loading>
          ) : (
            games.map((game) => (
              <GameCard
                image={game.bannerUrl}
                key={game.id}
                title={game.title}
              />
            ))
          )}
        </C.InnerSlider>
      </C.Slider>
      <C.ArrowBox onClick={() => handleSlide('right')}>
        <IoIosArrowForward />
      </C.ArrowBox>
    </C.GamesSliderContainer>
  );
};

export default GamesSlider;
