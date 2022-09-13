import styled from 'styled-components';

export const GamesSliderContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ArrowBox = styled.button<{ isLeft?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.isLeft && '5px'};
  right: ${(props) => !props.isLeft && '5px'};

  color: #f9f9f9;
  & > * {
    font-size: 1.8rem;
  }
`;
