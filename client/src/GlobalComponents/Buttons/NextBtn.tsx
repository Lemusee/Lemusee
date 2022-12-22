import styled from "styled-components";
import * as T from "../Text/Text";

export const Button = styled.button`
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

interface IButtonName extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  name?:string;
  type?: "submit" | "button" | "reset";
}

function NextBtn (props:IButtonName) {
  return (
    <>
      <Button type={props.type} {...props}>
        <T.Pretendard15R>{props.name}</T.Pretendard15R>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 14C3.72386 14 3.5 14.2239 3.5 14.5C3.5 14.7761 3.72386 15 4 15V14ZM20.5 14.5V15C20.7505 15 20.9623 14.8146 20.9956 14.5664C21.0288 14.3181 20.8732 14.0835 20.6316 14.0176L20.5 14.5ZM15.5 8C15.5 7.72386 15.2761 7.5 15 7.5C14.7239 7.5 14.5 7.72386 14.5 8H15.5ZM4 15H20.5V14H4V15ZM20.6316 14.0176C19.8407 13.8019 18.5419 12.95 17.4259 11.7691C16.3066 10.5846 15.5 9.20472 15.5 8H14.5C14.5 9.59528 15.5268 11.2154 16.6991 12.4559C17.8748 13.7 19.3259 14.6981 20.3684 14.9824L20.6316 14.0176Z" fill="#202020"/>
        </svg>
      </Button>
    </>
  )
}

export default NextBtn;