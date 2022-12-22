import Footer from "../../GlobalComponents/Footer/Footer";
import Header from "../../GlobalComponents/Header/Header";
import Curation from "./components/Curation/Curation";
import Recommends from "./components/Recommendation/Recommends";
import * as S from "./SHome";
import * as G from "../../GlobalComponents/Spacing/Spacing";
import Teams from "./components/Teams/Teams";
import Recent from "./components/Recent/Recent";
import IndexByCategory from "./components/IndexByCategory/IndexByCategory";
import Executives from "./components/Executives/Executives";
import RecruitmentBanner from "../../GlobalComponents/Banners/RecruitmentBanner";
import React from "react";

function Home () {
  return (
    <>
      <RecruitmentBanner />
      <Header thickness={true}/>
      <S.Wrapper>
        <Recommends />
        <G.Space150px />
        <Curation />
        <Teams />
        <Recent />
        <IndexByCategory />
        <G.Space150px />
        <G.VerticalBar />
        <Executives />
      </S.Wrapper>
      <Footer/>
    </>
  )
}

export default React.memo(Home);