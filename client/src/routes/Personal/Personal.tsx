import * as S from "./SPersonal";
import * as T from "../../GlobalComponents/Text/Text";
import PersonalData from "../../assets/dummyData/dummyPersonalInfo.json";
import React, { useEffect, useRef, useState } from "react";
import PrevPageBtn from "../../GlobalComponents/Buttons/PrevPageBtn";
import Moment from "react-moment";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../../atoms";
import Loading from "../../GlobalComponents/Loading/Loading";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface IPersonal {
  id: number;
  email: string;
  nickName: string;
  birthYear?: string;
  department?: string;
  phone?: string;
  studentId?: string;
  introduce?: string;
  team?: string;
  role?: string;
  isChief?: boolean;
  createdAt: string;
  updatedAt?: string;
};

interface ITeam {
  [key:string]: string;
};

const TeamInterpreter: ITeam = {
  curator: "큐레이터",
  content: "컨텐츠",
  culture: "컬쳐",
  admin: "어드민",
  etc: "기타"
};

interface IForm {
  extraError: string;
  email: string;
  nickName: string;
  birthYear?: string;
  department?: string;
  phone?: string;
  studentId?: string;
  introduce?: string;
};

function Personal () {
  const { register, handleSubmit, setValue, setError, formState:{errors}, getValues, watch } = useForm<IForm>();
  const [isLoading, setIsLoading] = useState(true);
  const [copyData, setCopyData] = useState<IPersonal>();
  const [teamView, setTeamView] = useState<string>();
  const isLogedIn = useRecoilValue(isLoggedInAtom);
  const navigate = useNavigate();
  useEffect(()=>{
    if (isLogedIn) {
      /**personal data fetch */
      setCopyData(PersonalData.result);
      setIsLoading(false);
    } else if (!isLogedIn) {
      window.alert("로그인 해주세요");
      navigate(-1);
    };
  },[isLogedIn, navigate]);
  useEffect(()=> {
    if (copyData?.team === null) {
      setTeamView("비활동 회원")
    } else if (copyData?.isChief) {
      const thisTeam = copyData.team;
      const teamViewset = TeamInterpreter[thisTeam ? thisTeam : "etc"];
      setTeamView(`${teamViewset} 팀장`);
    } else if (!copyData?.isChief) {
      const thisTeam = copyData?.team;
      const teamViewset = TeamInterpreter[thisTeam ? thisTeam : "etc"];
      setTeamView(`${teamViewset} 팀`);
    };
  }, [copyData]);
  const onValid = (data:IForm) => {
    setError("extraError", {message:"Server offline"});
    const multipleValues = getValues(['email', 'nickName', 'birthYear', 'department', 'phone', 'studentId', 'introduce']);
    console.log(multipleValues);
  };
  return (
    <>
      {!isLoading&&isLogedIn ? (
        <S.Wrapper>
          <S.Container onSubmit={handleSubmit(onValid)}>
            <S.Top>
              <S.Introduce 
                  {...register("introduce", {
                    value: `${copyData ? copyData?.introduce : "자기소개를 입력해주세요"}`,
                    max: 200,
                  })}
                />
              <S.NameArea>
                <S.NickNameInput
                    type="text"
                    {...register("nickName", {
                      value: `${copyData?.nickName ? copyData?.nickName : "이름을 입력해주세요"}`
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
                        value: `${copyData?.department ? copyData?.department : "학과"}`
                      })}
                    />
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.InputBtn>
                <S.InputBtn>
                  <S.Input 
                      width={typeof watch("studentId") === 'string' ? (27 * (watch("studentId") || "..").length) : 240}
                      type="text"
                      {...register("studentId", {
                        value: `${copyData ? copyData?.studentId : "학번"}`
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
                  <T.Pretendard44M>{copyData ? teamView : "소속 팀"}</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
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
                        value: `${copyData ? copyData?.email : "이메일"}`
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
                        value: `${copyData ? copyData?.birthYear : "생일"}`
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
                  <T.Pretendard15R>
                    <Moment format="YY.MM.DD. HH:MM">{copyData?.createdAt}</Moment>
                  </T.Pretendard15R>
                </S.InfoBlock>
                <S.InfoBlock>
                  <T.Pretendard15B>LAST MODIFIED DATE.</T.Pretendard15B>
                  <T.Pretendard15R>
                    <Moment format="YY.MM.DD. HH:MM">{copyData?.updatedAt}</Moment>
                  </T.Pretendard15R>
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