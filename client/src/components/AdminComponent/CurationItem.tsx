import styled from "styled-components";
import * as T from "../Global/Text/Text";
import FileUpLoader from "./FilleUpLoader";
import { IAdminCurationAtom } from "../../atoms";
import { useForm } from "react-hook-form";

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
  };
  textarea {
    height: 106px;
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

interface IForm {
  extraError: string;
  title?: string;
  contents?: string;
  imgUrl?:string;
};

function CurationItem ({cardNum, title, contents, imgUrl}:IAdminCurationAtom) {
  const { register, handleSubmit, setValue, setError, formState:{errors}, } = useForm<IForm>();
  const onValid = (data:IForm) => {
    setError("extraError", {message:"Server offline"});

  };
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
          <Form onSubmit={handleSubmit(onValid)}>
            <input 
                {...register("title", {
                  required: "120자 이내로 제목을 입력하세요"
                })}
                placeholder={title ? title : "120자 이내로 제목을 입력하세요"}
              />
            <textarea 
              {...register("contents", {
                required: "300자 이내로 제목을 입력하세요"
              })}
              placeholder={contents ? contents : "300자 이내로 제목을 입력하세요"}
              />
          </Form>
        </Content>
      </Wrapper>
    </>
  )
};

export default CurationItem;