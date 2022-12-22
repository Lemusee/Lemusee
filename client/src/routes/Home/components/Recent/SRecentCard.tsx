import styled from "styled-components";
import * as T from "../../../../GlobalComponents/Text/Text";
import * as G from "../../../../GlobalComponents/Spacing/Spacing";

interface IBackgroundImg {
  imgUrl?:string;
}

export const Wrapper = styled.div<IBackgroundImg>`
  cursor: pointer;
  width: 290px;
  height: 400px;
  border-radius: 10px;
  background: url(${props => props.imgUrl});
  filter: grayscale(100%);
  background-size: cover;
  background-position: center;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-shrink: 0;
  transition: 0.2s;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 264px 10px 34px;
  width: 290px;
  height: 100%;
  text-align: left;
  color: ${props=>props.theme.lemuseeblack_00};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 82.29%, rgba(0, 0, 0, 0.8) 100%);
  &:hover {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%);
    transition: 0.2s;
  }
  &:active {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.8) 100%);
    color: ${props=>props.theme.lemuseeblack_70};
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  ${T.Pretendard15B} {
    color: inherit;
    width: 270px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  ${T.Pretendard15R} {
    color: inherit;
    width: 270px;
    height: 72px;
    white-space: normal;
    word-break: keep-all;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
  }
`;