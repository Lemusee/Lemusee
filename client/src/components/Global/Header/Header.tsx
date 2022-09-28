import * as S from "./HeaderStyle";
import * as T from "../Text/Text";
import * as G from "../../Global/Spacing/Spacing"
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLogedInAtom } from "../../../atoms"

function Header () {
  const isLogedIn = useRecoilValue(isLogedInAtom);
  return (
    <>
      <G.Wrapper>
        <G.Container>
          <S.MenuTop>
            <S.Logo>
              <Link to="/">
                <T.Pretendard24B>LEMUSEE</T.Pretendard24B>
              </Link>
            </S.Logo>
            <S.NavTitles>
              <S.NavTitle>
                <Link to="about">
                  <T.Pretendard17M>ABOUT US</T.Pretendard17M>
                </Link>
              </S.NavTitle>
              <S.NavTitle>
                <Link to="archive">
                  <T.Pretendard17M>ARCHIVE</T.Pretendard17M>
                </Link>
              </S.NavTitle>
              <S.NavTitle>
                <Link to="community/notice">
                  <T.Pretendard17M>NOTICE</T.Pretendard17M>
                </Link>
              </S.NavTitle>
              <S.NavTitle>
                <Link to="community">
                  <T.Pretendard17M>COMMUNITY</T.Pretendard17M>
                </Link>
              </S.NavTitle>
            </S.NavTitles>
          </S.MenuTop>
          <S.MenuBottom>
            <S.NavSubTitles>
              <S.NavSubTitle>
                <T.Pretendard13R><a href="https://www.instagram.com/lemusee08/">Instagram</a></T.Pretendard13R>
              </S.NavSubTitle>
              <S.Bar/>
              <S.NavSubTitle>
                <T.Pretendard13R><a href="https://www.youtube.com/channel/UCGagrr6S5Q8dGXkxnT-ScmA/featured">Youtube</a></T.Pretendard13R>
              </S.NavSubTitle>
              <S.Bar/>
              <S.NavSubTitle>
                <T.Pretendard13R>{"Wait for next recruiting..."}</T.Pretendard13R>
              </S.NavSubTitle>
            </S.NavSubTitles>
            <S.NavSubTitle>
              <Link to="members/login">
                <T.Pretendard13R>{isLogedIn ? `안녕하세요, ${"여용현"} 님` : "Log In / Sign Up"}</T.Pretendard13R>
              </Link>
            </S.NavSubTitle>
          </S.MenuBottom>
        </G.Container>
      </G.Wrapper>
    </>
  )
}

export default Header;