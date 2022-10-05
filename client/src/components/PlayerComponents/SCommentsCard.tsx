import styled from "styled-components";
import * as T from "../Global/Text/Text";
import * as G from "../Global/Spacing/Spacing";

export const Wrapper = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding: 15px 5px;
  ${T.Pretendard13R} {
    color: ${props=>props.theme.lemuseeblack_60};
    word-break: keep-all;
    white-space: pre-wrap;
    text-align: left;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
`;

export const EditBtn = styled.button`
  ${T.Pretendard13M}{
    text-align: right;
    white-space: nowrap;
    color: ${props=>props.theme.lemuseeblack_60};
  }
`;

export const TitleLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
  gap: 5px;
  color: ${props=>props.theme.lemuseeblack_100};
  ${T.Pretendard13M} {
    color: inherit;
    text-align: left;
  }
  ${T.Pretendard11R} {
    color: ${props=>props.theme.lemuseeblack_60};
  }
`;

