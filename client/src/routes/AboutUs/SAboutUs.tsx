import styled from "styled-components";
import * as T from "../../GlobalComponents/Text/Text";
import TopImgData from "../../assets/images/aboutUs/aboutUsTopImg.png";
import MiddleImgData from "../../assets/images/aboutUs/aboutUsMiddleImg.png";
import BottomImgData from "../../assets/images/aboutUs/aboutUsBottomImg.jpg";

export const Wrapper = styled.div`
  width: 100vw;
  background-color: ${props=>props.theme.lemuseeblack_90};
  position: relative;
  color: ${props => props.theme.lemuseeblack_00};
`;

export const TopBanner = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 1024px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.27) 0%, rgba(32, 32, 32, 0.85) 72%, ${props=>props.theme.lemuseeblack_100} 89%, ${props => props.theme.lemuseeblack_100} 100%), url(${TopImgData});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  z-index: -1;
  p {
    z-index: 100;
    color: inherit;
    text-align: center;
  }
`;

export const LogoRound = styled.div`
  width: 200px;
  height: 200px;
  color: white;
  z-index: 100;
  margin-top: 373px;
  margin-bottom: 40px;
  path {
    fill: ${props=> props.theme.lemuseeblack_00};
  };
`;

export const NanumMyeongjo24R = styled.h2`
  font-family: 'NanumMyeongjo';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 3.6px;
  color: inherit;
  text-align: center;
  z-index: 100;
`;

export const NanumMyeongjo17R = styled.p`
  font-family: 'NanumMyeongjo';
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 0.85px;
  color: inherit;
`;

export const VerticalBar = styled.div`
  width: 1px;
  height: 150px;
  flex-grow: 0;
  align-self: center;
  background-color: ${props=>props.theme.lemuseeblack_60};
  z-index: 100;
`;

export const DimmedPretendard17R = styled(T.Pretendard17R)`
  color: ${props => props.theme.lemuseeblack_60} !important;
`;

export const MiddleBanner = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const MiddleImg = styled.div`
  width: 1320px;
  height: 100%;
  background-image: linear-gradient(to right, #000 0%, rgba(0, 0, 0, 0) 49%, #000 100%), url(${MiddleImgData});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BottomImg = styled.div`
  height: 878px;
  width: 1170px;
  background-position: center;
  background-repeat: no-repeat; 
  background-size: contain;
  background-image: url(${BottomImgData});
`;