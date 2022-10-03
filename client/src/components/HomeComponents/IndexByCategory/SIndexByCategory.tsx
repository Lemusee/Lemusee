import styled from "styled-components";
import * as T from "../../Global/Text/Text";
import * as G from "../../Global/Spacing/Spacing";

export const Wrapper = styled(G.Wrapper)`
  background-color: ${props=> props.theme.lemuseeblack_20};
`;

export const Container = styled(G.Container)`
  gap: 20px;
  padding: 100px 0;
  align-items: center;
`;

export const contentTitle = styled(G.contentTitle)``;

export const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  button {
    padding: 0;
    border-radius: 15px;
  }
`;