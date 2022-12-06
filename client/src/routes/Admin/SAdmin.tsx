import styled from "styled-components";
import * as T from "../../components/Global/Text/Text";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 360fr 1120fr 440fr;
  background-color: ${props=>props.theme.lemuseeblack_10};
`;

export const Left = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 24px;
  border-right: solid 1px ${props=>props.theme.lemuseeblack_30};
`;

export const Middle = styled.div`
  padding: 80px 60px;
`;

export const Right = styled.div`
  position: sticky;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const RightTop = styled.div`
  padding: 70px 60px;
  height: 75%;
  width: 100%;
  background-color: ${props => props.theme.lemuseeblack_20};
`;

export const RightBottom = styled.div`
  cursor: pointer;
  height: 25%;
  width: 100%;
  padding-left: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props=>props.theme.lemuseeblack_70};
  &:hover {
    background-color: ${props=>props.theme.lemuseeblack_60};
    transition: 0.3s;
  }
`;