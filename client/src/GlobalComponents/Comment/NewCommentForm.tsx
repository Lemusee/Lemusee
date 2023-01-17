import moment from "moment";
import Moment from "react-moment";
import { useEffect, useState } from "react";
import styled from "styled-components";
import * as G from "../Spacing/Spacing";
import * as T from "../Text/Text";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { myPersonalDataAtom } from "../../storage/user";
import { useForm } from "react-hook-form";
import { ICommentForm } from "../../Types";
import {ReactComponent as AddNweSVG} from "../../assets/icons/add_new.svg";
import { isLoggedInAtom } from "../../storage/common";

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

const NewCommentsBtn = styled.button`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  border: dashed 2px ${props=> props.theme.lemuseeblack_60};
`;

function NewCommentForm () {
  const {register, handleSubmit, setError, formState:{errors}} = useForm<ICommentForm>();
  const [nowTime, setNowTime] = useState<string>("");
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const [writer, setWriter] = useState("");
  const [newCommentContent, setNewCommentContent] = useState<string>("");
  const personalData = useRecoilValue(myPersonalDataAtom);
  const [open, setOpen] = useState(false);
  const onSubmit = (data:ICommentForm) => {
    setError("extraError", {message:"Server offline"});
    /**data axios */
    if (data.comment) setNewCommentContent(data.comment);
    setOpen(false);
  };

  useEffect(()=> {
    const now = moment();
    setNowTime(String(now));
    if (personalData?.nickname) setWriter(personalData?.nickname);
  }, []);

  return (
    <>
      {!isLoggedIn ? (
        null
      ) : open ? (
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
      ):(
        <NewCommentsBtn onClick={()=>setOpen(true)}>
          <AddNweSVG/>
        </NewCommentsBtn>
      )}
    </>
  )
};

export default NewCommentForm;