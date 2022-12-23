import styled from "styled-components";
import * as G from "../../../../GlobalComponents/Spacing/Spacing";
import * as T from "../../../../GlobalComponents/Text/Text";
import { IHomeImgUrl } from "../../../../Types";

export const Wrapper = styled(G.Wrapper)``;
export const Container = styled(G.Container)`
  align-items: center;
  gap: 55px;
  padding: 150px 0;
`;

export const contentTitle = styled(G.contentTitle)``;

export const contentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
`;

export const ExecutivesImg = styled.div<IHomeImgUrl>`
  width: 100%;
  height: 855px;
  background-image: url(${props=> props.imgUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  gap:8px;
  ${T.Pretendard17M} {
    color: ${props => props.theme.lemuseeblack_60};
    text-transform: uppercase;
  }
  ${T.Pretendard17B} {
    color: ${props=>props.theme.lemuseeblack_100};
  }
`;

