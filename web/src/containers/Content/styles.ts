import styled from 'styled-components';

export const ContentContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const ContentTitle = styled.h2`
  color: #fff;
  font-weight: 900;
  font-size: clamp(1.25rem, 64px, 18vmin);
  letter-spacing: -1.43px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;

  span {
    display: inline-block;
    background: linear-gradient(110deg, #9572fc 30%, #43e7ad 50%, #e2d45c 20%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
