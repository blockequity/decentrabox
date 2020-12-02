/** @format */

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background: #16151f;
}

h1 {
  color: #ffffff;
  text-align: center;
  padding-top: 50px;
}
h3{
  color: #ffffff;
  text-align: center;
}
`;

export default GlobalStyle;
