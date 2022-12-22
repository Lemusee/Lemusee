import { useEffect, useState } from "react";
import styled from "styled-components";
import dummyHomeInfo from "../../../../assets/dummyData/dummyHomeInfo.json";
import Loading from "../../../../GlobalComponents/Loading/Loading";
import * as T from "../../../../GlobalComponents/Text/Text";
import { IVisitorInfoData } from "../../../../Types";

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


function HomeInfo () {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [homeInfoData, setHomeInfoData] = useState<IVisitorInfoData>({});
  useEffect(() => {
    setHomeInfoData(dummyHomeInfo.result);
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
              <T.Pretendard44B>{homeInfoData.visitorThisMonth}</T.Pretendard44B>
              <T.Pretendard15M>/이번 달 방문자 수</T.Pretendard15M>
            </Num>
            <Num>
              <T.Pretendard44B>{homeInfoData.visitorThisWeek}</T.Pretendard44B>
              <T.Pretendard15M>/이번 주 방문자 수</T.Pretendard15M>
            </Num>
            <Num>
              <T.Pretendard44B>{homeInfoData.visitorThisDay}</T.Pretendard44B>
              <T.Pretendard15M>/오늘 방문자 수</T.Pretendard15M>
            </Num>
            <Num>
              <T.Pretendard44B>{homeInfoData.visitorAccumulated}</T.Pretendard44B>
              <T.Pretendard15M>/누적 방문자 수</T.Pretendard15M>
            </Num>
          </Wrapper>
        )
      }
    </>
  )
};

export default HomeInfo;