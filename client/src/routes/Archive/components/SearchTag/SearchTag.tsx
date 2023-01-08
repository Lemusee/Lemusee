import styled from "styled-components";
import { IFocus } from "../../../../GlobalComponents/Spacing/Spacing";
import * as T from "../../../../GlobalComponents/Text/Text"; 
import { ISearchFocus, ISearchTag } from "../../../../Types";


export const Tag = styled.div<IFocus>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 7px;
  border-radius: 15px;
  transition: 0.2s;
  color: ${props=>props.theme.lemuseeblack_00};
  background-color: ${props => props.focus === props.state ? props.theme.lemuseeblack_70 : props.theme.lemuseeblack_30};
  path {
    stroke: ${props => props.focus === props.state ? props.theme.lemuseeblack_00 : props.theme.lemuseeblack_100};
  };
  &:hover {
    background-color: ${props => props.focus === props.state ? props.theme.lemuseeblack_70 : props.theme.lemuseeblack_50};
    transition: 0.2s;
  };
  svg {
    cursor: pointer;
  };
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: ${props=>props.theme.lemuseeblack_00};
  outline: none;
`;

function SearchTag ({focus, state, onClickFunc}:ISearchTag) {
  return (
    <>
      <Tag focus={focus} state={state}>
        {focus === state ? <SearchInput/> : <></>}
        <svg onClick={onClickFunc} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 16.7059L18 19M18 12.1176C18 15.4963 15.3137 18.2353 12 18.2353C8.68629 18.2353 6 15.4963 6 12.1176C6 8.73896 8.68629 6 12 6C15.3137 6 18 8.73896 18 12.1176Z" stroke="#202020" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Tag>
    </>
  )
}

export default SearchTag;