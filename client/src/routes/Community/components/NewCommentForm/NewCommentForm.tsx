import moment from "moment";
import Moment from "react-moment";
import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import * as G from "../../../../GlobalComponents/Spacing/Spacing";
import * as T from "../../../../GlobalComponents/Text/Text";
import { commentOpenAtom } from "../../../../atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

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
  const [nowTime, setNowTime] = useState<string>("");
  const [writer, setWriter] = useState("");
  const [newCommentContent, setNewCommentContent] = useState("");
  const setCommentOpen = useSetRecoilState(commentOpenAtom);
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    setNewCommentContent("");
    setCommentOpen(true);
  };
  useEffect(()=> {
    const now = moment();
    setNowTime(String(now));
    setWriter("여용현");
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
        <TextForm onSubmit={onSubmit}>
          <CommentTextArea placeholder="댓글을 입력하세요..."/>
          <button type="submit">수정완료</button>
        </TextForm>
      </Wrapper>
    </>
  )
};

export default NewCommentForm;