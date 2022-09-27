import './App.css';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme";
import { lightTheme, darkTheme } from "./theme";
import Router from './Router';
import {ReactQueryDevtools} from "react-query/devtools";
import { useRecoilValue } from 'recoil';
import { isDarkThemeAtom } from './atoms';

function App() {
  const isDark = useRecoilValue(isDarkThemeAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle/>
        <Router/>
        <ReactQueryDevtools initialIsOpen={true}/>
      </ThemeProvider>
    </>
  );
}

export default App;
