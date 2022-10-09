import styled from "styled-components";
import * as G from "../../components/Global/Spacing/Spacing";
import * as T from "../../components/Global/Text/Text"; 

export const hookGrid = styled.div`
  width: 510px;
  display: grid;
  row-gap: 30px;
  column-gap: 70px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 60px);
  justify-items: start;
  margin-bottom: 120px;
`;

export const btnArea = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  column-gap: 70px;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  justify-items: start;
  gap: 70px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;
  text-align: left;
  justify-content: flex-start;
  ${T.Pretendard13R}{
    color: ${props=>props.theme.lemuseeblack_100};
  }
  input {
    width: 220px;
    color: ${props=>props.theme.lemuseeblack_60};
    font-size: 13px;
    font-weight: 400;
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    &:focus {
      border-bottom: 1px solid ${props=>props.theme.lemuseeblack_60};
    }
  }
  span {
    font-size: 11px;
    color: ${props=>props.theme.error_red};
    text-align: left;
  }
`;