import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RecoilBridge, useRecoilState } from "recoil";
import {communityPageIndex} from "../../../../atoms";
import styled from "styled-components";
import * as T from "../../../../GlobalComponents/Text/Text";
import { motion } from "framer-motion";
import { ICategories, IisSelected, CommunityParamsMatch } from "../../../../Types";

const CategoryTitle = styled(motion.button)<IisSelected>`
  display: flex;
  flex-direction: row;
  gap:15px;
  color: ${props=> props.isSelected ? props.theme.lemuseeblack_100 : props.theme.lemuseeblack_50};
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

const Subtitle = styled.button<IisSelected>`
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


function CommunityCategory ({title, subtitle}:ICategories) {
  const [openSub, setOpenSub] = useState(false);
  const [indexState, setIndexState] = useRecoilState(communityPageIndex);
  const pageParam = useParams();
  const pageId = pageParam["category"] as string;
  const pageIndex = CommunityParamsMatch[pageId] as number;

  useEffect(()=>{
    setOpenSub(subtitle.filter(ele => ele.index === pageIndex).length !== 0);
  },[indexState, pageParam]);

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };
  
  return (
    <>
      {subtitle[0].name ? (
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
        <Link to={`/${Object.keys(CommunityParamsMatch).find(key => CommunityParamsMatch[key] === subtitle[0].index) as string}/list`}>
          <CategoryTitle 
            onClick={()=> {
              setOpenSub(prev => !prev);
              setIndexState(subtitle[0].index);
              handleTop();
            }} 
            isSelected={openSub}
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
          {(subtitle[0].name) ? subtitle?.map(subtitle => (
            <Link to={`/${Object.keys(CommunityParamsMatch).find(key => CommunityParamsMatch[key] === subtitle.index) as string}/list`} key={subtitle.index}>
              <Subtitle 
                onClick={() => {
                  setIndexState(subtitle.index);
                  setOpenSub(true);
                  handleTop();
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