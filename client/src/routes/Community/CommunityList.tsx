import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import * as T from "../../components/Global/Text/Text";
import { communityPageIndex, communityCategoryState } from "../../atoms";

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

function CommunityList () {
  const categoryState = useRecoilValue(communityCategoryState);
  const indexState = useRecoilValue(communityPageIndex);
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  
  useEffect(()=> {
    const categoryObj = categoryState.find(i => i.subtitle.find(j => j.index === indexState)) as ICategories;
    const subCategoryObj = categoryObj.subtitle.filter(i => i.index === indexState);
    setTitle(categoryObj.title as string);
    setSubTitle(subCategoryObj[0].name as string);
  }, [categoryState, indexState]);

  
  return (
    <>
      <Wrapper>
        <UpperArea>
          <TitleArea>
            <Title>{`${title} /`}</Title>
            <SubTitle>{`${subtitle ? subtitle + " /" : ""}`}</SubTitle>
          </TitleArea>
          <AddBtn>+ Add New</AddBtn>
        </UpperArea>
      </Wrapper>
    </>
  )
}

export default CommunityList;