import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
`;

export const contentTitle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0px;
  text-transform: uppercase;
  color: ${props=>props.theme.lemuseeblack_100};
`;

export const Space150px = styled.div`
  display: flex;
  width: 100px;
  height: 150px;
  background-color: transparent;
`;