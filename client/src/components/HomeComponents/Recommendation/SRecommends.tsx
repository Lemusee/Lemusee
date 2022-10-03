import styled from "styled-components";
import * as G from "../../Global/Spacing/Spacing";

export const Wrapper = styled(G.Wrapper)`
  background-color: ${props => props.theme.lemuseeblack_20};
`;

export const Container = styled(G.Container)`
  gap: 15px;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ConstentTitle = styled(G.contentTitle)``;

export const VideoBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 40px;
`;
