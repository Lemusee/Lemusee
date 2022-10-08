import * as S from "./SMembers";
import * as T from "../../components/Global/Text/Text";
import { Outlet } from "react-router-dom";

function Members () {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.ContentArea>
            <S.ContentAreaLeft>
              <S.TitleArea>
                <T.Pretendard44B>within</T.Pretendard44B>
                <T.Pretendard44B>lemusee</T.Pretendard44B>
                <T.Pretendard44R>be a speaker.</T.Pretendard44R>
                <T.Pretendard15R>따뜻한 인간관계를 바탕으로 수평적인 인간 관계 속에서 지식 나눔을 추구합니다.</T.Pretendard15R>
              </S.TitleArea>
              <S.SubTitles>
                <S.SubTitleBox>
                  <T.Pretendard15B>now on recruiting.</T.Pretendard15B>
                  <T.Pretendard15R>{"2022년 2학기"}</T.Pretendard15R>
                </S.SubTitleBox>
                <S.SubTitleBox>
                  <T.Pretendard15B>recruitment period.</T.Pretendard15B>
                  <T.Pretendard15R>{"~2022.9.15"}</T.Pretendard15R>
                </S.SubTitleBox>
              </S.SubTitles>
            </S.ContentAreaLeft>
            <S.ContentAreaRight>
              <T.Pretendard17R>{"Welcome."}</T.Pretendard17R>
              <Outlet context={"login"}/>
            </S.ContentAreaRight>
          </S.ContentArea>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Members;