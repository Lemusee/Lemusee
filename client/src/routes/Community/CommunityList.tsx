import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import * as T from "../../components/Global/Text/Text";
import { communityPageIndex, communityCategoryState } from "../../atoms";
import dummyList from "../../assets/dummyData/dummyCommunityListData.json";
import ListItem, {IItem} from "../../components/CommunityComponents/ListItem";
import Loading from "../../components/Global/Loading/Loading";
import { AnimatePresence, motion } from "framer-motion";
import {ReactComponent as NextBtnSVG} from "../../assets/icons/next_pagenation.svg";
import {ReactComponent as PrevBtnSVG} from "../../assets/icons/prev_pagenation.svg";
import { Link } from "react-router-dom";

interface ICategories {
  title?:string;
  subtitle:{
      name?:string;
      index:number;
    }[]
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
`;

const UpperArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(T.Pretendard24B)`
  color: ${props=>props.theme.lemuseeblack_50};
`;

const SubTitle = styled(T.Pretendard24B)`
  color: ${props=>props.theme.lemuseeblack_100};
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;


const AddBtn = styled.button``;

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

interface isSelected {
  isSelected?:boolean;
};

const PagenationBtn = styled.button<isSelected>`
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
  const categoryState = useRecoilValue(communityCategoryState);
  const indexState = useRecoilValue(communityPageIndex);
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [listData, setListData] = useState<IItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [totalLength, setTotalLength] = useState(0);
  const [pagenationArray, setPagenationArray] = useState<number[]>([]);

  useEffect(()=> {
    /**category data를 처리해서 리스트의 제목에 부여함 */
    const categoryObj = categoryState.find(i => i.subtitle.find(j => j.index === indexState)) as ICategories;
    const subCategoryObj = categoryObj.subtitle.filter(i => i.index === indexState);
    setTitle(categoryObj.title as string);
    setSubTitle(subCategoryObj[0].name as string);

    /**list data를 받아서 저장 */
    setListData([...dummyList.result.list]);
    setIsLoading(true);

    /**pagenation에 필요한 지금 page의 index, 전체 페이지의 수를 처리 */
    setIndex(0);
    setTotalLength(listData.length);
    setMaxIndex(Math.floor(totalLength / OFFSET));
    setPagenationArray(Array(maxIndex+1).fill(0).map((arr, i) => {return i+1}));
  }, [categoryState, indexState]);
  
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
  
  return (
    <>
      <Wrapper>
        <UpperArea>
          <TitleArea>
            <Title>{`${title} /`}</Title>
            <SubTitle>{`${subtitle ? subtitle + " /" : ""}`}</SubTitle>
            <SubTitle>{`#${index+1}`}</SubTitle>
          </TitleArea>
          <Link to="/editor">
            <AddBtn>+ Add New</AddBtn>
          </Link>
        </UpperArea>
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
                <PagenationBtn isSelected={i === index+1} onClick={() => {setIndex(i-1)}}>
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