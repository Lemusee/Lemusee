import styled from "styled-components";
import * as T from "../../components/Global/Text/Text";
import * as G from "../../components/Global/Spacing/Spacing";

export const Wrapper = styled(G.Wrapper)`
  background-color: ${props=>props.theme.lemuseeblack_20};
`;

export const Container = styled(G.Container)``;

export const TitleContainer = styled(G.Container)`
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:nth-child(2) {
    color: ${props=>props.theme.lemuseeblack_70};
  }
`;

export const VideoWrapper = styled(G.Wrapper)`
  background-color: ${props=>props.theme.lemuseeblack_80};
`;

export const DescriptionWrapper = styled(G.Wrapper)`
  background-color: ${props=>props.theme.lemuseeblack_10};
`;

export const DescriptionContainer = styled(G.Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 25px;
  ${T.Pretendard15R} {
    width: 100%;
    white-space: pre-wrap;
    word-break: keep-all;
  }
`;

export const CommentWrapper = styled(G.Wrapper)`
  background-color: ${props=>props.theme.lemuseeblack_20};
`;

export const CommentContainer = styled(G.Container)`
  padding: 20px;
  gap: 20px;
  align-items: flex-start;
`;

export const contentTitle = styled(G.contentTitle)`
  align-items: flex-start;
`;

export const CommentsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:0px
`;

export const Space = styled(G.Space150px)`
  width: 100%;
  background-color: ${props=>props.theme.lemuseeblack_20};
`;