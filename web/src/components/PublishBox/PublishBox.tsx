import React, { useState } from 'react';

import * as C from './styles';
import { searchIcon } from '../../assets';
import FormPopup from '../FormPopup/FormPopup';

const PublishBox: React.FC = () => {
  const [isFormShowing, setIsFormShowing] = useState(false);

  const handleFormShow = () => setIsFormShowing((prevState) => !prevState);

  return (
    <>
      <C.PublishBoxContainer className="light-bg">
        <C.PublishBoxGradientBorder />
        <C.PublishBoxTxtBox>
          <C.PublishBoxTitle>Não encontrou seu duo?</C.PublishBoxTitle>
          <C.PublishBoxDesc className="light-text">
            Publique um anúncio para encontrar novos players!
          </C.PublishBoxDesc>
        </C.PublishBoxTxtBox>
        <C.PublishBoxButton onClick={handleFormShow} className="purple-bg">
          <img src={searchIcon} alt="Icone" />
          Publicar Anúncio
        </C.PublishBoxButton>
      </C.PublishBoxContainer>
      {isFormShowing && <FormPopup closePopup={setIsFormShowing} />}
    </>
  );
};

export default PublishBox;
