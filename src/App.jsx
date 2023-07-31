import { ThemeProvider, styled } from "styled-components";
import { useTheme } from "./hooks";
import { GlobalStyles, themes } from "./themes";

const Body = styled.div`
  height: 100vh;
  width: 100vw;
`;

function App(props) {
  const [theme] = useTheme(themes, themes.dark);
  return (
    <Body>
      <ThemeProvider theme={theme}>
        {props.children}
        <GlobalStyles />
      </ThemeProvider>
    </Body>
  );
}

export default App;
