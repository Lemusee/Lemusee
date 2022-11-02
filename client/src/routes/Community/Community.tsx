import Header from "../../components/Global/Header/Header";
import styled from "styled-components";
import * as S from "./SCommunity";
import * as G from "../../components/Global/Spacing/Spacing";
import CommunityCategory from "../../components/CommunityComponents/Category";
import CommunityCategories from "../../assets/dummyData/dummyCommunityCategories.json";
import { useEffect, useState } from "react";
import Loading from "../../components/Global/Loading/Loading";

interface ICategories {
  title?:string;
  subtitle?:string[];
}

function Community () {
  const [category, setCategory] = useState<ICategories[]>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    setCategory([...CommunityCategories.result]);
    setIsLoading(false);
  },[])
  return (
    <>
      {isLoading ? <Loading/> : (
        <>
          <Header thickness={false} />
          <G.Space150px/>
          <S.Wrapper>
            <S.Container>
              <S.Categories>
                {category?.map(i => (
                  <CommunityCategory title={i.title} subtitles={i.subtitle} />
                ))}
              </S.Categories>
            </S.Container>
          </S.Wrapper>
        </>
      )}
    </>
  )
}

export default Community;