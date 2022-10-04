import styled from "styled-components";
import * as G from "../../Global/Spacing/Spacing";
import * as T from "../../Global/Text/Text";

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  padding: 20px 10px;
  border-radius: 10px;
  ${T.Pretendard15M} {
    width: 270px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

interface IThumnailUrl {
  thumnailUrl?:string;
}

export const VideoImg = styled.div<IThumnailUrl>`
  width: 270px;
  height: 152px;
  overflow: hidden;
  background-image: url(${props=>props.thumnailUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const videoDetailText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${T.Pretendard13R} {
    text-decoration: underline;
  }
  ${T.Pretendard11R} {
    color: ${props=>props.theme.lemuseeblack_60};
  }
`;

export const Tag = styled(G.Tag)`
  background-color: transparent;
  border: solid 1px ${props=>props.theme.lemuseeblack_70};
  color: ${props=> props.theme.lemuseeblack_70};
  &:hover {
    background-color: inherit;
  } 
`;