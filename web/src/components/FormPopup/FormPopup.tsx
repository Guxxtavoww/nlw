import React from 'react';

import * as C from './styles';
import { controllerIcon } from '../../assets';

interface IFormPopupProps {
  closePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormPopup: React.FC<IFormPopupProps> = ({ closePopup }) => {
  const handleClose = () => closePopup(false);

  return (
    <C.FormPopupContainer className="app_flex">
      <C.Popup>
        <C.PopupInnerWrapper>
          <h2>Publique um anúncio</h2>
          <C.PopupForm>
            <C.InputContainer>
              <C.InputBx>
                <C.InputLabel htmlFor="gamename">Qual o game?</C.InputLabel>
                <select name="gamename" id="gamename" value="">
                  <option value="" disabled>
                    Selecione o game que deseja jogar
                  </option>
                </select>
              </C.InputBx>
            </C.InputContainer>
            <C.InputContainer>
              <C.InputBx>
                <C.InputLabel htmlFor="name">
                  Seu nome (ou nickname)
                </C.InputLabel>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Como te chamam dentro do game?"
                />
              </C.InputBx>
            </C.InputContainer>
            <C.InputContainer>
              <C.InputBx>
                <C.InputLabel htmlFor="gameYears">
                  Joga há quanos anos?
                </C.InputLabel>
                <input
                  type="text"
                  name="gameYears"
                  id="gameYears"
                  placeholder="Tudo bem ser ZERO"
                />
              </C.InputBx>
              <C.InputBx>
                <C.InputLabel htmlFor="discordName">
                  Qual seu discord?
                </C.InputLabel>
                <input
                  type="text"
                  name="discordName"
                  id="discordName"
                  placeholder="Usuario#0000"
                />
              </C.InputBx>
            </C.InputContainer>
            <C.InputContainer>
              <C.InputBx>
                <C.InputLabel htmlFor="gameYears">
                  Quando costuma jogar?
                </C.InputLabel>
                <input
                  type="text"
                  name="gameYears"
                  id="gameYears"
                  placeholder="Tudo bem ser ZERO"
                />
              </C.InputBx>
              <C.InputBx>
                <C.InputLabel>Qual horário do dia</C.InputLabel>
                <C.MultipleFields>
                  <input type="text" placeholder="De" />
                  <input type="text" placeholder="Até" />
                </C.MultipleFields>
              </C.InputBx>
            </C.InputContainer>
            <C.InputContainer>
              <C.InputBx isCheckbox>
                <input type="checkbox" name="hasMic" id="hasMic" checked />
                <C.InputLabel htmlFor="hasMic">
                  Você tem microfone?
                </C.InputLabel>
              </C.InputBx>
            </C.InputContainer>
            <C.InputContainer isSubmit>
              <C.SubmitButton isCancel onClick={handleClose}>
                Cancelar
              </C.SubmitButton>
              <C.SubmitButton isCancel={false} type="submit">
                <img src={controllerIcon} alt="controller-icon" />
                Encontrar duo
              </C.SubmitButton>
            </C.InputContainer>
          </C.PopupForm>
        </C.PopupInnerWrapper>
      </C.Popup>
    </C.FormPopupContainer>
  );
};

export default FormPopup;
