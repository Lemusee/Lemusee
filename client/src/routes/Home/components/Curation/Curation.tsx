import * as S from "./SCuration";
import * as T from "../../../../GlobalComponents/Text/Text";
import CurationListCard from "./CurationListCard";
import dummyCuration from "../../../../assets/dummyData/dummyCurationGET.json";
import React, { ReactElement, useEffect, useState } from "react";
import { useRecoilState} from "recoil";
import { curationState } from "../../../../atoms";
import Loading from "../../../../GlobalComponents/Loading/Loading";
import {ReactComponent as NextCurationSVG} from "../../../../assets/icons/nextCuration.svg";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import styled from "styled-components";

interface ICurationSorted {
  cardNum: number;
  title: string;
  contents: string;
  imgUrl: string;
};

const initialData: ICurationSorted[] = [{
  cardNum: 0,
  title: "Curation Title",
  contents : "Curation Contents",
  imgUrl : ""
}]

const CardBox = styled(motion.div)``;

const offset = 4;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 3,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -window.outerWidth - 3,
    opacity: 1,
  },
};

function Curation () {
  const [curationList, setCurationList] = useState([...dummyCuration.result.items]);
  const [curationSorted, setCurationSorted] = useState<ICurationSorted[]>(initialData);
  const [curationInfo, setCurationInfo] = useRecoilState(curationState);
  const [isLoading, setIsLoading] = useState(false);
  const [focus, setFocus] = useState(0);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  useEffect(()=>{
    setCurationList([...dummyCuration.result.items]);
    const curations = curationList.map((list) => {
      return (
        {
          cardNum: list.cardNum,
          title: list.title,
          contents : list.contents,
          imgUrl : list.imgUrl
        }
      )
    });
    setCurationSorted(curations);
    setCurationInfo(curations);
    setIsLoading(true);
  }, [curationList, setCurationInfo]);
  const totalCards = curationInfo.length - 1;
  const extraCard = (totalCards+1) % offset;
  const maxIndex = Math.floor(totalCards / offset);
  const onClick = () => {
    if ((((focus+1) / offset) >= (index+1)) && (maxIndex > index)) {
      setIndex((prev) => (prev === maxIndex ? 0 : prev+1));
      setFocus(prev => prev+1);
    } else {
      setFocus((prev:number) => {
        if (focus < totalCards){
          return prev+1;
        } else {
          setIndex(0);
          return 0;
        }});
    };
    };
  const toggleLeaving = () => setLeaving(prev => !prev);
  const increaseIndex = () => {
    if (curationList) {
      toggleLeaving();
      setIndex((prev) => (prev === maxIndex ? 0 : prev+1));
      setFocus(index == maxIndex ? 0 : (index+1)*offset);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          {isLoading ? (
            <S.CurationBoard>
              <S.BoardLeft>
                <S.BoardLeftText>
                  <T.Pretendard44B color="#b7b7b7">{`CURATION#${curationInfo[focus]?.cardNum}`}</T.Pretendard44B>
                  <T.Pretendard44B>{curationInfo[focus].title}</T.Pretendard44B>
                  <T.Pretendard17R>
                    {curationInfo[focus].contents}
                  </T.Pretendard17R>
                </S.BoardLeftText>
                <S.nexBtn onClick={onClick}>
                  <T.Pretendard15M>Next Curation</T.Pretendard15M>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14C3.72386 14 3.5 14.2239 3.5 14.5C3.5 14.7761 3.72386 15 4 15V14ZM20.5 14.5V15C20.7505 15 20.9623 14.8146 20.9956 14.5664C21.0288 14.3181 20.8732 14.0835 20.6316 14.0176L20.5 14.5ZM15.5 8C15.5 7.72386 15.2761 7.5 15 7.5C14.7239 7.5 14.5 7.72386 14.5 8H15.5ZM4 15H20.5V14H4V15ZM20.6316 14.0176C19.8407 13.8019 18.5419 12.95 17.4259 11.7691C16.3066 10.5846 15.5 9.20472 15.5 8H14.5C14.5 9.59528 15.5268 11.2154 16.6991 12.4559C17.8748 13.7 19.3259 14.6981 20.3684 14.9824L20.6316 14.0176Z" fill="#202020"/>
                  </svg>
                </S.nexBtn>
              </S.BoardLeft>
              <S.BoardRightImg imgUrl={curationInfo[focus].imgUrl}/>
            </S.CurationBoard>
          ) : <Loading/>}
          <S.CurationListArea>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <S.CurationList
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{type:"tween", duration:0.3}}
              >
                {isLoading ? (
                  curationInfo.slice(offset*index, offset*index + offset).map(list => (
                    <CardBox
                      layoutId={list.cardNum+''}
                      key={list.cardNum}
                      onClick={()=>setFocus(list.cardNum)} 
                    >
                      <CurationListCard 
                        {...list} 
                        key={list.cardNum} 
                        focus={focus}
                      />
                    </CardBox>
                  ))
                ) : <Loading/>}
              </S.CurationList>
            </AnimatePresence>
            <S.NextCurationBtn onClick={increaseIndex}>
              <NextCurationSVG/>
            </S.NextCurationBtn>
          </S.CurationListArea>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Curation;