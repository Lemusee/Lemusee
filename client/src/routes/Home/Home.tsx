import { Helmet } from "react-helmet";
import Footer from "../../components/Global/Footer/Footer";
import Header from "../../components/Global/Header/Header";
import * as S from "./HomeStyle";


function Home () {
  return (
    <>
      <Helmet>
        <title>레뮤제</title>
        <meta name="keyword" content="lecture, club, student club, Konkuk University, 강연, 동아리, 대학생, 건국대학교"/>
        <meta name="description" content="건국대학교 중앙동아리 레뮤제는 따뜻한 인간관계를 바탕으로 수평적인 지식나눔을 추구합니다"/>
      </Helmet>
      <Header/>
      <S.Wrapper>

      </S.Wrapper>
      <Footer/>
    </>
  )
}

export default Home;