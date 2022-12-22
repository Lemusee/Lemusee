import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RecoilBridge, useRecoilState } from "recoil";
import {communityPageIndex} from "../../../atoms";
import styled from "styled-components";
import * as T from "../../../GlobalComponents/Text/Text";
import { motion } from "framer-motion";

interface ICategory {
  title?:string;
  subtitles:{
      name?:string;
      index:number;
    }[];
};

type $isselected = {
  $isselected?:boolean;
};

const CategoryTitle = styled(motion.button)<$isselected>`
  display: flex;
  flex-direction: row;
  gap:15px;
  color: ${props=> props.$isselected ? props.theme.lemuseeblack_100 : props.theme.lemuseeblack_50};
  transition: 0.3s;
  &:hover {
    color: ${props=>props.theme.lemuseeblack_100};
  };
  ${T.Pretendard44M} {
    color: inherit;
  };
`;

const Subtitles = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
`;

const Subtitle = styled.button<$isselected>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: ${props=> props.$isselected ? props.theme.lemuseeblack_100 : props.theme.lemuseeblack_50};
  background-color: ${props=> props.$isselected ? props.theme.lemuseeblack_30 : "transparent"};
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
  all_rule:0,
  all_account:1,
  all_form:2,
  notice:3,
  electionCommittee_notice:4,
  electionCommittee_pledge:5,
  curator_notice:6,
  curator_proceedings:7,
  curator_ref:8,
  contents_notice:9,
  contents_proceedings:10,
  contents_ref:11,
  culture_notice:12,
  culture_proceedings:13,
  culture_ref:14,
  admin_notice:15,
  admin_proceedings:16,
  admin_ref:17,
  freeBoard_free:18,
  freeBoard_group:19,
  freeBoard_excuse:20,
};

const SubtitleVariants = {
  start: {
    y:-10,
    opacity:0,
  },
  end: {
    y:0,
    opacity:1,
  }
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

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };
  
  return (
    <>
      {subtitles[0].name ? (
        <CategoryTitle 
          onClick={()=> {
            setOpenSub(prev => !prev);
          }} 
          $isselected={openSub}
        >
          <T.Pretendard44M>{title}</T.Pretendard44M>
          <T.Pretendard44M>/</T.Pretendard44M>
        </CategoryTitle>
      ) : (
        <Link to={`/${Object.keys(ParamsMatch).find(key => ParamsMatch[key] === subtitles[0].index) as string}/list`}>
          <CategoryTitle 
            onClick={()=> {
              setOpenSub(prev => !prev);
              setIndexState(subtitles[0].index);
              handleTop();
            }} 
            $isselected={openSub}
          >
            <T.Pretendard44M>{title}</T.Pretendard44M>
            <T.Pretendard44M>/</T.Pretendard44M>
          </CategoryTitle>
        </Link>
      )}
      {openSub ? (
        <Subtitles
          variants={SubtitleVariants}
          initial="start"
          animate="end"
          transition={{
            duration:0.3
          }}
        >
          {(subtitles[0].name) ? subtitles?.map(subtitle => (
            <Link to={`/${Object.keys(ParamsMatch).find(key => ParamsMatch[key] === subtitle.index) as string}/list`} key={subtitle.index}>
              <Subtitle 
                onClick={() => {
                  setIndexState(subtitle.index);
                  setOpenSub(true);
                  handleTop();
                }} 
                $isselected={(subtitle.index === pageIndex)}
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