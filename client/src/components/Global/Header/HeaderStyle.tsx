import styled from "styled-components";

export const MenuTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Logo = styled.button`
  h1 {
    letter-spacing: 3.6px;
  }
`;

export const NavTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 25px;
`;

export const NavTitle = styled.button`
  span {
    letter-spacing: 2.55px;
    color: ${props=>props.theme.lemuseeblack_60};
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

