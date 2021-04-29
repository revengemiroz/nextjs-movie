import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
    }
    button {
      outline: none;
      cursor: pointer;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 10px; //1rem = 10px
      box-sizing: border-box;
      --color-primary: ${({ theme }) => theme.colors.main};
      --color-primary-dark: ${({ theme }) => theme.colors.dark};
      --color-primary-light: ${({ theme }) => theme.colors.light};
      --color-primary-lighter: ${({ theme }) => theme.colors.lighter};
      --text-color: ${({ theme }) => theme.colors.text};
      --link-color: ${({ theme }) => theme.colors.link};
      --border-color: rgba(176, 190, 197, 0.5);
      --shadow-color: rgba(0, 0, 0, 0.2);
      --shadow-color-dark: rgba(0, 0, 0, 0.25);

      @media ${({ theme }) => theme.mediaQueries.largest} {
          font-size: 57.5%;
      }
      @media ${({ theme }) => theme.mediaQueries.large} {
          font-size: 55%;
      }
    }

    body {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      line-height: 1.6;
    }
    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;
