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
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { isLoadingAtom } from "../../storage/common";
import Loading from "../../GlobalComponents/Loading/Loading";

function Home () {
  const isLoading = useRecoilValue(isLoadingAtom);
  /**클릭하면 스크롤이 위로 올라가는 함수 */
  const handleTop = () => {
    window.scrollTo({
      top: 0,
    })
  };
  
  useEffect(()=> {
    handleTop();
  }, []);

  return (
    <>
      {isLoading ? <Loading/> : (
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
      )}
    </>
  )
}

export default React.memo(Home);