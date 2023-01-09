import styled from "styled-components";
import * as G from "../../GlobalComponents/Spacing/Spacing";
import * as T from "../../GlobalComponents/Text/Text";
import { IPersonalResponsiveInputWidth } from "../../Types";

export const Wrapper = styled(G.Wrapper)`
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container = styled.form`
  width: 1280px;
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: space-between;
  padding: 5px 20px;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Introduce = styled.textarea`
  background-color: transparent;
  outline: none;
  border: none;
  width: 249px;
  height: 45px;
  resize: none;
  font-family: inherit;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: ${props => props.theme.lemuseeblack_60};
  border-radius: 5px;
  padding: 3px 5px;
  &:hover {
    background-color: ${props=>props.theme.lemuseeblack_30};
  };
  &:active {
    background-color: ${props=>props.theme.lemuseeblack_50};
  };
`;

export const NameArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const NickNameInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  font-family: Pretendard;
  font-size: 44px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 6.6px;
  text-align: right;
  width: 700px;
  color: ${props => props.theme.lemuseeblack_60};
`;

export const Mid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: visible;
`;

export const Index = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  gap: 10px;
  padding: 5px 10px;
`;

export const InputBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: fit-content;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  ${T.Pretendard44M} {
    color: ${props=>props.theme.lemuseeblack_60};
    outline: none;
    background-color: transparent;
  };
  &:hover {
    background-color: ${props=>props.theme.lemuseeblack_30};
  };
  &:active {
    background-color: ${props=>props.theme.lemuseeblack_50};
  };
`;

export const Input = styled.input<IPersonalResponsiveInputWidth>`
  display: inline-flex;
  width: ${props=> props.width ? props.width+"px" : "490px"};
  color: ${props=>props.theme.lemuseeblack_60};
  background-color: transparent;
  outline: none;
  border: none;
  height: 53px;
  min-width: 83px;
  font-family: Pretendard;
  font-size: 44px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  text-align: left;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const DateInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 140px;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  ${T.Pretendard15B} {
    padding-left: 5px;
    color: ${props => props.theme.lemuseeblack_100};
  };
  ${T.Pretendard15R} {
    color: ${props => props.theme.lemuseeblack_80};
  }
`;