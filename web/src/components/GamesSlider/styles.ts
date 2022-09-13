import styled from 'styled-components';

export const GamesSliderContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: .5fr 4fr .5fr;
  gap: 5px;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const Slider = styled.div`
    overflow-x: hidden;
`;

export const InnerSlider = styled.div`
    
`;

export const ArrowBox = styled.button`
  color: #A1A1AA;
  font-size: 1.8rem;

  &:hover {
    color: #fdfdfd;
  }
`;
