import styled from "styled-components";
import * as G from "../../GlobalComponents/Spacing/Spacing";
import * as T from "../../GlobalComponents/Text/Text";

export const Wrapper = styled(G.Wrapper)`
  height: 100vh;
`;

export const Container = styled(G.Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentArea = styled.div`
  width: 100%;
  height: 496px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 150px;
  padding: 0 20px;
`;

export const ContentAreaLeft = styled.div`
  height: 100px;
  width: 620px;
  display: flex;
  flex-direction: column;
  gap: 230px;
`;


export const TitleArea = styled.div`
  width: 100%;
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-transform: uppercase;
  ${T.Pretendard44B} {
    color: ${props=>props.theme.lemuseeblack_60};
    letter-spacing: 4.4px;
    text-align: left;
  }
  ${T.Pretendard44R} {
    color: ${props=>props.theme.lemuseeblack_100};
    letter-spacing: 4.4px;
    text-align: left;
    margin-bottom: 30px;
  }
  ${T.Pretendard15R} {
    color: ${props=>props.theme.lemuseeblack_60};
  }
  `;

export const SubTitles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `;

export const SubTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  text-align: left;
  gap: 10px;
  ${T.Pretendard15B} {
    text-transform: uppercase;
    color: ${props=>props.theme.lemuseeblack_100};
  }
  ${T.Pretendard15R} {
    color: ${props=>props.theme.lemuseeblack_60};
  }
`;

export const ContentAreaRight = styled.div`
  width: 510px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${T.Pretendard17R} {
    margin-bottom: 65px;
  }
`;