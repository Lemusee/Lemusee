import styled from "styled-components";
import * as T from "../Global/Text/Text";
import FileUpLoader from "./FilleUpLoader";
import { IAdminCurationAtom } from "../../atoms";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${T.Pretendard17M} {
    color: ${props=>props.theme.lemuseeblack_100};
  };
`;

const DeleteBtn = styled.button`
  width: 24px;
  height: 24px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;



function CurationItem ({cardNum, title, contents, imgUrl}:IAdminCurationAtom) {
  return (
    <>
      <Wrapper>
        <Title>
          <T.Pretendard17M>{`Curation #${cardNum}`}</T.Pretendard17M>
          <DeleteBtn>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.05024 7.05025L16.9497 16.9497M7.05024 16.9497L16.9497 7.05025" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </DeleteBtn>
        </Title>
        <Content>
          <FileUpLoader imgUrlPlaceholder={imgUrl ? imgUrl : undefined}/>
        </Content>
      </Wrapper>
    </>
  )
};

export default CurationItem;