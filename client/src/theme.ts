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
  logoBlack:"https://lh3.googleusercontent.com/lstkEyFCciQ0XwfdZnITqIKsmBZb4EB6QIhR9sYlkJokVj6MCE2BCKE8l_6GkUxEoiH5tmynfvLa34RE_RrZLNgyV36XvkOG6mFwUF7hVlRxsey9jz8nQ7h1yffje2suPmTSFR-9eb6-8eaLhBNlWKCBW1-zC3IOE9RnDvsKcPavpAOafp4Qdz4QtHMa_whZVFVFhWDMozqHfn4_exPq7LQYfgcWryoDa6w8t3sI2bjmkQdgX0_mJNyPlLATEnkQGPoeqIdX5sBoy2UtFXWb5HieSUk2zA5GSVxdM0qQPHkIYrcM5hvfm8JICVKXyecAUlircIcJAYmWhopODyq3h3cwaiD4M0Q4h6DzqRAeahWKXLw0iyWqdZ0bFVUzithnOIqn1pLa3cS7fknwPMRHB9waN3nyXqNkM0hdj4X712kp8aQoq-uD5mQF4OIREXu46ju5NDpbDPD_SJgadF82OpnfgRoIUVhCo55VynF477ObpDT1Hr2Q2vH8qxbDEmBasH5RjJk4azyiazcRqIAAFv3Yum2doGaM1Ap4Q3qT2fYn3F_Dag2XAT8HJBAl5tCPuwvFa1DO3Hm615Mu8ZkJhx_mwIIyLIfVzf4QDnzPsLWlUWi4z6doiuuESBmzJKVhMpKl7qqqBWZO_zA2vrz8GR2A-oXTbQ82--MtzXvwvfps4-_R69Pgr5a7Ys06tUkC8_q1LBf79XqbtH0gnqO4C_yqeTc5rg5G3D6q_crDgHRL3aVJNjDE0s0bYDQvS8Tgks1dQQj8Lm3HYLBVfjUGUsevJEEpXqXR9d5q1LOjc6um29cBben2sMzVEbD5gPdApyShY0HWNEeeU_mMjVNjxo22hRfTJzDn3_SPEj7oY4gmtfOZqSjwNt2rt7JUiji_ndjkuIczLWgFFE6ZoNce5y-5BuDgrlrnMLhe2B3hNsAILJ0_QLxoZPH6-iF8qBfBvf3fWBSJv9btkvpufuLbDHqId0Fa7nfX9ft6I58=s140-no?authuser=2",
  logoWhite:"https://lh3.googleusercontent.com/Xgsrv6xYVsorvm61ekSUdvT8haI04Q4cfD6YRmkcOcG0iUYiUx9c7-HITksCHGMDJgLH1hj4-ASAxlj-4yBsXrTve34aOdySftlqdiV-RDcg5gf4eCQb6Tc4TGepJtfHUqDT8r8ei58blDhhxcuIN9fTp25aw98BPXfGe5jjHd9ACbDM3r_45Dw0lLodVvisYShrLFZWZTvEWNpMgquj7HA-sebsQMJ_oAwpha3VVKsHjkqnYPlon8IdRUjxBd4kDX48X8aQR6r1NOEyFg_UYLCNXXTxqmMCsOuGu-VG279rOtwV9PqRRTNvzigmJTASI-ST4HsHFBi6TrY7mhYPgcf4xgoWc-sgxn2_2YQM1uB_AycUUHbtftd6D0UJ9eQdcD65qs-gDh8WGB0-PbDzG45kziBRpUZOIZW9GAKYxiIv1AiwMocciZqUL46M4CwfGz4XVAhz3xNhmYIqxv-qaC3KsnYfzmr0-vhGW1GZNUZZ96yqwPAnNHdXyx1K3OvO78wEc8TRINe3uYNLic2TvhtskTN5FhgmGRtq8k1i5NgF5lOSXHL2f6_gMXfKm-8SJXhdi8zc_xuSoCAgn2KwkgfOLIVwnAGghgeRMh20Iqi466TjBF6iGvievIY6v-qPBSoPtlTqaDCDEXUdioGj5vdNy5dMRfWfUbhOPi1q0pK45dDGfpQ6FUI5pYQ9Wgw-2SI7X4r4IR00s3FBHc81Ie7LnDvUQiN8lRT1h9BCreHOmbQ9abi4QOKzM9CyApLI_LfXVVDh_RC_i_2umYITQMrzxZ-mO048qxngd_dprLuV5ALrMcqwbqDPOjwfUGKOq1yYs2uqPzW_nEJEPCcbu29hi6KTvt12jLUeocymvnFFpdPjhguCp_h0b84QzvlLQuut_uVrZwofvQ4xlxH1tfq2PsNyIf3zS8p-o5M9BLM9vNJgfH2Oo_fA6eEtmKW8OvU6g1gWJiQfrSBLZm3Mifujeu--1BUwyguFcDs=s140-no?authuser=2",
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