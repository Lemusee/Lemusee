import * as S from "./FooterStyle";
import * as T from "../Text/Text";
import { Link } from "react-router-dom";

interface IFooter {
  isDark?:boolean;
};

function Footer ({isDark}:IFooter) {
  return (
    <>
      <S.Wrapper isDark={isDark}>
        <S.Container>
          <S.FooterLogo>
            <S.LogoRound isDark={isDark}/>
            <S.LogoTextBox isDark={isDark}>
              <T.Pretendard17B>LEMUSEE</T.Pretendard17B>
              <T.Pretendard11R>따뜻한 인간관계를 바탕으로 수평적인 인간 관계 속에서 지식 나눔을 추구합니다.</T.Pretendard11R>
            </S.LogoTextBox>
          </S.FooterLogo>
          <S.FooterLeftBox>
            <S.FooterTextBox>
              <S.FooterCategory isDark={isDark}>
                <T.Pretendard13M><Link to="/about">About.Us</Link></T.Pretendard13M>
                <T.Pretendard13M><Link to="/notice/list">Notice</Link></T.Pretendard13M>
                {/* <T.Pretendard11R><Link to="/">연혁</Link></T.Pretendard11R> */}
              </S.FooterCategory>
              <S.FooterCategory isDark={isDark}>
                <T.Pretendard13M><Link to="/archive">Archive</Link></T.Pretendard13M>
                <T.Pretendard11R><Link to="/archive">자기계발 강연</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/archive">인문사회 강연</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/archive">문화예술 강연</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/archive">기술과학 강연</Link></T.Pretendard11R>
              </S.FooterCategory>
              <S.FooterCategory isDark={isDark}>
                <T.Pretendard13M><Link to="/freeBoard_free/list">Community</Link></T.Pretendard13M>
                <T.Pretendard11R><Link to="/freeBoard_free/list">자유게시판</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/curator_notice/list">큐레이터 게시판</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/contents_notice/list">컨텐츠팀 게시판</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/culture_notice/list">컬처팀 게시판</Link></T.Pretendard11R>
                <T.Pretendard11R><Link to="/admin_notice/list">어드민팀 게시판</Link></T.Pretendard11R>
              </S.FooterCategory>
              <S.FooterCategory isDark={isDark}>
                <T.Pretendard13M>Contact Us</T.Pretendard13M>
                <T.Pretendard11R><a href="https://www.youtube.com/channel/UCGagrr6S5Q8dGXkxnT-ScmA/featured">Youtube</a></T.Pretendard11R>
                <T.Pretendard11R><a href="https://www.instagram.com/lemusee08/">Instagram</a></T.Pretendard11R>
                <T.Pretendard11R><a href="">E-mail</a></T.Pretendard11R>
              </S.FooterCategory>
            </S.FooterTextBox>
              <S.Developer isDark={isDark}>
                <T.Pretendard11R><a href="">Designed by C.W.Yoon. & W.S.Shin & Y.H.Yeo</a></T.Pretendard11R>
              </S.Developer>
          </S.FooterLeftBox>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Footer;