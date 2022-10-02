import { ImgHTMLAttributes } from "react";
import styled from "styled-components";
import * as G from "../../Global/Spacing/Spacing";
import * as T from "../../Global/Text/Text"

export const Wrapper = styled(G.Wrapper)``;

export const Container = styled(G.Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 55px;
  padding: 150px 0;
  background-color: transparent;
`;

export const CurationBoard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const BoardLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  text-align: left;
  ${T.Pretendard44B} {
    text-transform: uppercase;
    width: 660px;
    word-break: keep-all;
  }
  ${T.Pretendard17R} {
    color: ${props=>props.theme.lemuseeblack_70};
    width: 660px;
    white-space: normal;
    word-break: keep-all;
    -webkit-line-clamp: 5;
    margin-top: 15px;
  }
`;

interface ImgUrl {
  imgUrl:string;
}

export const BoardRightImg = styled.img<ImgUrl>`
  width: 550px;
  height: 325px;
  background-color: ${props=>props.theme.lemuseeblack_30};
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.imgUrl || ""});
  filter: grayscale(100%);
`;

export const nexBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 105px;
  ${T.Pretendard15M} {
    color: ${props=> props.theme.lemuseeblack_70};
  }
  svg {
    color: ${props=> props.theme.lemuseeblack_70};
  }
`;

export const CurationList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;