import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary: #FAFAFA;
    --grey-0: #EAE8E8;
    --red-0: #C63A3A;
    --yellow-0: #FFD953;
    --shadow-0: 0px 4px 10px 2px rgba(0, 0, 0, 0.25);
    --shadow-1: 10px 24px 54px rgba(51, 51, 51, 0.03)
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    font-size: 100%;
    font: inherit;
  }
  body {
    background-color: var(--grey-0);
  }
  ol,
  ul {
  }
  body,
  html {
    width: 100%;
    height: 100vh;
  }
  body,
  input,
  textarea,
  select,
  ::placeholder {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    font-weight: 400;
    font-size: 1rem;
    color: var(--text-1);
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
