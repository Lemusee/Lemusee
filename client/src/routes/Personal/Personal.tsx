import * as S from "./SPersonal";
import * as T from "../../components/Global/Text/Text";
import PersonalData from "../../assets/dummyData/dummyPersonalInfo.json";
import React, { useEffect, useState } from "react";
import PrevPageBtn from "../../components/Global/Buttons/PrevPageBtn";
import Moment from "react-moment";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../../atoms";
import Loading from "../../components/Global/Loading/Loading";

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
  createdAt: string;
  updatedAt?: string;
};

function Personal () {
  const [isLoading, setIsLoading] = useState(true);
  const [copyData, setCopyData] = useState<IPersonal>();
  const isLogedIn = useRecoilValue(isLoggedInAtom);
  useEffect(()=>{
    setCopyData(PersonalData.result);
    setIsLoading(false);
  },[]);

  return (
    <>
      {!isLoading&&isLogedIn ? (
        <S.Wrapper>
          <S.Container>
            <S.Top>
              <S.Introduce placeholder={copyData ? copyData?.introduce : "자기소개를 입력해주세요"} />
              <S.NameArea>
                <S.NickNameInput placeholder={copyData?.nickName}></S.NickNameInput>
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
                  <T.Pretendard44M contentEditable onInput={(e:React.FormEvent<HTMLHeadingElement>)=>{console.log(e.currentTarget.innerText)}}>{copyData ? copyData?.department : "학과"}</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.InputBtn>
                <S.InputBtn>
                  <T.Pretendard44M contentEditable>{copyData ? copyData?.studentId : "학번"}</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.InputBtn>
              </S.InputArea>
              <S.InputArea>
                <S.Index>
                  <T.Pretendard44M>LEMUSEE</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.Index>
                <S.InputBtn>
                  <T.Pretendard44M>{copyData ? copyData?.role : "활동 여부"}</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.InputBtn>
                <S.InputBtn>
                  <T.Pretendard44M>{copyData ? copyData?.team : "팀"}</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.InputBtn>
              </S.InputArea>
              <S.InputArea>
                <S.Index>
                  <T.Pretendard44M>EMAIL</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.Index>
                <S.InputBtn>
                  <T.Pretendard44M contentEditable>{copyData ? copyData?.email : "이메일"}</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.InputBtn>
              </S.InputArea>
              <S.InputArea>
                <S.Index>
                  <T.Pretendard44M>Birthday</T.Pretendard44M>
                  <T.Pretendard44M>/</T.Pretendard44M>
                </S.Index>
                <S.InputBtn>
                  <T.Pretendard44M contentEditable>{copyData ? copyData?.birthYear : "생일"}</T.Pretendard44M>
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