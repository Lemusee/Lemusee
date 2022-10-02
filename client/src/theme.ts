import { DefaultTheme, DefaultFont } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const lightTheme:DefaultTheme = {
  lemuseeblack_100:"#202020",
  lemuseeblack_90:"#202020",
  lemuseeblack_80:"#363636",
  lemuseeblack_70:"#595959",
  lemuseeblack_60:"#888",
  lemuseeblack_50:"#b7b7b7",
  lemuseeblack_40:"#d4d4d4",
  lemuseeblack_30:"#dbdbdb",
  lemuseeblack_20:"#eee",
  lemuseeblack_10:"#f9f9f9",
  lemuseeblack_00:"#fff",
  error_red:"#f48383",
  pretendard: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  logoBlack:"https://ifh.cc/g/tAzq0Y.png",
  logoWhite:"https://ifh.cc/g/NTk6LP.png",
}

export const darkTheme:DefaultTheme = {
  lemuseeblack_100:"#202020",
  lemuseeblack_90:"#202020",
  lemuseeblack_80:"#363636",
  lemuseeblack_70:"#595959",
  lemuseeblack_60:"#888",
  lemuseeblack_50:"#b7b7b7",
  lemuseeblack_40:"#d4d4d4",
  lemuseeblack_30:"#dbdbdb",
  lemuseeblack_20:"#eee",
  lemuseeblack_10:"#f9f9f9",
  lemuseeblack_00:"#fff",
  error_red:"#f48383",
  pretendard: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  logoBlack:"https://ifh.cc/g/tAzq0Y.png",
  logoWhite:"https://ifh.cc/g/NTk6LP.png",
}

export const fontSize:DefaultFont = {
  pretendard_44:"44px",
  pretendard_24:"24px",
  pretendard_21:"21px",
  pretendard_19:"19px",
  pretendard_17:"17px",
  pretendard_15:"15px",
  pretendard_13:"13px",
  pretendard_11:"11px",
}

export const GlobalStyle = createGlobalStyle`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: ${props=> props.theme.pretendard};
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: ${props => props.theme.lemuseeblack_100};
    border: none;
    padding: 3px 5px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
    background-color: ${props=>props.theme.lemuseeblack_30};
    transition: 0.3s;
    }
    &:active {
      background-color: ${props => props.theme.lemuseeblack_50};
    }
  }
  body {
    font-family: ${props=>props.theme.pretendard};
    background-color: ${props => props.theme.lemuseeblack_10};
    color: ${props => props.theme.lemuseeblack_100};
  }
`;