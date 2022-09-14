import styled from 'styled-components';

export const GamesSliderContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 0.5fr 4fr 0.5fr;
  gap: 5px;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const Slider = styled.div`
  max-width: 100%;
  position: relative;
`;

export const InnerSlider = styled.div`
  overflow-x: hidden;
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const ArrowBox = styled.button`
  color: #a1a1aa;
  font-size: 1.8rem;

  &:hover {
    color: #fdfdfd;
  }
`;
