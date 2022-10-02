import styled from "styled-components";
import * as G from "../../Global/Spacing/Spacing";
import * as T from "../../Global/Text/Text";

interface IBackgroundImg {
  imgUrl?:string;
  focus?:boolean | false;
}

interface IFocus {
  focus?:boolean | false;
}

export const Wrapper = styled.div<IBackgroundImg>`
  cursor: pointer;
  width: 290px;
  height: 400px;
  border-radius: 10px;
  background: url(${props => props.focus ? props.imgUrl : ""});
  filter: grayscale(100%);
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const Container = styled.div<IFocus>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 88px 10px 10px;
  width: 100%;
  height: 100%;
  text-align: left;
  color: ${props=> props.focus ? props.theme.lemuseeblack_00 : props.theme.lemuseeblack_70};
  background: ${props => props.focus ? "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 82.29%, rgba(0, 0, 0, 0.8) 100%)" : "transperant"};
  &:hover {
    background: ${props => props.focus ? "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)" : props.theme.lemuseeblack_30};
    transition: 0.2s;
  }
  &:active {
    background: ${props => props.focus ? "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.8) 100%)" : props.theme.lemuseeblack_50};
    color: ${props=>props.theme.lemuseeblack_70};
    Bar {
      background-color: ${props=>props.theme.lemuseeblack_70};
    }
  }
  ${T.Pretendard19B} {
    color: ${props=> props.theme.lemuseeblack_60};
    display: flex;
    text-align: right;
    align-self: flex-end;
  }
`;

export const TextBox = styled.div<IFocus>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${T.Pretendard44B} {
    color: inherit;
    width: 270px;
    white-space: normal;
    margin-bottom: 12px;
    text-transform: uppercase;
  }
  ${T.Pretendard13R} {
    color: inherit;
    width: 270px;
    height: 32px;
    white-space: normal;
    word-break: keep-all;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }
`;

export const Bar = styled.div<IFocus>`
  width: 30px;
  height: 2px;
  background-color: ${props=> props.focus ? props.theme.lemuseeblack_00 : props.theme.lemuseeblack_70};
  margin-bottom: 12px;
`;


