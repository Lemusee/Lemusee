import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { adminRecruitingAtom } from "../../atoms";
import dummyRecruitingData from "../../assets/dummyData/dummyRecruitment.json";
import { useForm } from "react-hook-form";
import * as T from "../Global/Text/Text";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  ${T.Pretendard19M} {
    display: inline-flex;
    white-space: nowrap;
  };
`;

const FormInputTitle = styled.input`
  width: 100%;
  font-family: Pretendard;
  font-size: 19px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${props=>props.theme.lemuseeblack_50};
`;

const FormTextarea = styled.textarea`
  width: 100%;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: normal;
  text-align: left;
  border: none;
  background-color: transparent;
  resize: none;
  min-height: 100px;
  outline: none;
  overflow: auto;
`;

interface IForm {
  extraError: string;
  recruitment_link?: string;
  inquiry?: string;
  due_at?:string;
  content?: string;
};

function RecruitingForm () {
  const [recruitingData, setRecruitingData] = useRecoilState(adminRecruitingAtom);
  useEffect(()=> {
    const data = {...dummyRecruitingData.result};
    setRecruitingData(data);
  }, []);
  const { register, handleSubmit, setError, formState:{errors}, getValues} = useForm<IForm>();
  const onValid = (data:IForm) => {
    setError("extraError", {message:"Server offline"});
    const multipleValues = getValues(['recruitment_link', 'inquiry', 'due_at', 'content']);
    console.log(multipleValues);
  };
  const textRef = useRef<any>();
  const textareaResize = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
    textRef.current.style.height = `${e.currentTarget.scrollHeight+12}px`
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onValid)}>
        <FormItem>
          <T.Pretendard19M>모집기간</T.Pretendard19M>
          <FormInputTitle 
              type="text"
              {...register("due_at", {
                value: `${recruitingData.due_at ? recruitingData.due_at : "2000.00.00 (월) 00:00 까지"}`
              })}
            />
        </FormItem>
        <FormItem>
          <T.Pretendard19M>문의 연락처</T.Pretendard19M>
          <FormInputTitle 
              type="text"
              {...register("inquiry", {
                value: `${recruitingData.inquiry ? recruitingData.inquiry : "010-0000-0000 (큐레이터 000)"}`
              })}
            />
        </FormItem>
        <FormItem>
          <T.Pretendard19M>지원링크</T.Pretendard19M>
          <FormInputTitle 
              type="text"
              {...register("recruitment_link", {
                value: `${recruitingData.recruitment_link ? recruitingData.recruitment_link : "https://forms.gle/AAAAAAAAAA"}`
              })}
            />
        </FormItem>
        <FormItem>
          <T.Pretendard19M>신입 모집 공고 내용</T.Pretendard19M>
        </FormItem>
        <FormTextarea 
            {...register("content", {
              value: `${recruitingData.content ? recruitingData.content : "모집 공고 내용을 입력하세요..."}`
            })}
            ref={textRef}
            onKeyDown={textareaResize}
          />
      </Form>
    </>
  )
};

export default RecruitingForm;