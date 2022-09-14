import styled from 'styled-components';

export const PublishBoxContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1425px;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;

  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
`;

export const PublishBoxGradientBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: 8px 8px 0 0;
  background: linear-gradient(90deg, #9572fc 0%, #43e7ad 50.52%, #e2d45c 100%);
`;

export const PublishBoxTxtBox = styled.div``;

export const PublishBoxTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const PublishBoxDesc = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;

export const PublishBoxButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  padding: 12px 1rem;
  border-radius: 6px;
  img ~ * {
    font-size: 1rem;
  }
  &:hover {
    background-color: #9572fc;
    color: #f5f5f5;
  }
`;
