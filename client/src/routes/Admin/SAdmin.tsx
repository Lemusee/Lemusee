import styled from "styled-components";
import * as T from "../../GlobalComponents/Text/Text";

export const Wrapper = styled.div`
  width: 100vw;
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
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const LeftTitle = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 51px;
  ${T.Pretendard24B} {
    color: ${props=>props.theme.lemuseeblack_60};
    letter-spacing: 3.6px;
  };
  ${T.Pretendard24M} {
    color: ${props=>props.theme.lemuseeblack_100};
    letter-spacing: normal;
  };
`;

export const LeftCategories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
  margin-top: 240px;
`;

type $isselected = {
  $isselected?:boolean;
};

export const Category = styled.button<$isselected>`
  ${T.Pretendard21M} {
    color: ${props => props.$isselected ? props.theme.lemuseeblack_100 : props.theme.lemuseeblack_50};
  };
  ${T.Pretendard21M}:hover {
    color: ${props=>props.theme.lemuseeblack_80};
  };
`;

export const Middle = styled.div`
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  display: flex;
  flex-direction: column;
`;

export const RightTitle = styled.div`
  margin-bottom: 70px;
  ${T.Pretendard21R} {
    color: ${props => props.theme.lemuseeblack_70};
  }
`;

export const RightBottom = styled.button`
  cursor: pointer;
  height: 25%;
  width: 100%;
  padding: 0;
  border-radius: 0;
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 60px;
  background-color: ${props=>props.theme.lemuseeblack_70};
  &:hover {
    background-color: ${props=>props.theme.lemuseeblack_60};
    transition: 0.3s;
  };
  &:active {
    background-color: ${props=>props.theme.lemuseeblack_50};
    transition: 0.3s;
  }
  ${T.Pretendard24B} {
    color: ${props => props.theme.lemuseeblack_00};
  };
  path {
    stroke: ${props => props.theme.lemuseeblack_00};
  };
`;