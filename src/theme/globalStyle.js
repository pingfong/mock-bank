import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Montserrat", sans-serif;
}

body {
  background: #eee;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
}
`;

export default GlobalStyle;
