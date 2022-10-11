import { Helmet } from "react-helmet";
import Footer from "../../components/Global/Footer/Footer";
import Header from "../../components/Global/Header/Header";
import Curation from "../../components/HomeComponents/Curation/Curation";
import Recommends from "../../components/HomeComponents/Recommendation/Recommends";
import * as S from "./SHome";
import * as G from "../../components/Global/Spacing/Spacing";
import Teams from "../../components/HomeComponents/Teams/Teams";
import Recent from "../../components/HomeComponents/Recent/Recent";
import IndexByCategory from "../../components/HomeComponents/IndexByCategory/IndexByCategory";
import Executives from "../../components/HomeComponents/Executives/Executives";
import RecruitmentBanner from "../../components/Global/Banners/RecruitmentBanner";


function Home () {
  return (
    <>
      <Helmet>
        <title>레뮤제</title>
        <meta name="keyword" content="lecture, club, student club, Konkuk University, 강연, 동아리, 대학생, 건국대학교"/>
        <meta name="description" content="건국대학교 중앙동아리 레뮤제는 따뜻한 인간관계를 바탕으로 수평적인 지식나눔을 추구합니다"/>
      </Helmet>
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

export default Home;