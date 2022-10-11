import styled from "styled-components";
import * as T from "../Text/Text";

export const Button = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  path {
    stroke: ${props=>props.theme.lemuseeblack_100};
  }
  ${T.Pretendard15R} {
    color: ${props=>props.theme.lemuseeblack_100};
  }
`;

interface IButtonName {
  name?:string;
  type?: "submit" | "button" | "reset";
}

function HomeBtn ({name, type}:IButtonName) {
  return (
    <>
      <Button type={type}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 14C20.2761 14 20.5 14.2239 20.5 14.5C20.5 14.7761 20.2761 15 20 15V14ZM3.5 14.5V15C3.24951 15 3.03767 14.8146 3.00442 14.5664C2.97118 14.3181 3.12678 14.0835 3.36844 14.0176L3.5 14.5ZM8.5 8C8.5 7.72386 8.72386 7.5 9 7.5C9.27614 7.5 9.5 7.72386 9.5 8H8.5ZM20 15H3.5V14H20V15ZM3.36844 14.0176C4.15926 13.8019 5.45809 12.95 6.5741 11.7691C7.69343 10.5846 8.5 9.20472 8.5 8H9.5C9.5 9.59528 8.47324 11.2154 7.3009 12.4559C6.12525 13.7 4.67408 14.6981 3.63156 14.9824L3.36844 14.0176Z" fill="#202020"/>
      </svg>
        <T.Pretendard15R>{name}</T.Pretendard15R>
      </Button>
    </>
  )
}

export default HomeBtn;