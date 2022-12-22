import styled from "styled-components";
import * as T from "../Text/Text";
import * as S from "../Spacing/Spacing"

interface IFooter {
  isDark?:boolean;
};


export const Wrapper = styled(S.Wrapper)<IFooter>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.isDark ? props.theme.lemuseeblack_100 : props.theme.lemuseeblack_20};
`;

export const Container = styled.div`
  width: 1280px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 175px;
`;

export const FooterLogo = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
  gap: 15px;
  border-radius: 10px;
`;

export const LogoRound = styled.div<IFooter>`
  width: 70px;
  height: 70px;
  background-image: url(${props=> props.isDark ? props.theme.logoWhite : props.theme.logoBlack});
  background-size: cover;
  background-position: center;
`;

export const LogoTextBox = styled.div<IFooter>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  ${T.Pretendard17B} {
    letter-spacing: 2.55px;
    color: ${props => props.isDark ? props.theme.lemuseeblack_00 : props.theme.lemuseeblack_100};
  }
  ${T.Pretendard11R} {
    width: 175px;
    font-size: 8px;
    text-align: left;
    color: ${props => props.isDark ? props.theme.lemuseeblack_00 : props.theme.lemuseeblack_100};
  }
`;

export const FooterLeftBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterTextBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const FooterCategory = styled.div<IFooter>`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 180px;
  height: 140px;
  padding: 20px 15px 31px 10px;
  ${T.Pretendard11R} {
    color: ${props => props.isDark ? props.theme.lemuseeblack_00 : props.theme.lemuseeblack_60};
    text-align: left;
    cursor: pointer;
  }
  ${T.Pretendard13M} {
    color: ${props => props.isDark ? props.theme.lemuseeblack_00 : props.theme.lemuseeblack_100};
    cursor: pointer;
  }
`;

export const Developer = styled.div<IFooter>`
  margin: 20px 80px;
  ${T.Pretendard11R}{
    color:${props=> props.isDark ? props.theme.lemuseeblack_00 : props.theme.lemuseeblack_60};
    cursor: pointer;
  }
`;