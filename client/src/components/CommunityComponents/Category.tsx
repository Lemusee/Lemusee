import { useState } from "react";
import styled from "styled-components";
import * as T from "../../components/Global/Text/Text";

interface ICategory {
  title?:string;
  subtitles?:string[];
  selected?:boolean;
}

interface isSelected {
  isSelected?:boolean;
}

const CategoryTitle = styled.button<isSelected>`
  display: flex;
  flex-direction: row;
  gap:15px;
  color: ${props=> props.isSelected ? props.theme.lemuseeblack_100 : props.theme.lemuseeblack_50};
  &:hover {
    color: ${props=>props.theme.lemuseeblack_100};
  };
  ${T.Pretendard44M} {
    color: inherit;
  };
`;

const Subtitles = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
`;

const Subtitle = styled.button<isSelected>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: ${props=>props.theme.lemuseeblack_50};
  &:hover {
    color: ${props=>props.theme.lemuseeblack_100};
  };
  ${T.Pretendard15R} {
    color: inherit;
  };
`;

function CommunityCategory ({title, subtitles, selected}:ICategory) {
  const [openSub, setOpenSub] = useState(false);
  return (
    <>
      <CategoryTitle onClick={()=> setOpenSub(prev => !prev)} isSelected={openSub || selected}>
        <T.Pretendard44M>{title}</T.Pretendard44M>
        <T.Pretendard44M>/</T.Pretendard44M>
      </CategoryTitle>
      {openSub ? (
        <Subtitles>
          {subtitles?.map(subtitle => (
            <Subtitle>
              <T.Pretendard15R>{subtitle}</T.Pretendard15R>
            </Subtitle>
          ))}
        </Subtitles>
      ) : <></>}
    </>
  )
}

export default CommunityCategory;