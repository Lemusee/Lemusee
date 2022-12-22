import Header from "../../GlobalComponents/Header/Header";
import styled from "styled-components";
import * as S from "./SCommunity";
import * as G from "../../GlobalComponents/Spacing/Spacing";
import * as T from "../../GlobalComponents/Text/Text";
import CommunityCategory from "./components/Category/Category";
import CommunityCategories from "../../assets/dummyData/dummyCommunityCategories.json";
import { useEffect, useState } from "react";
import Loading from "../../GlobalComponents/Loading/Loading";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { communityCategoryState, communityPageIndex, communitypagenationIndex, contentTitleAtom, isLoggedInAtom, communityCategoryTitleAtom, communityCategorySubTitleAtom } from "../../atoms";
import Footer from "../../GlobalComponents/Footer/Footer";

interface ICategoriesData {
  title?:string;
  index?:number;
};

interface ICategories {
  title?:string;
  subtitle:{
      name?:string;
      index:number;
    }[]
};

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
  max-width: 540px;
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 5px;
  padding: 0 3px;
  &:hover {
    background-color: ${props=> props.theme.lemuseeblack_30};
  };
  &:active {
    background-color: ${props=>props.theme.lemuseeblack_50};
  }
`;

const ContentTitleArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentTitle = styled(T.Pretendard24B)`
  color: ${props=>props.theme.lemuseeblack_100};
  max-width: 350px;
  max-height: 30px;
  white-space: no-wrap;
  overflow: hidden;
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

const AddBtn = styled.button``;

/**{title : _title-_subtitle, index : _number} 형식의 data를 받아서 [..., {title:_title, subtitle:[]}, ...]의 형태로 반환하는 함수*/
const titlelistHandler = (data:ICategoriesData[]) => {
  const titles = data.map((item:ICategoriesData) => {return item.title?.split('-')[0] as string});
  const titleSet = Array.from(new Set(titles));
  const titleList = titleSet.map(t => {
    return {title:t, subtitle:[]}
  })
  return titleList;
};

/**title:string, data:ICategories[] 를 받아서 data[title]에 해당하는 subtitle[]의 원소를 리스트에 넣어서 반환 */
const subtitleHandler = (title:string, data:ICategories[]) => {
  const sortSubtitleByTitle = data.filter(i => (i.title === title));
  const subtitles = sortSubtitleByTitle.map(i => {if (i.subtitle) return i.subtitle[0]});
  return subtitles;
};

/**{title : _title-_subtitle, index : _number} 형식의 인수를 받아서 {title:_title, subtitle:[{name:_subtitle, index:_number}]} 형식으로 반환하는 함수 */
const titleSubtitleDivider = (data:ICategoriesData[]) => {
  const titleList = data.map(i =>{
    const _title = i.title?.split('-')[0] as string;
    const _subtitle = i.title?.split('-')[1] as string | undefined;
    return {title:_title, subtitle:[{name:_subtitle, index:i.index as number}]}
  })
  return titleList;
};

/**{title : _title-_subtitle, index : _number}형식의 데이터를 받아서 같은 _title을 가진 _subtitle끼리 묶어 {title:_title, subtitle:[{name:_subtitle, index:_number},...]} 형태로 반환 */
const resultHandler = (data:ICategoriesData[]) => {
  const titleList = titlelistHandler(data);
  const dividedlist = titleSubtitleDivider(data);
  const result = titleList.map(i =>{
    const subtitleList = subtitleHandler(i.title, dividedlist);
    return {title:i.title, subtitle:[...subtitleList]};
  })
  return result;
};


function Community () {
  const [isLoading, setIsLoading] = useState(true);
  const isLogged = useRecoilValue(isLoggedInAtom);
  const [copydata, setCopydata] = useState<ICategoriesData[]>();
  const [category, setCategory] = useState<ICategories[]>();
  const [categoryState, setCategoryState] = useRecoilState(communityCategoryState);
  const indexState = useRecoilValue(communityPageIndex);
  const index = useRecoilValue(communitypagenationIndex);
  const contTitle = useRecoilValue(contentTitleAtom);
  let pageId = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useRecoilState(communityCategoryTitleAtom);
  const [subtitle, setSubTitle] = useRecoilState(communityCategorySubTitleAtom);

  useEffect(()=>{
    setCopydata([...CommunityCategories.result]);
    const sortedData = resultHandler([...CommunityCategories.result]) as ICategories[];
    setCategory(sortedData);
    setCategoryState(sortedData);
    setIsLoading(false);
  },[setCategoryState]);

  useEffect(()=>{
    if (categoryState && (indexState !== undefined)) {
      const categoryObj = categoryState.find(i => i.subtitle?.find(j => j.index === indexState)) as ICategories;
      if (categoryObj?.subtitle !== undefined) {
        const subCategoryObj = categoryObj.subtitle.filter(i => i.index === indexState);
        setSubTitle(subCategoryObj[0].name as string);
        setTitle(categoryObj.title as string);
      }
    }
  },[categoryState, indexState, pageId, setSubTitle, setTitle]);

  return (
    <>
      <Header thickness={false} />
      {isLoading ? <Loading/> : (
        <>
          <G.Space150px/>
          <S.Wrapper>
            <S.Container>
              <S.CategoryArea>
                <S.Categories>
                  {category?.map((i) => (
                    <CommunityCategory key={i.title} title={i.title} subtitles={i.subtitle} />
                  ))}
                </S.Categories>
              </S.CategoryArea>
              <S.Lists>
                <UpperArea>
                  <TitleArea>
                    <Title>{`${title} /`}</Title>
                    <SubTitle>{`${subtitle ? subtitle + " /" : ""}`}</SubTitle>
                    <SubTitle onClick={() => {navigate(-1)}} style={{cursor:'pointer'}}>{`#${index+1} ${pageId.contentId ? " /" : ""}`}</SubTitle>
                    {pageId.contentId ? (
                      <ContentTitleArea>
                        <ContentTitle>{`${contTitle}`}</ContentTitle>
                        <ContentTitle>... /</ContentTitle>
                      </ContentTitleArea>
                    ) : null}
                  </TitleArea>
                  {(!isLogged && pageId.contentId) ? null : (
                    <Link to="/editor">
                      <AddBtn>+ Add New</AddBtn>
                    </Link>
                  )}
                </UpperArea>
                <Outlet context={{pageId}}/>
              </S.Lists>
            </S.Container>
          </S.Wrapper>
          <G.Space150px />
        </>
      )}
      <Footer/>
    </>
  )
}

export default Community;