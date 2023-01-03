import * as S from "./SPersonal";
import * as T from "../../GlobalComponents/Text/Text";
import React, { useEffect, useRef, useState } from "react";
import PrevPageBtn from "../../GlobalComponents/Buttons/PrevPageBtn";
import Moment from "react-moment";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../../storage/common";
import Loading from "../../GlobalComponents/Loading/Loading";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IPersonal, IPersonalTeam, IPersonalAdjustmentForm } from "../../Types";
import { myPersonalDataAtom } from "../../storage/user";

const TeamInterpreter: IPersonalTeam = {
  curator: "큐레이터",
  content: "컨텐츠",
  culture: "컬쳐",
  admin: "어드민",
};

function Personal () {
  const { register, handleSubmit, setValue, setError, formState:{errors}, getValues, watch } = useForm<IPersonalAdjustmentForm>();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useRecoilState(myPersonalDataAtom);
  const [teamView, setTeamView] = useState<string>();
  const isLogedIn = useRecoilValue(isLoggedInAtom);
  const navigate = useNavigate();
  useEffect(()=>{
    if (isLogedIn) {
      /**personal data fetch */
      setIsLoading(false);
    } else if (!isLogedIn) {
      window.alert("로그인 해주세요");
      navigate(-1);
    };
  },[isLogedIn, navigate, userData]);
  useEffect(()=> {
    if (userData?.team === "INACTIVE") {
      setTeamView("비활동 회원")
    } else if (userData?.isChief) {
      const thisTeam = userData.team;
      const teamViewset = TeamInterpreter[thisTeam ? thisTeam : "INACTIVE"];
      setTeamView(`${teamViewset} 팀장`);
    } else if (!userData?.isChief) {
      const thisTeam = userData?.team;
      const teamViewset = TeamInterpreter[thisTeam ? thisTeam : "INACTIVE"];
      setTeamView(`${teamViewset} 팀`);
    };
  }, [userData]);
  const onValid = (data:IPersonalAdjustmentForm) => {
    setError("extraError", {message:"Server offline"});
    /**profile change upload */
    setUserData((prev) => {
      if (prev) {
        const returnData = {
          ...prev,
          email : data.email, 
          nickName : data.nickName,
          birthYear : data.birthYear,
          department : data.department,
          phone : data.phone,
          studentId : data.studentId,
          introduce : data.introduce
        };
        return returnData
      } else return prev;
    });

  };
  return (
    <>
      {!isLoading&&isLogedIn ? (
        <S.Wrapper>
          <S.Container onSubmit={handleSubmit(onValid)}>
            <S.Top>
              <S.Introduce 
                  {...register("introduce", {
                    value: `${userData?.introduce ? userData?.introduce : "자기소개를 입력해주세요"}`,
                    max: 200,
                  })}
                />
              <S.NameArea>
                <S.NickNameInput
                    type="text"
                    {...register("nickName", {
                      value: `${userData?.nickName ? userData?.nickName : "이름을 입력해주세요"}`
                    })}
                  />
                <T.Pretendard44M>/ NAME</T.Pretendard44M>
              </S.NameArea>
            </S.Top>
            <S.Mid>
              <S.InputArea>
                <S.Index>
                  <T.Pretendard44M>Konkuk U</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.Index>
                <S.InputBtn>
                  <S.Input 
                      width={typeof watch("department") === 'string' ? (39 * (watch("department") || "..").length) : 240}
                      type="text"
                      {...register("department", {
                        value: `${userData?.department !== null ? userData?.department : "학과"}`
                      })}
                    />
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.InputBtn>
                <S.InputBtn>
                  <S.Input 
                      width={typeof watch("studentId") === 'string' ? (27 * (watch("studentId") || "..").length) : 240}
                      type="text"
                      {...register("studentId", {
                        value: `${userData?.studentId !== null ? userData?.studentId : "학번"}`
                      })}
                    />
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.InputBtn>
              </S.InputArea>
              <S.InputArea>
                <S.Index>
                  <T.Pretendard44M>LEMUSEE</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.Index>
                <S.InputBtn>
                  <T.Pretendard44M>{teamView !== "비활동 회원" ? "활동 회원" : "비활동 회원"}</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.InputBtn>
                <S.InputBtn>
                  {teamView !== "비활동 회원" ? (
                    <>
                      <T.Pretendard44M>{teamView}</T.Pretendard44M>
                      <T.Pretendard44M>/</T.Pretendard44M>
                    </>
                  ) : null}
                </S.InputBtn>
              </S.InputArea>
              <S.InputArea>
                <S.Index>
                  <T.Pretendard44M>EMAIL</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.Index>
                <S.InputBtn>
                  <S.Input 
                      width={typeof watch("email") === 'string' ? (27 * (watch("email") || "..").length) : 240}
                      type="text"
                      {...register("email", {
                        value: `${userData?.email ? userData?.email : "이메일"}`
                      })}
                    />
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.InputBtn>
              </S.InputArea>
              <S.InputArea>
                <S.Index>
                  <T.Pretendard44M>Birthday</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.Index>
                <S.InputBtn>
                  <S.Input 
                      width={typeof watch("birthYear") === 'string' ? (27.5 * (watch("birthYear") || "..").length) : 240}
                      type="text"
                      {...register("birthYear", {
                        value: `${userData?.birthYear !== null ? userData?.birthYear : "생일"}`
                      })}
                    />
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.InputBtn>
              </S.InputArea>
            </S.Mid>
            <S.Bottom>
              <S.DateInfo>
                <S.InfoBlock>
                  <T.Pretendard15B>JOIN DATE.</T.Pretendard15B>
                    {userData?.createdAt !== "" ? (
                      <>
                        <T.Pretendard15R>
                          <Moment format="YY.MM.DD. HH:MM">{userData?.createdAt}</Moment>
                        </T.Pretendard15R>
                      </>
                    ) : (
                      <T.Pretendard15R>회원가입 일시 정보가 없습니다.</T.Pretendard15R>
                    )}
                </S.InfoBlock>
                <S.InfoBlock>
                  <T.Pretendard15B>LAST MODIFIED DATE.</T.Pretendard15B>
                    {userData?.updatedAt !== "" ? (
                      <>
                        <T.Pretendard15R>
                          <Moment format="YY.MM.DD. HH:MM">{userData?.updatedAt}</Moment>
                        </T.Pretendard15R>
                      </>
                    ) : (
                      <T.Pretendard15R>개인정보 갱신 정보가 없습니다.</T.Pretendard15R>
                    )}
                </S.InfoBlock>
              </S.DateInfo>
              <PrevPageBtn name="Save Changes"/>
            </S.Bottom>
          </S.Container>
        </S.Wrapper>
      ) : <Loading/>}
      
    </>
  )
}

export default Personal;