import styled from "styled-components";
import * as T from "../../../../../GlobalComponents/Text/Text";
import FileUpLoader from "../../Common/FileUpLoader/FilleUpLoader";
import { adminCurationAtom, adminCurationFileAtom } from "../../../../../storage/admin";
import { useForm, useWatch } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ICurationItemForm, ICurationItemData } from "../../../../../Types";
import { useEffect } from "react";

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

const FileUploaderLayout = styled.div`
  flex-basis: 300px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 13px;
  input {
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    font-family: Pretendard;
    font-size: 21px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: left;
    color: ${props=>props.theme.lemuseeblack_100};
    text-transform: uppercase;
  };

  textarea {
    width: 100%;
    height: 130px;
    border: none;
    background: transparent;
    outline: none;
    resize: none;
    font-family: Pretendard;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: normal;
    text-align: left;
    color: ${props=>props.theme.lemuseeblack_80};
  };
`;

function CurationItem ({index, cardNum, title, contents, imgData}:ICurationItemData) {
  const [adminCurationFileData, setAdminCurationFileData] = useRecoilState(adminCurationFileAtom);
  const setAdminCuration = useSetRecoilState(adminCurationAtom);
  const { register, handleSubmit, setError, formState:{errors}, getValues, control} = useForm<ICurationItemForm>();
  const watchAll = useWatch({
    control,
    name: ["title", "contents"]
  });
  const onValid = (data:ICurationItemForm) => {
    setError("extraError", {message:"Server offline"});
  };
  useEffect(() => {
    setAdminCuration(prev => {
      let copyCuration = [...prev];
      const changedData = {cardNum:index, title:getValues("title"), contents:getValues("contents"), imgData:adminCurationFileData[index]}
      copyCuration.splice(index, 1, changedData);
      console.log("this", copyCuration);
      return copyCuration;
    });
  }, [watchAll]);
  // console.log("files", adminCurationFileData);
  const [adminCurationData ,setAdminCurationData] = useRecoilState(adminCurationAtom);
  const handleDelete = () => {
    let data = [...adminCurationData];
    data.splice(index, 1);
    setAdminCurationData(data);
  };

  return (
    <>
      <Wrapper>
        <Title>
          <T.Pretendard17M>{`Curation #${index}`}</T.Pretendard17M>
          <DeleteBtn onClick={handleDelete}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.05024 7.05025L16.9497 16.9497M7.05024 16.9497L16.9497 7.05025" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </DeleteBtn>
        </Title>
        <Content>
          <FileUploaderLayout>
            <FileUpLoader imgUrlPlaceholder={typeof imgData === "string" ? imgData : undefined} grayscale={85} setRecoil={setAdminCurationFileData} />
          </FileUploaderLayout>
          <Form onSubmit={handleSubmit(onValid)}>
            <input 
              type="text"
                {...register("title", {
                  maxLength: 60,
                  value: `${title ? title : "120자 이내로 제목을 입력하세요"}`
                })}
              />
            <textarea 
              {...register("contents", {
                maxLength: 300,
                value: `${contents ? contents : "300자 이내로 제목을 입력하세요"}`
              })}
              />
          </Form>
        </Content>
      </Wrapper>
    </>
  )
};

export default CurationItem;