import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --grey: rgb(240, 243, 247);
    --navyBlue: rgb(10, 12, 49);
    --purple: rgb(21, 5, 120);
    --purpleBlue: rgb(27, 31, 120);
    --skyBlue: rgb(0, 159, 253);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }
  // Because 16 * .625 = 10, so now we can work with rems in a base 10 system just like pixels. eg 2.2 rems = 22px.

  body {
    background-color: var(--grey);
    color: var(--navyBlue);
    font-family: Barlow, sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    line-height: 1.25rem;
  }
`;

export default GlobalStyle;
