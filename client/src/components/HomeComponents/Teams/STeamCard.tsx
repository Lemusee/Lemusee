import styled from "styled-components";
import * as T from "../../Global/Text/Text";

export const Card = styled.button`
  width: 290px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  ${T.Pretendard17M}{
    font-weight: 600;
    letter-spacing: 1.19px;
    text-transform: uppercase;
  }
  ${T.Pretendard15R} {
    width: 270px;
    height: 106px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: normal;
    color: ${props=>props.theme.lemuseeblack_60};
  }
`;

interface IImgUrl {
  imgUrl?:string;
}

export const Img = styled.div<IImgUrl>`
  width: 150px;
  height: 150px;
  border: 0;
  overflow: hidden;
  background-image: url(${props=>props.imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(70%);
`;