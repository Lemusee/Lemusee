import styled from "styled-components";
import * as T from "../Text/Text";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
`;

export const contentTitle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0px;
  ${T.Pretendard17M} {
    text-transform: uppercase;
    color: ${props=>props.theme.lemuseeblack_100};
    font-weight: 600;
    letter-spacing: 1.19px;
  }
`;

export const Space150px = styled.div`
  display: flex;
  width: 100px;
  height: 150px;
  background-color: transparent;
`;

interface IFocus {
  focus?:number;
  state?:number;
}

export const Tag = styled.div<IFocus>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
  border-radius: 15px;
  transition: 0.2s;
  background-color: ${props => props.focus === props.state ? props.theme.lemuseeblack_80 : props.theme.lemuseeblack_30};
  color: ${props => props.focus === props.state ? props.theme.lemuseeblack_00 : props.theme.lemuseeblack_100};
  &:hover {
    background-color: ${props => props.focus === props.state ? props.theme.lemuseeblack_80 : props.theme.lemuseeblack_50};
    transition: 0.2s;
  }
`;

export const VerticalBar = styled.div`
  width: 1px;
  height: 130px;
  flex-grow: 0;
  align-self: center;
  background-color: ${props=>props.theme.lemuseeblack_60};
`;

