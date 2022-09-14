import React, { useState } from 'react';

import * as C from './styles';
import { IFormData } from '../../types';
import { controllerIcon } from '../../assets';

interface IFormPopupProps {
  closePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormPopup: React.FC<IFormPopupProps> = ({ closePopup }) => {
  const [formData, setFormData] = useState<IFormData>({
    gamename: '',
    name: '',
    gameYears: '',
    discordName: '',
    whenYouPlay: [''],
    dailyHrs: '',
    gameTime: '',
    hasMic: 'on',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        hasMic: prevState.hasMic === 'on' ? 'off' : 'on',
      }));
    }

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClose = () => closePopup(false);

  console.log(formData);

  return (
    <C.FormPopupContainer className="app_flex">
      <C.Popup>
        <C.PopupInnerWrapper>
          <h2>Publique um anúncio</h2>
          <C.PopupForm>
            <C.InputContainer>
              <C.InputBx>
                <C.InputLabel htmlFor="gamename">Qual o game?</C.InputLabel>
                <select
                  name="gamename"
                  id="gamename"
                  value={formData.gamename}
                  onChange={handleChange}
                >
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
                  value={formData.name}
                  onChange={handleChange}
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
                  pattern="[0-9]*"
                  placeholder="Tudo bem ser ZERO"
                  value={formData.gameYears}
                  onChange={handleChange}
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
                  value={formData.discordName}
                  onChange={handleChange}
                />
              </C.InputBx>
            </C.InputContainer>
            <C.InputContainer>
              <C.InputBx>
                <C.InputLabel htmlFor="whenYouPlay">
                  Quando costuma jogar?
                </C.InputLabel>
                <input
                  type="text"
                  name="whenYouPlay"
                  id="whenYouPlay"
                  pattern="[0-9]*"
                  placeholder="Tudo bem ser ZERO"
                />
              </C.InputBx>
              <C.InputBx>
                <C.InputLabel>Quantas horas você joga ?</C.InputLabel>
                <input
                  type="text"
                  name="dailyHrs"
                  id="dailyHrs"
                  placeholder="Horas Diárias"
                  value={formData.dailyHrs}
                  onChange={handleChange}
                />
              </C.InputBx>
            </C.InputContainer>
            <C.InputContainer>
              <C.InputBx isCheckbox>
                <input
                  type="checkbox"
                  name="hasMic"
                  id="hasMic"
                  checked={formData.hasMic === 'on' ? true : false}
                  onChange={handleChange}
                />
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
