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
import { ICategories, ICategoriesData } from "../../Types";
import { useCommunityResultHandler } from "../../hooks/useCommunityResultHandler";


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
  const sortedData = useCommunityResultHandler([...CommunityCategories.result]) as ICategories[];

  useEffect(()=>{
    setCopydata([...CommunityCategories.result]);
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
                    <CommunityCategory key={i.title} title={i.title} subtitle={i.subtitle} />
                  ))}
                </S.Categories>
              </S.CategoryArea>
              <S.Lists>
                <S.UpperArea>
                  <S.TitleArea>
                    <S.Title>{`${title} /`}</S.Title>
                    <S.SubTitle>{`${subtitle ? subtitle + " /" : ""}`}</S.SubTitle>
                    <S.SubTitle onClick={() => {navigate(-1)}} style={{cursor:'pointer'}}>{`#${index+1} ${pageId.contentId ? " /" : ""}`}</S.SubTitle>
                    {pageId.contentId ? (
                      <S.ContentTitleArea>
                        <S.ContentTitle>{`${contTitle}`}</S.ContentTitle>
                        <S.ContentTitle>... /</S.ContentTitle>
                      </S.ContentTitleArea>
                    ) : null}
                  </S.TitleArea>
                  {(isLogged && !pageId.contentId) ? (
                    <Link to="/editor">
                      <S.AddBtn>+ Add New</S.AddBtn>
                    </Link>
                  ) : null}
                </S.UpperArea>
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