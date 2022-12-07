import { useRecoilState } from "recoil";
import { isAdmin } from "../../atoms";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Global/Loading/Loading";
import * as T from "../../components/Global/Text/Text";
import * as S from "./SAdmin";
import { useNavigate } from "react-router-dom";

function Admin () {
  const navigate = useNavigate();
  const [isAdminAccess, setIsAdminAccess] = useRecoilState(isAdmin);
  const [isSelected, setIsSelected] = useState<string | null>("");
  const categoryHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    setIsSelected(e.currentTarget.childNodes[0].textContent);
  };
  const titleHandler = () => {
    let exit = window.confirm("지금 페이지를 나가면 변경 사항이 저장되지 않습니다");
    if (exit) navigate("/", {replace: true});
    setIsAdminAccess(false);
  };
  useEffect(() => {
    if (!isAdminAccess) {
      let exit = window.confirm("접근권한이 없습니다.");
      if (exit) navigate(-1);
    };
  },[]);
  return (
    <>
      {
        (isAdminAccess) ? (
          <S.Wrapper>
            <S.Left>
              <S.LeftTitle onClick={titleHandler}>
                <T.Pretendard24B>LEMUSEE</T.Pretendard24B>
                <T.Pretendard24M>ADMIN</T.Pretendard24M>
              </S.LeftTitle>
              <S.LeftCategories>
                <S.Category $isselected={isSelected == "/Home" ? true : false} onClick={categoryHandler}>
                  <T.Pretendard21M>/Home</T.Pretendard21M>
                </S.Category>
                <S.Category $isselected={isSelected == ".../Home/Executives" ? true : false} onClick={categoryHandler}>
                  <T.Pretendard21M>.../Home/Executives</T.Pretendard21M>
                </S.Category>
                <S.Category $isselected={isSelected == ".../Home/Curations" ? true : false} onClick={categoryHandler}>
                  <T.Pretendard21M>.../Home/Curations</T.Pretendard21M>
                </S.Category>
                <S.Category $isselected={isSelected == "/Members" ? true : false} onClick={categoryHandler}>
                  <T.Pretendard21M>/Members</T.Pretendard21M>
                </S.Category>
                <S.Category $isselected={isSelected == ".../Members/State" ? true : false} onClick={categoryHandler}>
                  <T.Pretendard21M>.../Members/State</T.Pretendard21M>
                </S.Category>
                <S.Category $isselected={isSelected == "/Recruting" ? true : false} onClick={categoryHandler}>
                  <T.Pretendard21M>/Recruting</T.Pretendard21M>
                </S.Category>
              </S.LeftCategories>
            </S.Left>
            <S.Middle></S.Middle>
            <S.Right>
              <S.RightTop>
                <S.RightTitle>
                  <T.Pretendard21R>Changes</T.Pretendard21R>
                </S.RightTitle>
              </S.RightTop>
              <S.RightBottom>
                <T.Pretendard24B>Save Changes</T.Pretendard24B>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 15H27M27 15C23 14 20.5 12 19 8M27 15C23 16 20.5 19 19 22" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </S.RightBottom>
            </S.Right>
          </S.Wrapper>
        ) : (
          <Loading/>
          
        )
      }
    </>
  )
}

export default Admin;