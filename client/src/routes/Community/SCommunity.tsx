import { motion } from "framer-motion";
import styled from "styled-components";
import * as G from "../../GlobalComponents/Spacing/Spacing";
import * as T from "../../GlobalComponents/Text/Text";

export const Wrapper = styled(G.Wrapper)``;

export const Container = styled(G.Container)`
  flex-direction: row;
  justify-content: space-between;
  width: 1280px;
  height: fit-content;
`;

export const CategoryArea = styled.div`
  height: 100vh;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
`;

export const Lists = styled.div`
  width: 840px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:0px;
  margin-left: 440px;
`;

export const ListTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  width: 100%;
  color: ${props=> props.theme.lemuseeblack_100};
  ${T.Pretendard24B} {
    color: inherit;
  }
  &:first-child {
    color: ${props=>props.theme.lemuseeblack_50};
  }
`;

export const UpperArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(T.Pretendard24B)`
  color: ${props=>props.theme.lemuseeblack_50};
`;

export const SubTitle = styled(T.Pretendard24B)`
  color: ${props=>props.theme.lemuseeblack_100};
  max-width: 540px;
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 5px;
  padding: 0 3px;
  &:hover {
    background-color: ${props=> props.theme.lemuseeblack_30};
  };
  &:active {
    background-color: ${props=>props.theme.lemuseeblack_50};
  }
`;

export const ContentTitleArea = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentTitle = styled(T.Pretendard24B)`
  color: ${props=>props.theme.lemuseeblack_100};
  max-width: 350px;
  max-height: 30px;
  white-space: no-wrap;
  overflow: hidden;
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const AddBtn = styled.button``;