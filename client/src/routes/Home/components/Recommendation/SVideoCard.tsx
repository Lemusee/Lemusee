import styled from "styled-components";
import * as T from "../../../../GlobalComponents/Text/Text"

export const Card = styled.button`
  padding: 10px 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 390px;
  ${T.Pretendard15M} {
    color: ${props => props.theme.lemuseeblack_100};
    text-align: left;
    width: 300px;
    height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  ${T.Pretendard13R} {
    color: ${props => props.theme.lemuseeblack_60};
    text-align: right;
  }
`;

export const CardContent = styled(T.Pretendard15R)`
  width: 390px;
  height: 54px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props=>props.theme.lemuseeblack_60};
  text-align: left;
`;

export const Speaker = styled(T.Pretendard13R)`
  text-decoration: underline;
  color: ${props=>props.theme.lemuseeblack_100};
`;