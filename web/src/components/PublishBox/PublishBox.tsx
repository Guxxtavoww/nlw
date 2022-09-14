import React from 'react';

import FormPopup from '../FormPopup/FormPopup';
import { PublishBoxContainer } from './styles';

const PublishBox: React.FC = () => {
  return (
    <>
      <PublishBoxContainer>PublishBox</PublishBoxContainer>
      <FormPopup />
    </>
  );
};

export default PublishBox;
