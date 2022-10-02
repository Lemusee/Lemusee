import styled from "styled-components";
import * as T from "../Text/Text";
import * as S from "../Spacing/Spacing"

export const Wrapper = styled(S.Wrapper)`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.lemuseeblack_20};
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

export const LogoRound = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${props=> props.theme.logoBlack});
  background-size: cover;
  background-position: center;
`;

export const LogoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  ${T.Pretendard17B} {
    letter-spacing: 2.55px;
  }
  ${T.Pretendard11R} {
    width: 175px;
    font-size: 8px;
    text-align: left;
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

export const FooterCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 180px;
  height: 140px;
  padding: 20px 15px 31px 10px;
  ${T.Pretendard11R} {
    color: ${props => props.theme.lemuseeblack_60};
    cursor: pointer;
  }
  ${T.Pretendard13M} {
    cursor: pointer;
  }
`;

export const Developer = styled.div`
  margin: 20px 80px;
  ${T.Pretendard11R}{
    color:${props=>props.theme.lemuseeblack_60};
    cursor: pointer;
  }
`;