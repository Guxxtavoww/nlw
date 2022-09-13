import styled, { createGlobalStyle } from 'styled-components';

const main_bg = '#121214';
const secondary_bg = '#2A2634';
const dark_bg = '#18181B';
const light_gray = '#A1A1AA';
const lighter_gray = '#D4D4D8';
// const main_purple_clr = '#9572FC';
const secondary_purple_clr = '#8B5CF6';
// const main_green_clr = '#43E7AD';
const secondary_green_clr = '#34D399';
// const main_yellow_clr = '#E1D55D';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }

    html {
        overflow-x: hidden;
    }

    body {
        min-width: 100vw;
        min-height: 100vh;
        background-color: ${main_bg};
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
        background-color: ${dark_bg};
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
        color: ${light_gray};
    }

    .lighter-text {
        color: ${lighter_gray};
    }

    .purple-bg {
        background-color: ${secondary_purple_clr};
    }

    .light-bg {
        background-color: ${secondary_bg};
    }

    .green-clr {
        accent-color: ${secondary_green_clr};
        color: ${secondary_green_clr};
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

export default GlobalStyle;
