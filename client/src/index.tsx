import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { Helmet } from "react-helmet";
import { CookiesProvider } from "react-cookie";
import Favicon from "./assets/images/commons/favicon.png";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Helmet>
            <link rel="icon" type="image/png" href={Favicon} />
            <link rel="stylesheet" as="style" crossOrigin="true" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css" />
            <title>레뮤제</title>
            <meta name="keyword" content="lecture, club, student club, Konkuk University, 강연, 동아리, 대학생, 건국대학교"/>
            <meta name="description" content="건국대학교 중앙동아리 레뮤제는 따뜻한 인간관계를 바탕으로 수평적인 지식나눔을 추구합니다"/>
          </Helmet>
          <App />
        </QueryClientProvider>
      </RecoilRoot>    
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);