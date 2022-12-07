import { useEffect, useState } from "react";
import styled from "styled-components";
import dummyMemberInfo from "../../assets/dummyData/dummyMemberInfo.json";
import Loading from "../Global/Loading/Loading";
import * as T from "../Global/Text/Text";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  `;

const Num = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  ${T.Pretendard44B} {
    color: ${props=>props.theme.lemuseeblack_100};
  };
  ${T.Pretendard15M} {
    color: ${props=>props.theme.lemuseeblack_70};
  };
`;

interface IData {
  memberActiveThisSemester?: number;
  memberInactive?: number;
  memberGraduated?: number;
  memberTotal?: number;
};

function MemberInfo () {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [MemberInfoData, setMemberInfoData] = useState<IData>({});
  useEffect(() => {
    setMemberInfoData(dummyMemberInfo.result);
    setIsLoading(false);
  }, []);
  
  return (
    <>
      {
        isLoading ? (
          <Loading/>
        ) : (
          <Wrapper>
            <Num>
              <T.Pretendard44B>{MemberInfoData.memberActiveThisSemester}</T.Pretendard44B>
              <T.Pretendard15M>/이번 학기 활동 회원 수</T.Pretendard15M>
            </Num>
            <Num>
              <T.Pretendard44B>{MemberInfoData.memberInactive}</T.Pretendard44B>
              <T.Pretendard15M>/비활동 회원 수</T.Pretendard15M>
            </Num>
            <Num>
              <T.Pretendard44B>{MemberInfoData.memberGraduated}</T.Pretendard44B>
              <T.Pretendard15M>/졸업 회원 수</T.Pretendard15M>
            </Num>
            <Num>
              <T.Pretendard44B>{MemberInfoData.memberTotal}</T.Pretendard44B>
              <T.Pretendard15M>/회원 수</T.Pretendard15M>
            </Num>
          </Wrapper>
        )
      }
    </>
  )
};

export default MemberInfo;