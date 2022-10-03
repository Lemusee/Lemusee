import styled from "styled-components";
import * as T from "../../Global/Text/Text";
import * as G from "../../Global/Spacing/Spacing";

export const Wrapper = styled(G.Wrapper)``;

export const Container = styled(G.Container)`
  gap: 70px;
  padding: 150px 0 200px;
  align-items: center;
`;

export const contentTitle = styled(G.contentTitle)``;

export const CardBlock = styled.div`
  width: 100%;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: start;
  justify-items: center;
`;