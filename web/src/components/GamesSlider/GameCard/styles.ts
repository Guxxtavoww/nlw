import styled from 'styled-components';

export const GameCardContainer = styled.a`
  position: relative;
  min-width: 180px;
  height: 240px;
  border-radius: 8px;
  isolation: isolate;
  overflow: hidden;
  cursor: pointer;
`;

export const GameCardInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  z-index: 1;
`;

export const GameCardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  user-select: none;
`;

export const GameContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
  height: 50%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 500px) {
    padding: 10px;
  }
`;

export const GameTitle = styled.h3`
  font-weight: 600;
  color: #fff;
  font-size: 1rem;
`;

export const GameAds = styled.span`
  font-weight: 500;
  font-size: 14px;
  user-select: none;
`;
