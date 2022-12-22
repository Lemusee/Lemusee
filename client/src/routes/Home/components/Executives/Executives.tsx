import * as S from "./SExecutives";
import * as T from "../../../../GlobalComponents/Text/Text";
import executivesData from "../../../../assets/dummyData/dummyExecutiveGET.json";

function Executives () {
  const data = {...executivesData}
  const executivesInfo = {
    imgUrl: data.result.imgUrl,
    leaders: {
      curatorLeader: data.result.leaders.curatorLeader,
      contentsLeader: data.result.leaders.contentsLeader,
      cultureLeader: data.result.leaders.cultureLeader,
      adminLeader: data.result.leaders.adminLeader
    }
  }; // 예외 처리 필요
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.contentTitle>
            <T.Pretendard17M>Executives</T.Pretendard17M>
          </S.contentTitle>
          <S.contentBox>
            <S.ExecutivesImg imgUrl={executivesInfo.imgUrl}/>
            <S.TextBox>
              <S.TitleBox>
                <T.Pretendard17M>curator</T.Pretendard17M>
                <T.Pretendard17B>{executivesInfo.leaders.curatorLeader}</T.Pretendard17B>
              </S.TitleBox>
              <S.TitleBox>
                <T.Pretendard17M>contents team leader</T.Pretendard17M>
                <T.Pretendard17B>{executivesInfo.leaders.contentsLeader}</T.Pretendard17B>
              </S.TitleBox>
              <S.TitleBox>
                <T.Pretendard17M>culture team leader</T.Pretendard17M>
                <T.Pretendard17B>{executivesInfo.leaders.cultureLeader}</T.Pretendard17B>
              </S.TitleBox>
              <S.TitleBox>
                <T.Pretendard17M>administration team leader</T.Pretendard17M>
                <T.Pretendard17B>{executivesInfo.leaders.adminLeader}</T.Pretendard17B>
              </S.TitleBox>
            </S.TextBox>
          </S.contentBox>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Executives;