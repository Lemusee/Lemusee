import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import {communityPageIndex} from "../../atoms";
import styled from "styled-components";
import * as T from "../../components/Global/Text/Text";

interface ICategory {
  title?:string;
  subtitles:{
      name?:string;
      index:number;
    }[];
};

interface isSelected {
  isSelected?:boolean;
};

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
  color: ${props=> props.isSelected ? props.theme.lemuseeblack_100 : props.theme.lemuseeblack_50};
  background-color: ${props=> props.isSelected ? props.theme.lemuseeblack_30 : "transparent"};
  &:hover {
    color: ${props=>props.theme.lemuseeblack_100};
  };
  ${T.Pretendard15R} {
    color: inherit;
  };
`;

type ParamsMatchType = {
  [index: string]: number;
};

const ParamsMatch:ParamsMatchType = {
  all:0,
  electionCommittee_notice:1,
  electionCommittee_proceedings:2,
  electionCommittee_ref:3,
  curator_notice:4,
  curator_proceedings:5,
  curator_ref:6,
  contents_notice:7,
  contents_proceedings:8,
  contents_ref:9,
  culture_notice:10,
  culture_proceedings:11,
  culture_ref:12,
  admin_notice:13,
  admin_proceedings:14,
  admin_ref:15,
  freeBoard:16,
};


function CommunityCategory ({title, subtitles}:ICategory) {
  const [openSub, setOpenSub] = useState(false);
  const [indexState, setIndexState] = useRecoilState(communityPageIndex);
  const pageParam = useParams();
  const pageId = pageParam["category"] as string;
  const pageIndex = ParamsMatch[pageId] as number;

  useEffect(()=>{
    setOpenSub(subtitles.filter(ele => ele.index === pageIndex).length !== 0);
  },[indexState, pageParam]);
  
  return (
    <>
      {subtitles[0].name ? (
        <CategoryTitle 
          onClick={()=> {
            setOpenSub(prev => !prev);
          }} 
          isSelected={openSub}
        >
          <T.Pretendard44M>{title}</T.Pretendard44M>
          <T.Pretendard44M>/</T.Pretendard44M>
        </CategoryTitle>
      ) : (
        <Link to={`/${Object.keys(ParamsMatch).find(key => ParamsMatch[key] === subtitles[0].index) as string}/list`}>
          <CategoryTitle 
            onClick={()=> {
              setOpenSub(prev => !prev);
            }} 
            isSelected={openSub}
          >
            <T.Pretendard44M>{title}</T.Pretendard44M>
            <T.Pretendard44M>/</T.Pretendard44M>
          </CategoryTitle>
        </Link>
      )}
      {openSub ? (
        <Subtitles>
          {(subtitles[0].name) ? subtitles?.map(subtitle => (
            <Link to={`/${Object.keys(ParamsMatch).find(key => ParamsMatch[key] === subtitle.index) as string}/list`}>
              <Subtitle 
                onClick={() => {
                  setIndexState(subtitle.index);
                  setOpenSub(true);
                }} 
                isSelected={(subtitle.index === pageIndex)}
              >
                <T.Pretendard15R>{subtitle?.name}</T.Pretendard15R>
              </Subtitle>
            </Link>
          )): <></>}
        </Subtitles>
      ) : <></>}
    </>
  )
}

export default CommunityCategory;