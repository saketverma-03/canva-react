import { createGlobalStyle } from "styled-components";

const darkTheme = {
  colors: {
    primary: "#0098FE",
    bg: {
      primary: "#111111",
      secondary: "#252525",
      element: "#252525",
      focused: "#545454",
    },
    font: {
      primary: "#fafafa",
      secondary: "#e2e8f0",
      muted: "#94a3b8",
    },
  },
};
const lightTheme = {};

export const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
}
body,h1,h2,h3,h4,h5,h6,p,span {
  margin: 0 0;
  padding: 0 0;
  color: ${({ theme }) => theme.colors.font.primary}
}
`;
