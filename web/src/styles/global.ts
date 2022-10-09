import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
      outline: 0;
      border: none;
      font-family: 'Inter', sans-serif;
      scroll-behavior: smooth;
    }

    html {
      overflow-x: hidden;
    }

    body {
      min-width: 100vw;
      min-height: 100vh;
      background-color: ${(props) => props.theme.colors.main_bg};
      color: #fff;
    }

    img {
      display: block;
      object-fit: cover;
    }

    button {
      cursor: pointer;
      background-color: transparent;
    }

    input {
      background-color: ${(props) => props.theme.colors.dark_bg};
    }

    a {
      color: inherit;
    }

    .app {
      position: relative;
      width: 100%;
      min-height: 100vh;

      .bg-image {
          width: 100%;
      }
    }

    .light-text {
      color: ${(props) => props.theme.colors.light_gray};
    }

    .lighter-text {
      color: ${(props) => props.theme.colors.lighter_gray};
    }

    .purple-bg {
      background-color: ${(props) => props.theme.colors.secondary_purple_clr};
    }

    .light-bg {
      background-color: ${(props) => props.theme.colors.secondary_bg};
    }

    .green-clr {
      accent-color: ${(props) => props.theme.colors.secondary_green_clr};
      color: ${(props) => props.theme.colors.secondary_green_clr};
    }

    .app_flex {
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

export const AppContainer = styled.div`
  flex-direction: column;
  position: absolute;
  inset: 0;
  width: 100%;
  min-height: 100vh;
  gap: 3rem;
  padding: 1.5rem;

  @media screen and (max-width: 600px) {
    padding: 8px;
    gap: 1rem;
  }
`;

export const AppHeader = styled.div`
  width: 100%;
  display: grid;
  place-items: center;

  img {
    max-width: 100%;
  }
`;

export const ThemeButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${(props) => props.theme.colors.buttonTheme};
  border-radius: 10px;
  cursor: pointer;
  z-index: 1000;
`;

export default GlobalStyle;
