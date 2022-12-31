import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import * as T from "../../../../GlobalComponents/Text/Text";
import { communityPageIndex, communityCategoryState, communitypagenationIndex } from "../../../../storage/community";
import dummyList from "../../../../assets/dummyData/dummyCommunityListData.json";
import ListItem from "../ListItem/ListItem";
import Loading from "../../../../GlobalComponents/Loading/Loading";
import { AnimatePresence, motion } from "framer-motion";
import {ReactComponent as NextBtnSVG} from "../../../../assets/icons/next_pagenation.svg";
import {ReactComponent as PrevBtnSVG} from "../../../../assets/icons/prev_pagenation.svg";
import { Link, useParams } from "react-router-dom";
import { IisSelected, ICommunityListItem } from "../../../../Types";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
`;

const ListArea = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const PagenationArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PagenationBtn = styled.button<IisSelected>`
  width: 23px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props=> props.isSelected ? props.theme.lemuseeblack_30 :props.theme.lemuseeblack_00};
  ${T.Pretendard13R} {
    color: ${props=> props.isSelected ? props.theme.lemuseeblack_100 :props.theme.lemuseeblack_60};
  }
`;

const PagenationNumArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  background-color: ${props=>props.theme.lemuseeblack_00};
  border-radius: 5px;
`;

const OFFSET = 10;

const rowVariants = {
  prev: (back:boolean) => ({
    x: back ? -100 : 100,
    opacity: 0,
  }),
  now: {
    x: 0,
    opacity: 1,
  },
  next: (back:boolean) => ({
    x: back ? 100 : -100,
    opacity: 0,
  }),
};

function CommunityList () {
  //sorted category list, category index, page parametor
  const categoryState = useRecoilValue(communityCategoryState);
  const indexState = useRecoilValue(communityPageIndex);
  const pageParam = useParams();

  //data fetched & is loading
  const [listData, setListData] = useState<ICommunityListItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [index, setIndex] = useRecoilState(communitypagenationIndex); //page index
  const [maxIndex, setMaxIndex] = useState(0); //max pageIndex
  const [totalLength, setTotalLength] = useState(0);
  const [pagenationArray, setPagenationArray] = useState<number[]>([]);

  useEffect(()=> {
    /**list data를 받아서 저장 */
    setListData([...dummyList.result.list]);
    setIsLoading(true);

    /**pagenation에 필요한 지금 page의 index, 전체 페이지의 수를 처리 */
    setIndex(0);
    setTotalLength(listData.length);
    setMaxIndex(Math.floor(totalLength / OFFSET));
    setPagenationArray(Array(maxIndex+1).fill(0).map((arr, i) => {return i+1}));
  }, [categoryState, indexState, pageParam]);
  
  /**pagenation의 전후를 표시 */
  const [back, setBack] = useState(false);

  /**onClick에 할당,click시 pagenation index값을 +1씩 늘려주며 마지막 페이지에 이르면 index 증가를 정지함 */
  const nextToggle = () => {
    if (listData) {
      setIndex((prev) => (prev === maxIndex ? maxIndex : prev+1));
    }
    setBack(false);
  };
  
  /**onClick에 할당,click시 pagenation index값을 -1씩 늘려주며 첫번째 페이지에 이르면 index 감소를 정지함 */
  const prevToggle = () => {
    if (listData) {
      setIndex((prev) => (prev === 0 ? 0 : prev-1));
    }
    setBack(true);
  };

  /**클릭하면 스크롤이 위로 올라가는 함수 */
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };

  useEffect(()=> {
    handleTop();
  }, [index])
  
  
  return (
    <>
      <Wrapper>
        <AnimatePresence initial={false} custom={back} mode="wait">
          <ListArea
            key={index}
            custom={back}
            variants={rowVariants}
            initial="prev"
            animate="now"
            exit="next"
            transition={{type:"tween", duration:0.3}}
          >
            {isLoading ? (
              listData.slice(OFFSET*index, OFFSET*index + OFFSET).map(list => (
                <ListItem 
                  key={list.id} 
                  id={list.id} 
                  title={list.title} 
                  preview={list.preview} 
                  updatedAt={list.updatedAt} 
                  writer={list.writer}
                />
                ))
            ) : (
              <Loading />
            )}
          </ListArea>
        </AnimatePresence>
        <PagenationArea>
          <PagenationBtn onClick={prevToggle} isSelected={false}>
            <PrevBtnSVG/>
          </PagenationBtn>
          <PagenationNumArea>
            {pagenationArray.map((i:number) => (
                <PagenationBtn key={i} isSelected={i === index+1} onClick={() => {setIndex(i-1)}}>
                  <T.Pretendard13R>{i}</T.Pretendard13R>
                </PagenationBtn>
              ))}
          </PagenationNumArea>
          <PagenationBtn onClick={nextToggle} isSelected={false}>
            <NextBtnSVG/>
          </PagenationBtn>
        </PagenationArea>
      </Wrapper>
    </>
  )
}

export default CommunityList;