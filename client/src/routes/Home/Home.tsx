import { Helmet } from "react-helmet";
import Footer from "../../components/Global/Footer/Footer";
import Header from "../../components/Global/Header/Header";
import * as S from "../../styles/HomeStyle";


function Home () {
  return (
    <>
      <Helmet>
        <title>레뮤제</title>
      </Helmet>
      <Header/>
      <S.Container></S.Container>
      <Footer/>
    </>
  )
}

export default Home;