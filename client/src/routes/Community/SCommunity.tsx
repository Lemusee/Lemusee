import { motion } from "framer-motion";
import styled from "styled-components";
import * as G from "../../components/Global/Spacing/Spacing";
import * as T from "../../components/Global/Text/Text";

export const Wrapper = styled(G.Wrapper)``;

export const Container = styled(G.Container)`
  flex-direction: row;
  justify-content: space-between;
  width: 1280px;
  height: fit-content;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Lists = styled.div`
  width: 840px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:50px;
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