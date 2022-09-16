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
    grid-template-columns: 1fr 3fr 1fr;
  }
`;

export const Slider = styled.div`
  max-width: 1425px;
  position: relative;
  z-index: 2;
`;

export const InnerSlider = styled.div`
  overflow-x: hidden;
  display: flex;
  gap: 1rem;
`;

export const Loading = styled.span`
  color: #fff;
  font-size: 1.2rem;
  letter-spacing: 3px;
`;

export const ArrowBox = styled.button`
  color: #a1a1aa;
  font-size: 1.8rem;
  z-index: 5;

  &:hover {
    color: #fdfdfd;
  }
`;
