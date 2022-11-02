import { motion } from "framer-motion";
import styled from "styled-components";
import * as G from "../../components/Global/Spacing/Spacing";
import * as T from "../../components/Global/Text/Text";

export const Wrapper = styled(G.Wrapper)``;

export const Container = styled(G.Container)`
  flex-direction: row;
  justify-content: space-between;
  width: 1280px;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

