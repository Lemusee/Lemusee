import * as S from "./HeaderStyle";
import * as T from "../Text/Text";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { isAdmin, isLoggedInAtom, myUserIdAtom } from "../../../atoms";
import PersonalInfo from "../../../assets/dummyData/dummyPersonalInfo.json";
import { useEffect, useState } from "react";

interface IHeader {
  thickness?:boolean;
};


function Header ({thickness}:IHeader) {
  const [isLogedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);
  const [isAdminAccess, setIsAdminAccess] = useRecoilState(isAdmin);
  const userIdAtom = useRecoilValue(myUserIdAtom);
  const [userId, setUserID] = useState<number>(-1);
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate();
  useEffect(()=>{
    if (isLogedIn) {setUserID(userIdAtom)};
    //fetch personal info by userId
    setUserName(PersonalInfo.result.nickName);
  },[]);
  const loginnoutHandler = () => {
    if (isLogedIn) {
      //put logout/get success response
      let exit = window.confirm("로그아웃하시겠습니까?");
      if (exit) {
        setIsLoggedIn(false);
        setIsAdminAccess(false);
      };
    };
    if (!isLogedIn) {
      navigate("/members/login");
    };
  };
  return (
    <>
      <S.Wrapper thickness={thickness}>
        <S.Container thickness={thickness}>
          <S.MenuTop thickness={thickness}>
            <S.Logo>
              <Link to="/">
                <T.Pretendard24B>LEMUSEE</T.Pretendard24B>
              </Link>
            </S.Logo>
            <S.NavTitles thickness={thickness}>
              <S.NavTitle>
                <Link to="/about">
                  <T.Pretendard17M>ABOUT US</T.Pretendard17M>
                </Link>
              </S.NavTitle>
              <S.NavTitle>
                <Link to="/archive">
                  <T.Pretendard17M>ARCHIVE</T.Pretendard17M>
                </Link>
              </S.NavTitle>
              <S.NavTitle>
                <Link to="/notice/list">
                  <T.Pretendard17M>NOTICE</T.Pretendard17M>
                </Link>
              </S.NavTitle>
              <S.NavTitle>
                <Link to="/all/list">
                  <T.Pretendard17M>COMMUNITY</T.Pretendard17M>
                </Link>
              </S.NavTitle>
              {thickness ? <></> : 
              <S.NavTitle onClick={loginnoutHandler}>
                  <T.Pretendard17R>{isLogedIn ? `${userName} 님` : "LogIn/SignUp"}</T.Pretendard17R>
              </S.NavTitle>
              }
            </S.NavTitles>
          </S.MenuTop>
          {thickness ? 
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
                  <T.Pretendard13R><a href="">Workspace</a></T.Pretendard13R>
                </S.NavSubTitle>
                <>
                  {isLogedIn ? (
                    <>
                      <S.Bar/>
                      <S.NavSubTitle>
                        <Link to={"/personal"}>
                          <T.Pretendard13R>My Page</T.Pretendard13R>
                        </Link>
                      </S.NavSubTitle>
                    </>
                  ) : null}
                </>
                <>
                  {isAdminAccess ? (
                    <>
                      <S.Bar/>
                      <S.NavSubTitle>
                        <Link to={isAdminAccess ? "/admin" : "/"}>
                          <T.Pretendard13R>Admin</T.Pretendard13R>
                        </Link>
                      </S.NavSubTitle>
                    </>
                  ) : null}
                </>
              </S.NavSubTitles>
              <S.NavSubTitle onClick={loginnoutHandler}>
                  <T.Pretendard13R>{isLogedIn ? `안녕하세요, ${userName} 님.` : "Log In / Sign Up"}</T.Pretendard13R>
              </S.NavSubTitle>
            </S.MenuBottom>
          : <></>}
        </S.Container>
      </S.Wrapper>
      {thickness ? <></> : <S.EmptyBlock/>}
    </>
  )
}

export default Header;