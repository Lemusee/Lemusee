import { useRecoilValue, useSetRecoilState } from "recoil";
import { adminExecutiveAtom } from "../../storage/admin";
import { isAdmin } from "../../storage/common";
import React, { useEffect, useRef, useState } from "react";
import Loading from "../../GlobalComponents/Loading/Loading";
import * as T from "../../GlobalComponents/Text/Text";
import * as S from "./SAdmin";
import { useNavigate } from "react-router-dom";
import Titles from "../../assets/StaticData/AdminTitle.json";
import AdminTitle from "./components/Common/AdminTitle/AdminTitle";
import HomeInfo from "./components/HomeInfo/HomeInfo";
import MemberInfo from "./components/MemberInfo/MemberInfo";
import FileUpLoader from "./components/Common/FileUpLoader/FilleUpLoader";
import RecruitingForm from "./components/RecruitungForm/RecruitingForm";
import MemberState from "./components/MemberStates/MemberState/MemberState";
import ChangesTracker from "./components/Trackers/ChangesTracker/ChangesTracker";
import CurationList from "./components/Curations/CurationList/CurationList";
import SubmitBtn from "./components/Trackers/SubmitBtn/SubmitBtn";

function Admin () {
  const navigate = useNavigate();
  const setAdminExecutiveData = useSetRecoilState(adminExecutiveAtom);

  //===============접근 권한 테스트
  const isAdminAccess = useRecoilValue(isAdmin);

  /**접근 권한 테스트 및 초기 데이터 설정 */
  useEffect(() => {
    if (!isAdminAccess) {
      let access = window.confirm("접근권한이 없습니다.");
      if (access) navigate(-1);
    };
  },[]);

  /**제목 클릭 시 admin page 빠져나감, Admin access 권한 제거 */
  const titleHandler = () => {
    let exit = window.confirm("지금 페이지를 나가면 변경 사항이 저장되지 않습니다");
    if (exit) navigate("/");
  };

  //===============카테고리 처리
  const [isSelected, setIsSelected] = useState<string | null>("");
  const ref_0 = useRef<HTMLDivElement>(null);
  const ref_1 = useRef<HTMLDivElement>(null);
  const ref_2 = useRef<HTMLDivElement>(null);
  const ref_3 = useRef<HTMLDivElement>(null);
  const ref_4 = useRef<HTMLDivElement>(null);
  const ref_5 = useRef<HTMLDivElement>(null);
  /**w카테고리를 클릭할 시 해당 위치로 이동시켜주는 함수 */
  const categoryHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    /**현재 클릭된 카테고리 innerText를 isSelected로 지정 */
    setIsSelected(e.currentTarget.childNodes[0].textContent);
    /**카테고리 클릭 시 해당 컨텐츠로 이동 */
    if (e.currentTarget.childNodes[0].textContent === "/Home") {ref_0.current?.scrollIntoView({ behavior: 'smooth' });}
    if (e.currentTarget.childNodes[0].textContent === ".../Home/Executives") {ref_1.current?.scrollIntoView({ behavior: 'smooth' });}
    if (e.currentTarget.childNodes[0].textContent === ".../Home/Curations") {ref_2.current?.scrollIntoView({ behavior: 'smooth' });}
    if (e.currentTarget.childNodes[0].textContent === "/Members") {ref_3.current?.scrollIntoView({ behavior: 'smooth' });}
    if (e.currentTarget.childNodes[0].textContent === ".../Members/State") {ref_4.current?.scrollIntoView({ behavior: 'smooth' });}
    if (e.currentTarget.childNodes[0].textContent === "/Recruting") {ref_5.current?.scrollIntoView({ behavior: 'smooth' });}
  };


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
            <S.Middle>
              <S.TitleWrapper ref={ref_0}>
                <AdminTitle {...Titles[0]}/>
                <HomeInfo/>
              </S.TitleWrapper>
              <S.TitleWrapper ref={ref_1}>
                <AdminTitle {...Titles[1]}/>
                <FileUpLoader setRecoil={setAdminExecutiveData}/>
              </S.TitleWrapper>
              <S.TitleWrapper ref={ref_2}>
                <AdminTitle {...Titles[2]}/>
                <CurationList/>
              </S.TitleWrapper>
              <S.TitleWrapper ref={ref_3}>
                <AdminTitle {...Titles[3]}/>
                <MemberInfo/>
              </S.TitleWrapper>
              <S.TitleWrapper ref={ref_4}>
                <AdminTitle {...Titles[4]}/>
                <MemberState/>
              </S.TitleWrapper>
              <S.TitleWrapper ref={ref_5}>
                <AdminTitle {...Titles[5]}/>
                <RecruitingForm/>
              </S.TitleWrapper>
            </S.Middle>
            <S.Right>
              <S.RightTop>
                <S.RightTitle>
                  <T.Pretendard21R>Changes</T.Pretendard21R>
                </S.RightTitle>
                <ChangesTracker/>
              </S.RightTop>
              <SubmitBtn/>
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