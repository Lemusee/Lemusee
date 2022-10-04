import styled from "styled-components";
import * as G from "../Spacing/Spacing";
import * as T from "../Text/Text";

interface INavState {
  thickness?:boolean;
}

export const EmptyBlock = styled(G.Wrapper)`
  height: 80px;
`;

export const Wrapper = styled(G.Wrapper)<INavState>`
  border-bottom: 1px solid ${props=>props.thickness ? "transperant" : props.theme.lemuseeblack_20};
  position: ${props=>props.thickness ? "unset" : "fixed"};
  background-color: ${props=>props.theme.lemuseeblack_10};
`;

export const Container = styled(G.Container)<INavState>`
  padding: ${props=> props.thickness ? "50px 0" : "none" };
  gap: ${props=> props.thickness ? "60px" : "0px"};
  height: ${props => props.thickness ? "inherits": "80px"};
  justify-content: ${props=>props.thickness ? "inherit" : "center"};
`;

export const MenuTop = styled.div<INavState>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${props=>props.thickness ? "flex-start" : "center"};
`;

export const Logo = styled.button`
  h1 {
    letter-spacing: 3.6px;
  }
`;

export const NavTitles = styled.div<INavState>`
  display: flex;
  flex-direction: ${props=>props.thickness ? "column" : "row"};
  justify-content: center;
  align-items: flex-end;
  gap: ${props=>props.thickness ? "25px" : "75px"};
`;

export const NavTitle = styled.button`
  ${T.Pretendard17M} {
    letter-spacing: 2.55px;
    color: ${props=>props.theme.lemuseeblack_60};
  }
  ${T.Pretendard17R} {
    font-weight: 500;
    color: ${props=>props.theme.lemuseeblack_70};
    text-decoration: underline;
  }
`;

export const MenuBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavSubTitles = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavSubTitle = styled.button`
  p {
    color: ${props=>props.theme.lemuseeblack_60};
  }
`;

export const Bar = styled.div`
  width: 1px;
  height: 22px;
  background-color: ${props=>props.theme.lemuseeblack_50};
  margin: 0 2px;
`;

