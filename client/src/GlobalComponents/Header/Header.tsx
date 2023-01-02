import * as S from "./HeaderStyle";
import * as T from "../Text/Text";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isAdmin } from "../../storage/common";
import { myPersonalDataAtom, myUserIdAtom } from "../../storage/user";
import { isLoggedInAtom } from "../../storage/common";
import PersonalInfo from "../../assets/dummyData/dummyPersonalInfo.json";
import { useEffect, useState } from "react";
import { useAnimation, useScroll } from "framer-motion";
import { userAPI } from "../../api/users";

interface IHeader {
  thickness?:boolean;
  isDark?:boolean;
};

function Header ({thickness, isDark}:IHeader) {
  const {scrollY} = useScroll();
  const headerAnimation = useAnimation();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);
  const [isAdminAccess, setIsAdminAccess] = useRecoilState(isAdmin);
  const userIdAtom = useRecoilValue(myUserIdAtom);
  const [userId, setUserId] = useState<number | null>(null);
  const [userData, setUserData] = useRecoilState(myPersonalDataAtom);
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate();
  
  useEffect(()=>{
    if (isLoggedIn) {setUserId(userIdAtom)};
    //fetch personal info by userId
    setUserName(userData ? userData?.nickName : "");
  },[userData, isLoggedIn]);

  const loginnoutHandler = () => {
    if (isLoggedIn) {
      //put logout/get success response
      let exit = window.confirm("로그아웃하시겠습니까?");
      if (exit) {
        // userAPI.axiosPatchLogout(setUserId, setUserData, setIsLoggedIn);
        setIsLoggedIn(false);
        setUserId(null);
        setUserData(null);
        setIsAdminAccess(false);
      };
    };
    if (!isLoggedIn) {
      navigate("/members/login");
    };
  };

  useEffect(() => {
    scrollY.onChange(()=> {
      if(scrollY.get() > 80){
        headerAnimation.start("scroll");
      } else {
        headerAnimation.start("top");
      }
    });
  }, [scrollY,headerAnimation]);

  const headerVariants = {
    top: {
      backgroundColor:`${isDark ? "rgba(0,0,0,0)" : "rgba(249,249,249,1)"}`,
      boxShadow: `${isDark ? "rgba(0,0,0,0)" : "0px 2px 10px rgba(0, 0, 0, 0)"}`
    },
    scroll: {
      backgroundColor:`${isDark ? "rgba(32,32,32,1)" : "rgba(249,249,249,1)"}`,
      boxShadow: `${isDark ? "rgba(0,0,0,0)" : "0px 2px 10px rgba(0, 0, 0, 0.08)"}`
    }
  };
  

  return (
    <>
      <S.Wrapper 
        thickness={thickness} 
        isDark={isDark}
        variants={headerVariants}
        animate={headerAnimation}
        initial={"top"}
      >
        <S.Container thickness={thickness}>
          <S.MenuTop thickness={thickness}>
            <S.Logo isDark={isDark}>
              <Link to="/">
                <T.Pretendard24B>LEMUSEE</T.Pretendard24B>
              </Link>
            </S.Logo>
            <S.NavTitles thickness={thickness}>
              <S.NavTitle isDark={isDark}>
                <Link to="/about">
                  <T.Pretendard17M>ABOUT US</T.Pretendard17M>
                </Link>
              </S.NavTitle>
              <S.NavTitle isDark={isDark}>
                <Link to="/archive">
                  <T.Pretendard17M>ARCHIVE</T.Pretendard17M>
                </Link>
              </S.NavTitle>
              <S.NavTitle isDark={isDark}>
                <Link to="/notice/list">
                  <T.Pretendard17M>NOTICE</T.Pretendard17M>
                </Link>
              </S.NavTitle>
              <S.NavTitle isDark={isDark}>
                <Link to="/freeBoard_free/list">
                  <T.Pretendard17M>COMMUNITY</T.Pretendard17M>
                </Link>
              </S.NavTitle>
              {thickness ? <></> : 
              <S.NavTitle onClick={loginnoutHandler} isDark={isDark}>
                  <T.Pretendard17R>{isLoggedIn ? `${userName} 님` : "LogIn/SignUp"}</T.Pretendard17R>
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
                  {isLoggedIn ? (
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
                  <T.Pretendard13R>{isLoggedIn ? `안녕하세요, ${userName} 님.` : "Log In / Sign Up"}</T.Pretendard13R>
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