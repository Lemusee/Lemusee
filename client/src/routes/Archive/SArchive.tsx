import styled from "styled-components";
import * as T from "../../GlobalComponents/Text/Text";
import * as G from "../../GlobalComponents/Spacing/Spacing";
import { ISearchFocus } from "../../Types";
import { motion } from "framer-motion";

export const Wrapper = styled(G.Wrapper)``;

export const Container = styled(G.Container)`
  padding: 70px 0;
  gap: 50px;
  flex-direction: column;
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${T.Pretendard44B} {
    font-size: 36px;
    letter-spacing: 5.4px;
    color: ${props=> props.theme.lemuseeblack_100};
    text-transform: uppercase;
    margin-bottom: 3px;
  }
  ${T.Pretendard17R} {
    color: ${props=>props.theme.lemuseeblack_60};
    text-transform: uppercase;
    margin-bottom: 15px;
  }
`;

export const TagBox = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  button {
    padding: 0;
    border-radius: 15px;
  }
`;

export const Tag = styled(G.Tag)``;

export const SearchTag = styled.div<ISearchFocus>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 7px;
  border-radius: 15px;
  transition: 0.2s;
  color: ${props=>props.theme.lemuseeblack_00};
  background-color: ${props => props.focus ? props.theme.lemuseeblack_70 : props.theme.lemuseeblack_30};
  path {
    stroke: ${props => props.focus ? props.theme.lemuseeblack_00 : props.theme.lemuseeblack_100};
  }
  &:hover {
    background-color: ${props => props.focus ? props.theme.lemuseeblack_70 : props.theme.lemuseeblack_50};
    transition: 0.2s;
  }
`;


export const VideoListBox = styled.div`
  width: 100%;
  gap: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;