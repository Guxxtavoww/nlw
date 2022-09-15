import React, { useCallback, useState } from 'react';

import * as C from './styles';
import { IFormData } from '../../types';
import { controllerIcon } from '../../assets';

interface IFormPopupProps {
  closePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const days = ['DO', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

const FormPopup: React.FC<IFormPopupProps> = ({ closePopup }) => {
  const [hasMic, setHasMic] = useState(true);
  const [whenYouPlay, setWhenYouPlay] = useState<string[]>(['DO', 'SAB']);

  const [formData, setFormData] = useState<IFormData>({
    gamename: '',
    name: '',
    gameYears: '',
    discordName: '',
    dailyHrs: '',
    gameTime: '',
  });

  const handleClose = () => closePopup(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleWhenYouPlay = useCallback((day: string) => {
    if (whenYouPlay.indexOf(day) === -1) {
      setWhenYouPlay([...whenYouPlay, day]);
  
      return;
    }
    setWhenYouPlay(whenYouPlay.filter(item => item !== day));
  }, [whenYouPlay, setWhenYouPlay]);

  const handleSubmit = useCallback((e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = { ...formData, hasMic, whenYouPlay };

    console.log(data);
  }, [whenYouPlay, hasMic]);

  return (
    <C.FormPopupContainer className="app_flex">
      <C.Popup>
        <C.PopupInnerWrapper>
          <h2>Publique um anúncio</h2>
          <C.PopupForm onSubmit={handleSubmit}>
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
                <C.MultipleFields>
                  {days.map((item, index) => (
                    <C.OptionDay 
                      key={index} 
                      className="app_flex" 
                      isSelected={whenYouPlay.find(day => day === item) ? true : false}
                      onClick={() => handleWhenYouPlay(item)}
                    >
                      {item}
                    </C.OptionDay>
                  ))}
                </C.MultipleFields>
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
                  defaultChecked={hasMic}
                  onChange={() => setHasMic((prevState) => !prevState)}
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
