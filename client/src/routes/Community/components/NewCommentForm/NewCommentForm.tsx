import moment from "moment";
import Moment from "react-moment";
import { useEffect, useState } from "react";
import styled from "styled-components";
import * as G from "../../../../GlobalComponents/Spacing/Spacing";
import * as T from "../../../../GlobalComponents/Text/Text";
import { commentOpenAtom } from "../../../../storage/community";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { myPersonalDataAtom } from "../../../../storage/user";
import { useForm } from "react-hook-form";
import { ICommentForm } from "../../../../Types";

const Wrapper = styled(G.Wrapper)`
  width: 100%;
  padding: 15px 5px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${props => props.theme.lemuseeblack_20};
  ${T.Pretendard15R} {
    color: ${props =>props.theme.lemuseeblack_70};
  };
`;

const UserDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13px;
  ${T.Pretendard15M} {
    color: ${props=>props.theme.lemuseeblack_100};
  };
  ${T.Pretendard13R} {
    color: ${props=>props.theme.lemuseeblack_60};
  };
`;

const TextForm = styled.form`
  width: 100%;
  span {
    font-size: 11px;
    color: ${props=>props.theme.error_red};
    text-align: left;
  }
`;

const CommentTextArea = styled.textarea`
  width: 830px;
  height: 60px;
  resize: none;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  background-color: transparent;
  outline: none;
  border: none;
`;

type INewCommentForm = {
  userId: number | null;
}

function NewCommentForm ({userId}:INewCommentForm) {
  const {register, handleSubmit, setError, formState:{errors}} = useForm<ICommentForm>();
  const [nowTime, setNowTime] = useState<string>("");
  const [writer, setWriter] = useState("");
  const [newCommentContent, setNewCommentContent] = useState<string>("");
  const setCommentOpen = useSetRecoilState(commentOpenAtom);
  const personalData = useRecoilValue(myPersonalDataAtom);
  const onSubmit = (data:ICommentForm) => {
    setError("extraError", {message:"Server offline"});
    if (data.comment) setNewCommentContent(data.comment);
    setCommentOpen(false);
  };

  useEffect(()=> {
    const now = moment();
    setNowTime(String(now));
    if (personalData?.nickname) setWriter(personalData?.nickname);
  }, []);

  return (
    <>
      <Wrapper>
        <UserDate>
          <T.Pretendard15M>{writer}</T.Pretendard15M>
          <T.Pretendard13R>
            <Moment format="YY.MM.DD.">{nowTime}</Moment>
          </T.Pretendard13R>
        </UserDate>
        <TextForm onSubmit={handleSubmit(onSubmit)}>
          <CommentTextArea
          {...register("comment",{
            required: "내용을 작성해주세요."
          })}
            placeholder="댓글을 입력하세요..."
            />
          <button type="submit">수정완료</button>
          <span>{errors?.comment?.message}</span>
        </TextForm>
      </Wrapper>
    </>
  )
};

export default NewCommentForm;