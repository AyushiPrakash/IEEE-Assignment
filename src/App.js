import styled, { createGlobalStyle } from "styled-components";
import bg from "./assets/FerrariBackground.jpg";
import NavVertical from "./Components/NavVertical";
import NavHorizontal from "./Components/NavHorizontal";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
}

body{
  background: url(${bg}) no-repeat center center;
  background-size:cover;
  min-height:100vh;
}
@font-face {
    font-family:"SF PRO Text";
    src: url("./assets/SF-Pro-Text-Heavy.otf") format("opentype");
}

@font-face {
  font-family:"SF PRO Text" ;
  font-weight:lighter;
  src: url("./assets/SF-Pro-Text-Light.otf") format("opentype");
}

@font-face {
  font-family:"SF PRO Text" ;
  font-weight:bold;
  src: url("./assets/SF-Pro-Text-Semibold.otf") format("opentype");
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavVertical />
      <NavHorizontal />
    </>
  );
}

export default App;
