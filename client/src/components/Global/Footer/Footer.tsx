import * as S from "./FooterStyle";
import * as T from "../Text/Text";
import { Link } from "react-router-dom";

function Footer () {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.FooterLogo>
            <S.LogoRound/>
            <S.LogoTextBox>
              <T.Pretendard17B>LEMUSEE</T.Pretendard17B>
              <T.Pretendard11R>따뜻한 인간관계를 바탕으로 수평적인 인간 관계 속에서 지식 나눔을 추구합니다.</T.Pretendard11R>
            </S.LogoTextBox>
          </S.FooterLogo>
          <S.FooterLeftBox>
            <S.FooterTextBox>
              <S.FooterCategory>
                <T.Pretendard13M><Link to="about">About.Us</Link></T.Pretendard13M>
                <T.Pretendard13M><Link to="community/notice">Notice</Link></T.Pretendard13M>
                <T.Pretendard11R><Link to="/">연혁</Link></T.Pretendard11R>
              </S.FooterCategory>
              <S.FooterCategory>
                <T.Pretendard13M><Link to="archive">Archive</Link></T.Pretendard13M>
                <T.Pretendard11R><Link to="/">자기계발 강연</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/">인문사회 강연</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/">문화예술 강연</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/">기술과학 강연</Link></T.Pretendard11R>
              </S.FooterCategory>
              <S.FooterCategory>
                <T.Pretendard13M><Link to="community">Community</Link></T.Pretendard13M>
                <T.Pretendard11R><Link to="/">자유게시판</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/">큐레이터 게시판</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/">컨텐츠팀 게시판</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/">컬처팀 게시판</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/">어드민팀 게시판</Link></T.Pretendard11R>
              </S.FooterCategory>
              <S.FooterCategory>
                <T.Pretendard13M>Contact Us</T.Pretendard13M>
                <T.Pretendard11R><a href="https://www.youtube.com/channel/UCGagrr6S5Q8dGXkxnT-ScmA/featured">Youtube</a></T.Pretendard11R>
                <T.Pretendard11R><a href="https://www.instagram.com/lemusee08/">Instagram</a></T.Pretendard11R>
                <T.Pretendard11R><a href="">E-mail</a></T.Pretendard11R>
              </S.FooterCategory>
            </S.FooterTextBox>
              <S.Developer>
                <T.Pretendard11R><a href="">Designed by C.W.Yoon. & W.S.Shin & Y.H.Yeo</a></T.Pretendard11R>
              </S.Developer>
          </S.FooterLeftBox>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Footer;