import styled from "styled-components";
import * as G from "../Spacing/Spacing";
import * as T from "../Text/Text";

export const Wrapper = styled(G.Wrapper)`
  background-color: ${props=>props.theme.lemuseeblack_80};
  color: ${props=> props.theme.lemuseeblack_00};
`;
export const Container = styled(G.Container)`
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  ${T.Pretendard21B} {
    letter-spacing: 2.1px;
    text-align: left;
    text-transform: uppercase;
    color: ${props=> props.theme.lemuseeblack_00};
  }
  ${T.Pretendard21R} {
    color: ${props=> props.theme.lemuseeblack_40};
  }
`;
