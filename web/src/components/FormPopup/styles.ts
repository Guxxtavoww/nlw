import styled, { keyframes } from 'styled-components';

const showPopup = keyframes`
  from {
    scale: 0;
  }
  to {
    scale: 1;
  }
`;

export const FormPopupContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  height: 100vh;
  padding: 1rem;
  background-color: #1e1e1e88;
  z-index: 10000;
  @media screen and (max-width: 500px) {
    padding: 10px;
    & > * {
      padding: 1rem;
    }
  }
  `;

export const Popup = styled.div`
  width: 100%;
  animation: ${showPopup} 0.15s forwards;
  max-width: 488px;
  min-height: max-content;
  padding: 2rem 40px;
  background-color: #2a2634;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const PopupInnerWrapper = styled.div`
  color: #fff;
  font-weight: 900;
  font-size: 20px;
  text-align: left;

  h2 {
    margin-bottom: 1rem;
  }
`;

export const PopupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const InputContainer = styled.div<{ isSubmit?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (!props.isSubmit ? 'center' : 'flex-end')};
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (max-width: 440px) {
    flex-direction: column;
  }
`;

export const InputBx = styled.div<{ isCheckbox?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: ${(props) => (props.isCheckbox ? 'row' : 'column')};
  align-items: ${(props) => (!props.isCheckbox ? 'flex-start' : 'center')};
  justify-content: flex-start;
  gap: 8px;

  select,
  input {
    padding: 12px 1rem;
    background-color: #18181b;
    color: #71717a;
    border-radius: 4px;
    width: 100%;
    max-width: ${(props) => props.isCheckbox && 'fit-content'};
    font-weight: 600;
    &[type='checkbox'] {
      accent-color: #18181b;
      padding: 8px;
      color: #34d399;
      width: 1.125rem;
      height: 1.125rem;
      border: none;
      border-radius: 4px;
      border: none;
    }
    ::placeholder,
    option,
    ::-ms-value {
      color: #71717a;
      font-weight: 600;
      background-color: #18181b;
    }
  }

  select {
    cursor: pointer;
    option {
      padding: 8px;
      cursor: pointer;
      &:first-child {
        border-radius: 4px 4px 0 0;
      }
      &:last-child {
        border-radius: 0 0 4px 4px;
      }
    }
  }
`;

export const MultipleFields = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 186px;
  gap: 5px;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  user-select: none;
`;

export const SubmitButton = styled.button<{ isCancel: boolean }>`
  color: #fff;
  background-color: ${(props) => (props.isCancel ? '#71717A' : '#8B5CF6')};
  padding: 12px 20px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  min-height: 48px;

  &:hover {
    background-color: ${(props) =>
      props.isCancel ? '#71717A55' : '#8B5CF655'};
  }
`;

export const OptionDay = styled.div<{ isSelected?: boolean }>`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.isSelected ? '#8B5CF6' : '#18181B')};
  padding: 4px;
  border-radius: 4px;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.15s;
`;
